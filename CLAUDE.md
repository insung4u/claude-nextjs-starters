# Claude Code 프로젝트 가이드

## 프로젝트 개요

**Claude NextJS Starters** - Next.js 16 기반의 프로덕션 준비된 스타터 킷으로, Claude AI Git Commands가 통합되어 있습니다.

## 기술 스택

| 범주 | 기술 |
|------|------|
| Framework | Next.js 16.1.1 (App Router), React 19 |
| Language | TypeScript 5 (strict mode) |
| Styling | Tailwind CSS v4 (OKLCH 컬러), CSS Variables |
| UI | shadcn/ui (New York style), Radix UI |
| Icons | lucide-react |
| Theme | next-themes (다크/라이트 모드) |
| Fonts | Geist Sans & Mono |

## 디렉토리 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root Layout (ThemeProvider, Geist 폰트)
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # Tailwind v4 + OKLCH 컬러 시스템
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트 (7개)
│   │   ├── button.tsx     # CVA 기반 (5 variants, 3 sizes)
│   │   ├── card.tsx       # 카드 + 6개 서브컴포넌트
│   │   ├── badge.tsx      # 4개 variant
│   │   ├── input.tsx      # 폼 입력
│   │   ├── label.tsx      # Radix UI 기반
│   │   ├── separator.tsx  # 구분선
│   │   └── dropdown-menu.tsx  # 14개 서브컴포넌트
│   └── layout/            # 레이아웃 컴포넌트 (4개)
│       ├── header.tsx     # 고정 헤더
│       ├── footer.tsx     # 푸터
│       ├── navigation.tsx # 반응형 네비게이션
│       └── theme-toggle.tsx # 테마 토글
├── features/              # 기능별 모듈
│   └── landing/           # 랜딩 페이지
│       ├── components/    # HeroSection, FeaturesSection 등
│       └── config/        # landing-config.ts
├── lib/
│   ├── utils.ts          # cn() - clsx + tailwind-merge
│   └── constants.ts      # SITE_CONFIG, NAVIGATION_ITEMS, FOOTER_LINKS
├── types/
│   └── index.ts          # NavigationItem, Feature, SiteConfig, FooterLinkGroup
└── hooks/
    └── use-mobile.tsx    # 반응형 훅 (768px 기준)
```

## 개발 명령어

```bash
npm run dev      # 개발 서버 (localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버
npm run lint     # ESLint 실행
```

## 코드 컨벤션

### 컴포넌트 작성
- **UI 컴포넌트**: `src/components/ui/` - shadcn/ui 스타일, CVA 패턴 사용
- **레이아웃 컴포넌트**: `src/components/layout/` - 헤더, 푸터 등
- **기능별 컴포넌트**: `src/features/[feature]/components/` - 도메인별 분리

### 스타일링 패턴
```tsx
// cn() 유틸리티로 클래스 병합
import { cn } from "@/lib/utils"
className={cn("base-classes", conditional && "conditional-class", className)}

// CVA로 variant 관리
const buttonVariants = cva("base-styles", {
  variants: { variant: {...}, size: {...} },
  defaultVariants: { variant: "default", size: "default" }
})
```

### 경로 별칭
```tsx
import { Button } from "@/components/ui/button"  // src/components/ui/button
import { cn } from "@/lib/utils"                  // src/lib/utils
import { useMobile } from "@/hooks/use-mobile"   // src/hooks/use-mobile
```

### 타입 정의
- 공유 타입: `src/types/index.ts`
- 컴포넌트 props: 해당 컴포넌트 파일 내 정의

## 주요 설정 파일

| 파일 | 용도 |
|------|------|
| `components.json` | shadcn/ui CLI 설정 (New York 스타일, RSC 활성화) |
| `tsconfig.json` | TypeScript (strict, @/* 경로 별칭) |
| `postcss.config.mjs` | Tailwind CSS v4 PostCSS |
| `.mcp.json` | Playwright MCP 설정 |

## 새 컴포넌트 추가 시

### shadcn/ui 컴포넌트 추가
```bash
npx shadcn@latest add [component-name]
```

### 커스텀 컴포넌트 추가
1. UI 컴포넌트: `src/components/ui/` (재사용 가능한 기본 컴포넌트)
2. 기능 컴포넌트: `src/features/[feature]/components/` (특정 기능용)

## 반응형 브레이크포인트

- **모바일**: < 768px (`useMobile()` 훅 사용)
- **데스크탑**: >= 768px

## Claude Git Commands

`.claude/commands/git/` 폴더에 9개의 Git 자동화 명령어가 있습니다:
- `/git:commit` - 이모지 컨벤셔널 커밋
- `/git:branch` - 브랜치 관리
- `/git:pr` - Pull Request 생성
- `/git:review` - 코드 리뷰
- `/git:push`, `/git:sync`, `/git:stash`, `/git:undo`, `/git:log`

## 주의사항

- Server Components가 기본이므로, 클라이언트 기능 사용 시 `"use client"` 추가 필요
- CSS 변수는 OKLCH 컬러 시스템 사용 (`globals.css` 참조)
- 테스트 프레임워크는 미설치 상태 (Playwright MCP로 E2E 테스트 가능)
