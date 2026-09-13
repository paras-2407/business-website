# Dholera & Lothal- React + FastAPI Website

A scalable starter website for a Dholera/Lothal land-advisory and regional-awareness business.

## Highlights
- React + Vite frontend
- FastAPI backend
- SMTP enquiry email integration
- Responsive design
- Dholera/Lothal toggle with separate narratives
- Dholera 2007 → 2016 → 2026 visual timeline
- Lothal Maritime Museum / National Maritime Heritage Complex section
- 5-mode regional connectivity section: air, sea, sea link, high-speed rail/metro, expressway/train
- Blogs, Gallery, FAQ and Contact pages
- Data-driven content in `frontend/src/data/siteData.js`
- Reusable components to keep the code DRY and scalable
- `.env.example` for deployment configuration

## Run frontend
```bash
cd frontend
npm install
npm run dev
```

For a deployed backend, create `frontend/.env`:
```env
VITE_API_URL=https://api.your-domain.com
```

## Run backend
```bash
cd backend
python -m venv .venv
# Windows PowerShell
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
copy .env.example .env
# Edit .env with SMTP credentials
uvicorn app.main:app --reload --port 8000
```

## SMTP
For Gmail, use an App Password rather than your normal account password. For production, use a dedicated business mailbox/SMTP provider and store secrets in your hosting platform's environment variables.

## Production checklist
1. Replace placeholder phone/email.
2. Replace sample/cropped AI concept images with approved final AI images or licensed photography.
3. Verify every land/project claim against current government records before publishing.
4. Add a database/CRM integration when lead volume increases.
5. Add rate limiting, CAPTCHA/Turnstile and structured logging to the enquiry API.
6. Deploy React on Vercel and FastAPI on a Python-capable host (or container platform).
7. Set production CORS origins and SMTP secrets.
8. Add analytics, Search Console and SEO metadata after the branding/domain is final.

## Design note
The included visual assets are crops from the AI-generated concept image created for this project. They are useful for the sample/prototype; replace them with standalone approved AI-generated or licensed images for the production site.
