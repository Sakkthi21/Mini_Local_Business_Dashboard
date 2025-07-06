# Setup script for GrowthProAI Full Stack Intern Assignment

Write-Host "Setting up GrowthProAI Full Stack Intern Assignment..." -ForegroundColor Green

# Install backend dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Cyan
npm install

# Install frontend dependencies
Write-Host "Installing frontend dependencies..." -ForegroundColor Cyan
cd client
npm install
cd ..

Write-Host "Setup complete!" -ForegroundColor Green
Write-Host "To start the application in development mode, run: npm run dev" -ForegroundColor Yellow
Write-Host "This will start both the backend server and the React frontend." -ForegroundColor Yellow