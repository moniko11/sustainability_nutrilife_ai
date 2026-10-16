<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# NutriLife AI

AI-powered nutrition companion that helps people understand culturally diverse foods and make mindful, practical choices with Gemini Vision.

---

## Run Locally

**Prerequisites:** Node.js 22+

1. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
2. Create `.env` from [.env.example](.env.example) and set your Gemini API key:
   ```bash
   cp .env.example .env
   # Add your key: GEMINI_API_KEY=your_gemini_api_key
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the app at `http://localhost:3000`.

---

## Deploy to Google Cloud Run using Dockerfile

Google Cloud Run is a fully managed serverless platform that automatically scales your containerized application.

### Option 1: Direct Deploy from Source (Recommended)

Google Cloud will build the container using the provided `Dockerfile` via Cloud Build and deploy it directly to Cloud Run:

```bash
# 1. Authenticate with Google Cloud
gcloud auth login

# 2. Set your active Google Cloud project
gcloud config set project YOUR_PROJECT_ID

# 3. Deploy using the Dockerfile in the current directory
gcloud run deploy nutrilife-ai \
  --source . \
  --region asia-southeast1 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

### Option 2: Build & Push Image via Artifact Registry

If you prefer building and pushing container images explicitly:

```bash
# 1. Create an Artifact Registry repository (if not already created)
gcloud artifacts repositories create app-repo \
  --repository-format=docker \
  --location=asia-southeast1 \
  --description="NutriLife AI Docker repository"

# 2. Configure Docker authentication
gcloud auth configure-docker asia-southeast1-docker.pkg.dev

# 3. Build the Docker container locally
docker build -t asia-southeast1-docker.pkg.dev/YOUR_PROJECT_ID/app-repo/nutrilife-ai:latest .

# 4. Push the image to Artifact Registry
docker push asia-southeast1-docker.pkg.dev/YOUR_PROJECT_ID/app-repo/nutrilife-ai:latest

# 5. Deploy the image to Cloud Run
gcloud run deploy nutrilife-ai \
  --image asia-southeast1-docker.pkg.dev/YOUR_PROJECT_ID/app-repo/nutrilife-ai:latest \
  --platform managed \
  --region asia-southeast1 \
  --port 8080 \
  --allow-unauthenticated \
  --set-env-vars GEMINI_API_KEY="YOUR_GEMINI_API_KEY"
```

### Production Features in this Dockerfile
- **Multi-Stage Build**: Separate build and runtime stages reduce final container size to ~180MB.
- **Node.js 22 Runtime**: Executes `server.ts` natively with zero overhead.
- **Dynamic Port Binding**: Honors Cloud Run's `$PORT` environment variable (defaults to `8080`).
- **Least-Privilege Security**: Runs under the unprivileged `node` user.
- **Health Check Ready**: Native `/api/health` endpoint for Cloud Run startup and liveness probes.
