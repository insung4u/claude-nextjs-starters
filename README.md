# Next.js Starter Kit with Claude AI

A modern, production-ready starter kit built with Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, and powered by Claude AI Git Commands.

**Claude AI Git Commands로 강화된 현대적이고 프로덕션 준비가 완료된 Next.js 16 스타터 킷입니다.**

## ✨ Features | 주요 기능

- ⚡ **Next.js 16** - App Router 및 React 19 기반 / with App Router and React 19
- 🎨 **Tailwind CSS v4** - OKLCH 컬러 시스템 적용 / with OKLCH color system
- 🧩 **shadcn/ui** - New York 스타일 컴포넌트 / components (New York style)
- 🌙 **Dark Mode** - next-themes 기반 다크모드 지원 / support with next-themes
- 📱 **Fully Responsive** - 모바일 우선 반응형 디자인 / mobile-first design
- ♿ **Accessible** - 시맨틱 HTML 및 ARIA 속성 / with semantic HTML and ARIA attributes
- 🚀 **SEO Optimized** - OpenGraph 및 Twitter Card 메타태그 / with meta tags
- 📦 **Feature-based** - 확장 가능한 기능 기반 폴더 구조 / folder structure for scalability
- 🔤 **TypeScript** - strict 모드 활성화 / strict mode enabled
- 🎯 **Zero configuration** - 별도 설정 없이 바로 사용 가능 / ready to use out of the box
- 🤖 **Claude Git Commands** - 9개의 AI 기반 Git 워크플로우 자동화 슬래시 명령어 / AI-powered automation with 9 slash commands

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
.claude/
└── commands/
    └── git/                # Claude Git Commands
        ├── branch.md       # 브랜치 생성, 전환, 관리
        ├── commit.md       # 이모지 컨벤셔널 커밋 생성
        ├── log.md          # 커밋 히스토리 조회 및 분석
        ├── pr.md           # Pull Request 생성 및 관리
        ├── push.md         # 원격 저장소 푸시
        ├── review.md       # 코드 리뷰 수행
        ├── stash.md        # 변경사항 임시 저장/복원
        ├── sync.md         # 베이스 브랜치와 동기화
        └── undo.md         # Git 작업 취소/되돌리기
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

- Node.js 18.x 이상 / Node.js 18.x or later
- npm, yarn, pnpm 또는 bun / npm, yarn, pnpm, or bun

### Installation | 설치

```bash
# 저장소 클론 / Clone the repository
git clone https://github.com/insung4u/claude-nextjs-starters.git

# 프로젝트 디렉토리로 이동 / Navigate to project directory
cd claude-nextjs-starters

# 의존성 설치 / Install dependencies
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

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 랜딩 페이지를 확인하세요.

Open [http://localhost:3000](http://localhost:3000) to see your landing page.

### Build | 빌드

```bash
npm run build
npm start
```

## 🎨 Customization | 커스터마이징

### Site Configuration | 사이트 설정

`src/lib/constants.ts` 파일을 편집하여 사이트를 커스터마이징하세요.

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

`src/lib/constants.ts`에서 `NAVIGATION_ITEMS`를 수정하세요.

Modify `NAVIGATION_ITEMS` in `src/lib/constants.ts`:

```typescript
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: "Features", href: "#features" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];
```

### Features Content | Features 컨텐츠

`src/features/landing/config/landing-config.ts`를 업데이트하세요.

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

`src/app/globals.css`에서 CSS 변수를 수정하여 색상을 커스터마이징하세요.

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

## 🧩 Adding More shadcn/ui Components | shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add [component-name]
```

사용 가능한 컴포넌트: https://ui.shadcn.com/docs/components

Available components: https://ui.shadcn.com/docs/components

## 🌐 Environment Variables | 환경 변수

`.env.example`을 `.env.local`로 복사하여 커스터마이징하세요.

Copy `.env.example` to `.env.local` and customize:

```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME="Your Site Name"
```

## 📄 Pages Structure | 페이지 구조

### Landing Page Sections | 랜딩 페이지 섹션

랜딩 페이지(`src/app/page.tsx`)는 다음 섹션을 포함합니다:

1. **Hero Section** - 메인 헤드라인, 설명, CTA 버튼 / Main headline, description, and CTA buttons
2. **Features Section** - 그리드 레이아웃의 제품/서비스 기능 / Product/service features in a grid layout
3. **CTA Section** - 뉴스레터 구독 또는 최종 CTA / Newsletter subscription or final call-to-action

### Adding New Pages | 새 페이지 추가

```bash
# Create new page
mkdir -p src/app/about
touch src/app/about/page.tsx

# Create feature folder
mkdir -p src/features/about
```

## 🤖 Claude Git Commands | Claude Git 명령어

이 스타터 킷은 워크플로우를 간소화하는 포괄적인 Claude AI 기반 Git 명령어를 포함합니다.

This starter kit includes comprehensive Claude AI-powered Git commands to streamline your workflow.

### Available Commands | 사용 가능한 명령어

#### Basic Operations | 기본 작업

- **`/branch`** - 브랜치 생성, 전환, 관리
  - Create, switch, and manage branches
  - Usage: `/branch [브랜치명]` or `/branch -l` (list) or `/branch -d [브랜치명]` (delete)

