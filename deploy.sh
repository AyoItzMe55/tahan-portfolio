#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "Build successful! The dist folder is ready for deployment."
    echo ""
    echo "To deploy to GitHub Pages:"
    echo "1. Go to your repository on GitHub"
    echo "2. Go to Settings → Pages"
    echo "3. Set Source to 'Deploy from a branch'"
    echo "4. Set Branch to 'main' (or your default branch)"
    echo "5. Set Folder to '/ (root)'"
    echo "6. Click Save"
    echo ""
    echo "Or use GitHub Actions (recommended):"
    echo "1. Push this code to your main branch"
    echo "2. The GitHub Action will automatically deploy your site"
    echo ""
    echo "Your site will be available at: https://[username].github.io/tahan-portfolio/"
else
    echo "Build failed! Please check the error messages above."
    exit 1
fi
