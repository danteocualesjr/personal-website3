# Personal Website

A modern personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Homepage** - Hero section with introduction and recent content preview
- **About** - Personal bio, skills, and professional background
- **Portfolio** - Showcase of projects with filtering capabilities
- **Blog** - Markdown-based blog with individual post pages
- **Fiction** - Creative writing section with markdown support
- **Bookshelf** - Book collection with filtering and ratings
- **Contact** - Contact form and social media links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── bookshelf/         # Bookshelf page
│   ├── contact/           # Contact page
│   ├── fiction/           # Fiction pages
│   ├── portfolio/         # Portfolio page
│   └── layout.tsx         # Root layout
├── components/            # React components
├── content/               # Markdown content
│   ├── blog/             # Blog posts
│   └── fiction/          # Fiction pieces
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Customization

1. Update your name in `components/Navigation.tsx` and `components/Footer.tsx`
2. Add your blog posts in `content/blog/` as markdown files
3. Add your fiction pieces in `content/fiction/` as markdown files
4. Update portfolio projects in `app/portfolio/page.tsx`
5. Update bookshelf books in `app/bookshelf/page.tsx`
6. Update contact information in `app/contact/page.tsx`
7. Customize colors and styling in `tailwind.config.ts` and `app/globals.css`

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Remark](https://remark.js.org/) - Markdown processing
- [Gray Matter](https://github.com/jonschlinkert/gray-matter) - Front matter parsing

# personal-website3
