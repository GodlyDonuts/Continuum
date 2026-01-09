from fastapi import FastAPI
from backend.services.orchestrator import Orchestrator

app = FastAPI()
orchestrator = Orchestrator()

@app.get("/")
def read_root():
    return {"message": "Continuum Backend Online"}

@app.get("/test-gemini")
async def test_gemini():
    response = orchestrator.generate_content("Hello, Initiate Phase 1.")
    return {"response": response}
