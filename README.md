# Aryan Dev Portfolio

A modern, responsive portfolio website built with React and TypeScript.

## Project Overview

This is a personal portfolio website showcasing skills, projects, and experience in web development.

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aryan-dev-folio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   ├── About.tsx      # About section
│   ├── Contact.tsx    # Contact section
│   ├── Education.tsx  # Education section
│   ├── Hero.tsx       # Hero section
│   ├── Navigation.tsx # Navigation component
│   ├── Projects.tsx   # Projects section
│   └── Skills.tsx     # Skills section
├── pages/             # Page components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── assets/            # Static assets
```

## Features

- Responsive design
- Modern UI with shadcn/ui components
- Smooth scrolling navigation
- Project showcase
- Contact form
- Skills and education sections

## Deployment

Build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

## License

This project is for portfolio purposes.
