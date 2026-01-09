This README is designed to showcase the technical depth and innovative "wow factor" required to win the [Gemini 3 Hackathon](https://gemini3.devpost.com/).

---

# 🎬 The Continuum

**Autonomous Film Production with Narratively Consistent Visual Reasoning**

The "Continuum" is a marathon creative agent that transforms a high-level concept into a cohesive, multi-scene production. Unlike existing "one-off" video generators, this system acts as a **Creative Autopilot**, maintaining absolute visual and narrative continuity across thousands of generated frames by leveraging **Gemini 3 Pro’s** spatial-temporal reasoning and **Nano Banana Pro’s** high-precision controls.

---

## ⚡️ Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- Gemini API Key

### Backend
The backend uses FastAPI and Python.

1. **Setup:** (First time only)
   ```bash
   python3 -m venv backend/venv
   source backend/venv/bin/activate
   pip install -r backend/requirements.txt
   ```

2. **Run:**
   ```bash
   ./run_backend.sh
   ```
   Or manually: `source backend/venv/bin/activate && uvicorn backend.main:app --reload`

3. **Configure:**
   - Edit `.env` for API keys.
   - Edit `backend/model_config.txt` to hotswap AI models.

### Frontend
(Instructions to be added)

---

## 🚀 The Vision

In the **Action Era**, creators shouldn't just prompt for a clip; they should direct a world. The Infinite Cinematographer solves the "AI Memory Gap"—the tendency for AI to forget character details or physical consequences between shots—by building a **Dynamic World Bible** within Gemini 3’s 1M+ token context window.

---

## 🛠️ Key Innovations

### 🧠 1. The "Director’s Loop" with Thought Signatures

Most creative AI is stateless. We implement a stateful **Director’s Loop** using [Thought Signatures](https://medium.com/google-cloud/migrating-to-gemini-3-implementing-stateful-reasoning-with-thought-signatures-4f11b625a8c9).

* **State Persistence:** Each directorial decision (lighting choice, character injury, environmental change) is encapsulated in a signature.
* **Long-Horizon Reasoning:** By passing signatures back to the model, the agent "remembers" that a glass broken in Scene 1 must appear as shards in Scene 5.

### 🎨 2. High-Precision Consistency with Nano Banana Pro

We utilize [Nano Banana Pro](https://blog.google/innovation-and-ai/products/nano-banana-pro/) to ensure brand-level fidelity.

* **Character Anchoring:** By uploading up to **14 reference images** (character turnarounds, style guides) into the expanded visual context window, the agent maintains perfect resemblance across different camera angles.
* **Localized Paint-to-Edit:** Using [Thinking Level: HIGH](https://ai.google.dev/gemini-api/docs/gemini-3), the agent performs "pixel-precise" localized editing to add script-specific details (like a specific logo on a shirt or a unique scar) that generic generators miss.

### 👁️ 3. Spatial-Temporal Verification

The agent doesn't just generate; it **critiques**.

* **Visual Audit:** After rendering a scene, the agent uses [spatial-temporal video understanding](https://ai.google.dev/gemini-api/docs/video-understanding) to verify the output against the script.
* **Self-Correction:** If the agent detects a continuity error (e.g., a character's hat disappeared), it triggers an autonomous refactor of that specific frame sequence using the [Antigravity browser loop](https://antigravity.google/blog/introducing-google-antigravity).

---

## 🏗️ Technical Architecture

| Component | Technology | Role |
| --- | --- | --- |
| **Orchestrator** | [Gemini 3 Pro](https://ai.google.dev/gemini-api/docs/models/gemini) | Strategic planning and "World Bible" management. |
| **Visual Engine** | [Nano Banana Pro](https://blog.google/products-and-platforms/products/gemini/where-to-use-nano-banana-pro/) | High-fidelity frame generation and localized editing. |
| **State Manager** | [Thought Signatures](https://medium.com/google-cloud/migrating-to-gemini-3-implementing-stateful-reasoning-with-thought-signatures-4f11b625a8c9) | Maintaining reasoning continuity across the "Marathon" run. |
| **Verification** | [Google Antigravity](https://antigravity.google/docs/get-started) | Autonomous testing of generated visual artifacts. |

---

## 🏁 Impact

This project moves AI from a "random generator" to a **production-ready colleague**. It enables:

* **Indie Filmmaking:** Creating 4K, narratively consistent shorts with a crew of one.
* **Enterprise Branding:** Generating global campaigns where the product and mascot are 100% consistent across every culture and language.

---