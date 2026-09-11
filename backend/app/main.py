import os
from email.message import EmailMessage
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr, Field
from dotenv import load_dotenv
import aiosmtplib

load_dotenv()
app = FastAPI(title='Dholera & Lothal Enquiry API', version='1.0.0')

origins = [x.strip() for x in os.getenv('CORS_ORIGINS','http://localhost:5173').split(',') if x.strip()]
app.add_middleware(CORSMiddleware, allow_origins=origins, allow_credentials=True, allow_methods=['*'], allow_headers=['*'])

class Enquiry(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=20)
    interest: str = Field(min_length=2, max_length=80)
    message: str = Field(default='', max_length=2000)

@app.get('/health')
def health():
    return {'status':'ok'}

async def send_email(data: Enquiry):
    host=os.getenv('SMTP_HOST')
    port=int(os.getenv('SMTP_PORT','587'))
    username=os.getenv('SMTP_USERNAME')
    password=os.getenv('SMTP_PASSWORD')
    recipient=os.getenv('ENQUIRY_TO_EMAIL')
    sender=os.getenv('SMTP_FROM', username)
    if not all([host, username, password, recipient, sender]):
        raise RuntimeError('SMTP configuration is incomplete')
    msg=EmailMessage()
    msg['Subject']=f"New website enquiry — {data.interest} — {data.name}"
    msg['From']=sender
    msg['To']=recipient
    msg['Reply-To']=data.email
    msg.set_content(f"Name: {data.name}\nEmail: {data.email}\nPhone: {data.phone}\nRequirement: {data.interest}\n\nMessage:\n{data.message or '-'}")
    await aiosmtplib.send(msg, hostname=host, port=port, username=username, password=password, start_tls=True)

@app.post('/api/enquiries')
async def create_enquiry(data: Enquiry):
    try:
        await send_email(data)
    except Exception as exc:
        print(f'Email delivery failed: {exc}')
        raise HTTPException(status_code=503, detail='We could not send your enquiry right now. Please try again later.')
    return {'success': True, 'message': 'Enquiry submitted successfully'}
