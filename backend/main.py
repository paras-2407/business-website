"""
Entrypoint bridge for FastAPI application.
Exposes 'app' at the root level for zero-config Vercel auto-detection,
while preserving 'app/main.py' modular architecture.
"""
from app.main import app

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
