# 새 페이지 생성

Next.js App Router 규칙에 맞게 새 페이지를 생성합니다.

## App Router 페이지 구조

```
src/app/
├── page.tsx              # / (홈)
├── about/
│   └── page.tsx          # /about
├── blog/
│   ├── page.tsx          # /blog (목록)
│   └── [slug]/
│       └── page.tsx      # /blog/[slug] (동적 라우트)
└── (marketing)/          # 그룹 (URL에 영향 없음)
    └── pricing/
        └── page.tsx      # /pricing
```

## 기본 페이지 템플릿

`src/app/[route]/page.tsx`:
```tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "페이지 제목",
  description: "페이지 설명",
}

export default function PageName() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">페이지 제목</h1>
    </main>
  )
}
```

## 동적 라우트 페이지

`src/app/[route]/[param]/page.tsx`:
```tsx
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ param: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { param } = await params
  return {
    title: `${param} - 사이트명`,
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { param } = await params

  return (
    <main className="container py-16">
      <h1>{param}</h1>
    </main>
  )
}
```

## 레이아웃 추가 (선택)

`src/app/[route]/layout.tsx`:
```tsx
interface LayoutProps {
  children: React.ReactNode
}

export default function RouteLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
}
```

## 로딩 UI (선택)

`src/app/[route]/loading.tsx`:
```tsx
export default function Loading() {
  return (
    <div className="container py-16">
      <div className="animate-pulse">로딩 중...</div>
    </div>
  )
}
```

## 에러 UI (선택)

`src/app/[route]/error.tsx`:
```tsx
"use client"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="container py-16">
      <h2>오류가 발생했습니다</h2>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  )
}
```

## 체크리스트

- [ ] 폴더명: kebab-case (URL 경로가 됨)
- [ ] metadata 설정: SEO를 위한 title, description
- [ ] Server Component 기본 (필요 시 "use client" 추가)
- [ ] 네비게이션 업데이트: `src/lib/constants.ts`의 NAVIGATION_ITEMS
