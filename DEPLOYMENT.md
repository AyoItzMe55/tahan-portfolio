# GitHub Pages Deployment Guide

## Overview
This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Automatic Deployment (Recommended)

### 1. GitHub Pages Settings
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Configure as follows:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/ (root)`
4. Click **Save**

### 2. GitHub Actions
The `.github/workflows/deploy.yml` file will automatically:
- Build your project on every push to main branch
- Deploy the built files to GitHub Pages
- Handle all the deployment process for you

### 3. Deploy
Simply push your code to the main branch:
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## Manual Deployment (Alternative)

If you prefer manual deployment:

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Project
```bash
npm run build
```

### 3. Deploy
```bash
npm run deploy
```

## Important Configuration

### Base Path
The `vite.config.ts` file includes:
```typescript
base: '/tahan-portfolio/'
```

This ensures your site works correctly on GitHub Pages. **Do not change this** unless you rename your repository.

### Build Output
- Builds to `dist/` folder
- GitHub Pages serves from the root of your repository
- The GitHub Action automatically handles the deployment

## Site URL
Your site will be available at:
```
https://[your-username].github.io/tahan-portfolio/
```

## Troubleshooting

### Build Fails
1. Check that all dependencies are installed
2. Ensure Node.js version 18+ is installed
3. Check the build logs in GitHub Actions

### Site Not Loading
1. Verify GitHub Pages is enabled in repository settings
2. Check that the base path in `vite.config.ts` matches your repository name
3. Wait a few minutes after deployment (GitHub Pages can take time to update)

### 404 Errors
1. Ensure you're using React Router's `HashRouter` or configure for SPA routing
2. Check that the base path is correct
3. Verify the build output is in the correct location

## Notes
- The GitHub Action approach is more reliable than manual deployment
- No need to install `gh-pages` locally when using GitHub Actions
- Your site will automatically rebuild and deploy on every push to main
