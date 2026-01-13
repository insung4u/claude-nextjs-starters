# Next.js Landing Page Starter Kit

A modern, production-ready landing page starter kit built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

**현대적이고 프로덕션 준비가 완료된 Next.js 16 기반 랜딩 페이지 스타터 킷입니다.**

## ✨ Features | 주요 기능

- ⚡ **Next.js 16** with App Router and React 19
- 🎨 **Tailwind CSS v4** with OKLCH color system
- 🧩 **shadcn/ui** components (New York style)
- 🌙 **Dark Mode** support with next-themes
- 📱 **Fully Responsive** mobile-first design
- ♿ **Accessible** with semantic HTML and ARIA attributes
- 🚀 **SEO Optimized** with OpenGraph and Twitter Card meta tags
- 📦 **Feature-based** folder structure for scalability
- 🔤 **TypeScript** strict mode enabled
- 🎯 **Zero configuration** - ready to use out of the box

## 🛠️ Tech Stack | 기술 스택

- **Framework**: [Next.js 16.1.1](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Fonts**: [Geist Sans & Mono](https://vercel.com/font)

## 📁 Project Structure | 프로젝트 구조

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Landing page
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── badge.tsx
│   │   ├── separator.tsx
│   │   └── dropdown-menu.tsx
│   └── layout/             # Layout components
│       ├── header.tsx      # Site header with navigation
│       ├── footer.tsx      # Site footer
│       ├── navigation.tsx  # Navigation menu
│       └── theme-toggle.tsx # Dark/Light mode toggle
├── features/
│   └── landing/            # Landing page feature
│       ├── components/
│       │   ├── hero-section.tsx
│       │   ├── features-section.tsx
│       │   └── cta-section.tsx
│       └── config/
│           └── landing-config.ts
├── lib/
│   ├── utils.ts            # Utility functions (cn)
│   └── constants.ts        # Site configuration
├── types/
│   └── index.ts            # TypeScript type definitions
└── hooks/
    └── use-mobile.tsx      # Responsive hook
```

## 🚀 Getting Started | 시작하기

### Prerequisites | 사전 요구사항

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation | 설치

```bash
# Clone the repository
git clone https://github.com/insung4u/claude-nextjs-starters.git

# Navigate to project directory
cd claude-nextjs-starters

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development | 개발

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

### Build | 빌드

```bash
npm run build
npm start
```

## 🎨 Customization | 커스터마이징

### Site Configuration | 사이트 설정

Edit `src/lib/constants.ts` to customize your site:

```typescript
export const SITE_CONFIG: SiteConfig = {
  name: "Your Site Name",
  description: "Your site description",
  url: "https://yoursite.com",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/yourusername",
    github: "https://github.com/yourusername",
  },
};
```

### Navigation Menu | 네비게이션 메뉴

Modify `NAVIGATION_ITEMS` in `src/lib/constants.ts`:

```typescript
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: "Features", href: "#features" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];
```

### Features Content | Features 컨텐츠

Update `src/features/landing/config/landing-config.ts`:

```typescript
export const FEATURES: Feature[] = [
  {
    icon: "Zap",
    title: "Your Feature Title",
    description: "Your feature description",
  },
  // Add more features...
];
```

### Theme Colors | 테마 색상

Customize colors in `src/app/globals.css` by modifying CSS variables:

```css
:root {
  --primary: oklch(0.7 0.2 270);
  /* Modify other color variables */
}
```

## 📦 Available Scripts | 사용 가능한 스크립트

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🧩 Adding More shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Available components: https://ui.shadcn.com/docs/components

## 🌐 Environment Variables | 환경 변수

Copy `.env.example` to `.env.local` and customize:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME="Your Site Name"
```

## 📄 Pages Structure | 페이지 구조

### Landing Page Sections | 랜딩 페이지 섹션

The landing page (`src/app/page.tsx`) includes:

1. **Hero Section** - Main headline, description, and CTA buttons
2. **Features Section** - Product/service features in a grid layout
3. **CTA Section** - Newsletter subscription or final call-to-action

### Adding New Pages | 새 페이지 추가

```bash
# Create new page
mkdir -p src/app/about
touch src/app/about/page.tsx

# Create feature folder
mkdir -p src/features/about
```

## 🎯 Best Practices | 권장사항

- **Components**: Keep components small and focused
- **Types**: Define TypeScript types in `src/types/`
- **Constants**: Store configuration in `src/lib/constants.ts`
- **Features**: Group related components in `src/features/`
- **Server Components**: Use Server Components by default, add `"use client"` only when needed

## 🔧 Built-in Features | 내장 기능

### Dark Mode | 다크 모드

Automatically detects system theme and allows manual toggle. Configured in `src/app/layout.tsx`.

### Responsive Navigation | 반응형 네비게이션

- **Desktop**: Horizontal navigation menu
- **Mobile**: Hamburger menu with dropdown

### SEO Optimization | SEO 최적화

- OpenGraph meta tags
- Twitter Card support
- Semantic HTML structure
- Proper heading hierarchy

## 📱 Responsive Breakpoints | 반응형 브레이크포인트

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)

## 🚢 Deployment | 배포

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/insung4u/claude-nextjs-starters)

### Other Platforms

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Docker

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing | 기여하기

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments | 감사의 글

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support | 지원

If you have any questions or need help, please open an issue on GitHub.

---

**Built with ❤️ using Next.js and shadcn/ui**
