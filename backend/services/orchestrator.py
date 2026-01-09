import os
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

class Orchestrator:
    def __init__(self):
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY not found in environment variables")
        genai.configure(api_key=api_key)
        # Initial model load
        self.model_name = self._get_model_name()
        self.model = genai.GenerativeModel(self.model_name)

    def _get_model_name(self):
        try:
            # Path to backend/model_config.txt
            config_path = os.path.join(os.path.dirname(__file__), '..', 'model_config.txt')
            with open(config_path, 'r') as f:
                return f.read().strip()
        except Exception:
            return "gemini-2.5-flash" # Fallback

    def generate_content(self, prompt: str):
        try:
            # Check for hotswap
            current_model = self._get_model_name()
            if current_model != self.model_name:
                self.model_name = current_model
                self.model = genai.GenerativeModel(self.model_name)

            response = self.model.generate_content(prompt)
            return response.text
        except Exception as e:
            return f"Error using model {self.model_name}: {str(e)}"
