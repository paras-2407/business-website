"""
Vercel Serverless Function entrypoint bridge.
Directs requests from the /api route or legacy Python serverless builder to the FastAPI app.
"""
from app.main import app
