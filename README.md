# WM Attire MVP

An AI-powered fashion platform for students that helps preview how businesswear fits before buying.

## Features

- 🤖 Local AI-powered fit recommendations using Ollama (LLaMA 3.1:8b)
- 📱 Mobile-first responsive design
- 🎨 Modern, clean tech startup aesthetic
- 💼 Businesswear focus with size and fit analysis
- 📊 Free and Premium plan comparison

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Ollama with LLaMA 3.1:8b

## Prerequisites

1. **Node.js** (v18 or higher)
2. **Ollama** installed and running locally

### Install Ollama (macOS)

```bash
# Install Ollama
brew install ollama

# Start Ollama service
ollama serve

# In a new terminal, pull the LLaMA model
ollama pull llama3.1:8b
```

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/idk134866/wm-attire-mvp.git
cd wm-attire-mvp
```

2. **Install dependencies**

```bash
npm install
```

3. **Ensure Ollama is running**

Make sure Ollama is running on `http://localhost:11434`:

```bash
# In a separate terminal
ollama serve
```

4. **Run the development server**

```bash
npm run dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
wm-attire-mvp/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home page
│   │   ├── how-it-works/         # How It Works page
│   │   ├── plans/                # Plans & Pricing page
│   │   ├── about/                # About page
│   │   ├── contact/              # Contact page
│   │   ├── api/
│   │   │   └── ai/
│   │   │       └── recommend/    # AI recommendation API
│   │   ├── layout.tsx            # Root layout
│   │   └── globals.css           # Global styles
│   └── components/
│       ├── FitRecommender.tsx    # AI fit recommendation component
│       ├── Header.tsx            # Navigation header
│       └── Footer.tsx            # Footer component
├── public/                       # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## AI Integration

The app uses a local LLaMA model via Ollama for generating fit recommendations:

- **Endpoint**: `/api/ai/recommend`
- **Method**: POST
- **Input**: User body measurements, clothing preferences
- **Output**: Natural language fit recommendations

### Example API Usage

```typescript
const response = await fetch('/api/ai/recommend', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    height: 70,
    weight: 180,
    bodyType: 'athletic',
    clothingCategory: 'dress-shirts',
    stylePreference: 'classic-fit'
  })
});

const data = await response.json();
console.log(data.recommendation);
```

## Pages

1. **Home** (`/`) - Value proposition and main CTA
2. **How It Works** (`/how-it-works`) - Step-by-step process explanation
3. **Plans & Pricing** (`/plans`) - Free vs Premium comparison
4. **About** (`/about`) - Mission and student focus
5. **Contact** (`/contact`) - Contact information

## Deployment Notes

- Avatar generation is UI placeholders only (no real implementation)
- No payment integration yet
- AI runs locally via Ollama (requires Ollama service for production)

## Future Enhancements

- Real avatar generation with body scanning
- Payment integration (Stripe)
- Product catalog integration
- User authentication
- Cloud-hosted AI inference

## License

MIT