- **`/commit`** - 이모지 컨벤셔널 커밋 생성
  - Create well-formatted commits with emojis and conventional commit messages
  - Automatically analyzes staged changes and suggests appropriate commit messages
  - No Claude signature added to commits

- **`/log`** - 커밋 히스토리 조회 및 분석
  - View and analyze commit history
  - Usage: `/log` or `/log 10` or `/log main..feature`

- **`/push`** - 원격 저장소 푸시
  - Push current branch to remote repository
  - Usage: `/push` or `/push -f` (force push with warning)

- **`/stash`** - 변경사항 임시 저장/복원
  - Temporarily save and restore changes
  - Usage: `/stash` or `/stash save "작업 설명"` or `/stash pop`

- **`/undo`** - Git 작업 취소/되돌리기
  - Safely undo or revert Git operations
  - Usage: `/undo` or `/undo commit` or `/undo add`

#### Collaboration | 협업

- **`/pr`** - Pull Request 생성 및 관리
  - Create and manage Pull Requests via GitHub CLI
  - Automatically generates PR summary and test plan

- **`/review`** - 코드 리뷰 수행
  - Perform automated code review
  - Checks code quality, security, performance, and best practices
  - Usage: `/review` or `/review staged` or `/review commit` or `/review branch`

- **`/sync`** - 베이스 브랜치와 동기화
  - Synchronize with base branch (main/master)
  - Usage: `/sync` or `/sync rebase` or `/sync merge`

### Commit Format | 커밋 포맷

모든 커밋은 이모지 컨벤셔널 커밋 포맷을 따릅니다.

All commits follow the emoji conventional commit format:

```
<이모지> <타입>: <설명>
```

**Types / 타입:**
- `feat`: ✨ 새로운 기능 / New feature
- `fix`: 🐛 버그 수정 / Bug fix
- `docs`: 📝 문서화 / Documentation
- `style`: 💄 포맷팅 / Formatting
- `refactor`: ♻️ 코드 리팩토링 / Code refactoring
- `perf`: ⚡ 성능 개선 / Performance improvement
- `test`: ✅ 테스트 / Testing
- `chore`: 🔧 빌드/도구 / Build/tools
- `ci`: 🚀 CI/CD

### Usage Examples | 사용 예시

```bash
# Create a new feature branch
/branch feature/new-feature

# Make changes and commit
/commit

# Push to remote
/push

# Create a pull request
/pr

# Review changes before committing
/review staged

# Sync with main branch
/sync

# View commit history
/log 20
```

## 🎯 Best Practices | 권장사항

- **Components / 컴포넌트**: 작고 집중된 컴포넌트 유지 / Keep components small and focused
- **Types / 타입**: `src/types/`에 TypeScript 타입 정의 / Define TypeScript types in `src/types/`
- **Constants / 상수**: `src/lib/constants.ts`에 설정 저장 / Store configuration in `src/lib/constants.ts`
- **Features / 기능**: `src/features/`에 관련 컴포넌트 그룹화 / Group related components in `src/features/`
- **Server Components / 서버 컴포넌트**: 기본적으로 서버 컴포넌트 사용, 필요시에만 `"use client"` 추가 / Use Server Components by default
- **Git Workflow / Git 워크플로우**: 일관된 커밋 메시지와 효율적인 협업을 위해 Claude Git 명령어 사용 / Use Claude Git commands

## 🔧 Built-in Features | 내장 기능

### Dark Mode | 다크 모드

시스템 테마를 자동으로 감지하고 수동 전환을 허용합니다. `src/app/layout.tsx`에서 설정됩니다.

Automatically detects system theme and allows manual toggle. Configured in `src/app/layout.tsx`.

### Responsive Navigation | 반응형 네비게이션

- **Desktop / 데스크톱**: 가로 네비게이션 메뉴 / Horizontal navigation menu
- **Mobile / 모바일**: 드롭다운 햄버거 메뉴 / Hamburger menu with dropdown

### SEO Optimization | SEO 최적화

- OpenGraph 메타 태그 / OpenGraph meta tags
- Twitter Card 지원 / Twitter Card support
- 시맨틱 HTML 구조 / Semantic HTML structure
- 적절한 헤딩 계층 구조 / Proper heading hierarchy

## 📱 Responsive Breakpoints | 반응형 브레이크포인트

- **sm**: 640px (Mobile)
- **md**: 768px (Tablet)
- **lg**: 1024px (Desktop)
- **xl**: 1280px (Large Desktop)

## 🚢 Deployment | 배포

### Vercel (권장 / Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/insung4u/claude-nextjs-starters)

### Other Platforms / 다른 플랫폼

표준 Next.js 앱으로 다음 플랫폼에 배포할 수 있습니다:

This is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- Render
- Docker

자세한 내용은 [Next.js 배포 문서](https://nextjs.org/docs/app/building-your-application/deploying)를 참조하세요.

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🤝 Contributing | 기여하기

기여를 환영합니다! Pull Request를 자유롭게 제출해 주세요.

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License | 라이선스

이 프로젝트는 오픈 소스이며 [MIT License](LICENSE) 하에 제공됩니다.

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments | 감사의 글

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support | 지원

질문이 있거나 도움이 필요하시면 GitHub에서 이슈를 열어주세요.

If you have any questions or need help, please open an issue on GitHub.

---

**Next.js와 shadcn/ui로 ❤️ 를 담아 제작했습니다**

**Built with ❤️ using Next.js and shadcn/ui**
