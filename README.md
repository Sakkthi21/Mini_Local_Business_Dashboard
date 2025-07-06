# GrowthProAI - Full Stack Intern Assignment

A Mini Local Business Dashboard that simulates how small businesses might view their SEO content and Google Business data.

## Features

- Input form for Business Name and Location
- Display card showing:
  - Simulated Google Rating
  - Number of Reviews
  - AI-generated SEO headline
  - Button to regenerate SEO headline
- Responsive design with Tailwind CSS
- Backend API endpoints for business data and headline regeneration

## Tech Stack

### Frontend
- React
- Tailwind CSS
- Axios for API requests

### Backend
- Node.js
- Express

## Project Structure

```
├── client/                 # React frontend
│   ├── public/             # Public assets
│   └── src/                # React source files
│       ├── components/     # React components
│       ├── context/        # React context (state management)
│       └── App.js          # Main App component
├── server/                 # Node.js backend
│   └── index.js            # Express server setup
└── package.json            # Project dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd <repository-name>
```

2. Run the setup script (Windows)

```powershell
.\setup.ps1
```

Or manually install dependencies:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install
cd ..
```

### Running the Application

#### Development Mode

Run both frontend and backend concurrently:

```bash
npm run dev
```

Or run them separately:

```bash
# Backend only
npm run server

# Frontend only
npm run client
```

#### Production Mode

1. Build the frontend

```bash
npm run build-client
```

2. Start the server

```bash
npm start
```

## API Endpoints

### POST /api/business-data

Accepts JSON with business name and location, returns simulated business data.

**Request:**
```json
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
```

**Response:**
```json
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}
```

### GET /api/regenerate-headline

Generates a new SEO headline for the given business name and location.

**Request:**
```
GET /api/regenerate-headline?name=Cake%20%26%20Co&location=Mumbai
```

**Response:**
```json
{
  "headline": "The Ultimate Guide to Cake & Co: Mumbai's 5-Star Experience"
}
```

## Deployment

### Frontend Deployment (Vercel/Netlify)

1. Create a production build of the React app

```bash
cd client
npm run build
```

2. Deploy the `build` folder to Vercel or Netlify

3. Set the environment variable `REACT_APP_API_URL` to point to your deployed backend API

### Backend Deployment (Render/Glitch)

1. Create a new web service on Render or Glitch

2. Connect your GitHub repository

3. Set the following:
   - Build Command: `npm install && npm run install-client && npm run build-client`
   - Start Command: `npm start`
   - Environment Variables: `PORT=5000` and `NODE_ENV=production`

## Evaluation Criteria

| Area | Weight |
|------|--------|
| Code quality & structure | 30% |
| UI/UX design and responsiveness | 20% |
| API integration & state handling | 25% |
| Bonus creativity + completeness | 25% |