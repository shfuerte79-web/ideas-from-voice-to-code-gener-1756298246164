import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-Powered API Builder",
    "one_liner": "Create APIs using voice commands that auto-generate documentation and endpoints.",
    "why_now": "With the rise in no-code tools, developers are looking for faster, voice-activated methods to build functionalities.",
    "novel_mechanism": "Combines NLP with API specification standards to generate working code from conversational requests.",
    "ai_stack": [
      "Claude/GPT",
      "Voice",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Generating RESTful APIs based on verbal descriptions",
      "Incorporating security protocols based on vocal consent"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Voice-to-API structure",
        "Real-time syntax checking",
        "Basic authentication setup"
      ],
      "tools": [
        "Next.js",
        "Firebase",
        "Twilio",
        "Replit"
      ],
      "data_bootstrap": [
        "OpenAPI specifications",
        "API documentation datasets"
      ],
      "risk": [
        "Tech adoption rates",
        "Voice recognition inaccuracies"
      ],
      "mitigation": [
        "User onboarding tests",
        "Incorporate multiple dialects"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Interactive voice demo",
        "Live coding challenges"
      ],
      "channels": [
        "ProductHunt",
        "YouTube demos",
        "Dev forums"
      ],
      "pricing": {
        "free": "Basic usage",
        "pro": "Enhanced features",
        "business": "Custom API solutions"
      }
    },
    "moat": [
      "Strong community integration",
      "Partnerships with API providers",
      "Early customer feedback loops"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "It innovatively addresses the need for speed in development while leveraging the intuitive format of voice input, standing out from existing code assistants."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}