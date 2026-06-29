<div align="center">
  <h1>Feedback Nexus</h1>
  <p><strong>Product Discovery & Prioritization Engine</strong></p>
</div>

<br />

## 📖 Overview
Feedback Nexus is a tool designed to ingest customer feedback from various sources (Zendesk, Intercom, App Store) and use AI to automatically group them into feature requests. It assigns priority scores based on MRR impact and volume to help Product Managers make data-driven roadmap decisions.

## 💻 Local Development

Follow these instructions to run the project locally on your machine. We ensure no security data is exposed by using an example environment file.

### Prerequisites
- Node.js 18+ installed

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mvahedi2020/Feedback-Nexus.git "Feedback Nexus"
   cd "Feedback Nexus"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Copy the example environment file to create your local environment variables. Never commit your `.env.local` file!
   ```bash
   cp .env.example .env.local
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **View the Application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## ✨ Features
- AI-Driven Feedback Categorization
- MRR Impact Scoring
- Customer Request Volume Tracking
- Direct Integration Mockups

## Architecture Updates (20260628_172025)
- Introduced custom hooks for local state and debouncing.
- Established baseline Error Boundary component.
- Centralized shared types and utilities.
