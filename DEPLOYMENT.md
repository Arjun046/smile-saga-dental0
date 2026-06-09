# Deployment Guide: Smile Saga Dental Clinic

To deploy this project to Vercel, follow these simple steps:

### 1. Push to GitHub (Recommended)
Vercel works best with a Git provider. This allows for "Deploy on Push" (automatic updates).

1.  **Initialize Git** (if not already done):
    ```bash
    git init
    git add .
    git commit -m "Initial commit: Smile Saga Dental Clinic Demo"
    ```
2.  **Create a Repository** on [GitHub](https://github.com/new).
3.  **Push your code**:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/smile-saga-dental.git
    git branch -M main
    git push -u origin main
    ```

### 2. Connect to Vercel
1.  Go to [vercel.com](https://vercel.com) and log in.
2.  Click the **"Add New"** button and select **"Project"**.
3.  Import your GitHub repository.
4.  Vercel will automatically detect **Next.js**.
5.  Click **"Deploy"**.

### 3. Alternative: Vercel CLI (No GitHub)
If you don't want to use GitHub, you can deploy directly from your terminal:

1.  **Install Vercel CLI**:
    ```bash
    npm install -g vercel
    ```
2.  **Deploy**:
    ```bash
    vercel
    ```
3.  Follow the prompts in your terminal. For the final production deploy, run:
    ```bash
    vercel --prod
    ```

### Deployment Settings
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `next build`
- **Output Directory**: `.next`

Your website will be live at a URL like `smile-saga-dental.vercel.app`.
