# 새 기능 모듈 생성

새로운 기능(feature) 모듈을 프로젝트 구조에 맞게 생성합니다.

## 기능 모듈 구조

```
src/features/[feature-name]/
├── components/          # 기능별 컴포넌트
│   ├── feature-main.tsx
│   └── feature-item.tsx
├── config/             # 설정 및 상수
│   └── feature-config.ts
├── hooks/              # 기능별 훅 (선택)
│   └── use-feature.ts
├── types/              # 기능별 타입 (선택)
│   └── index.ts
└── utils/              # 기능별 유틸리티 (선택)
    └── feature-utils.ts
```

## 생성 단계

### 1. 기능 폴더 생성
```bash
mkdir -p src/features/[feature-name]/components
mkdir -p src/features/[feature-name]/config
```

### 2. 메인 컴포넌트 생성

`src/features/[feature-name]/components/[feature-name]-section.tsx`:
```tsx
import { cn } from "@/lib/utils"

interface FeatureNameSectionProps {
  className?: string
}

export function FeatureNameSection({ className }: FeatureNameSectionProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container">
        {/* 컨텐츠 */}
      </div>
    </section>
  )
}
```

### 3. 설정 파일 생성

`src/features/[feature-name]/config/[feature-name]-config.ts`:
```tsx
import type { Feature } from "@/types"
import { IconName } from "lucide-react"

export const FEATURE_ITEMS: Feature[] = [
  {
    icon: IconName,
    title: "제목",
    description: "설명",
  },
]
```

### 4. 타입 정의 (필요 시)

`src/features/[feature-name]/types/index.ts`:
```tsx
export interface FeatureItem {
  id: string
  title: string
  // ...
}
```

## 페이지에서 사용

`src/app/page.tsx` 또는 새 페이지에서:
```tsx
import { FeatureNameSection } from "@/features/[feature-name]/components/[feature-name]-section"

export default function Page() {
  return (
    <main>
      <FeatureNameSection />
    </main>
  )
}
```

## 체크리스트

- [ ] 폴더명: kebab-case (예: `user-profile`)
- [ ] 컴포넌트 분리: 재사용 가능한 부분은 `components/ui/`로
- [ ] 타입 정의: 공유 타입은 `src/types/index.ts`에 추가
- [ ] 설정 분리: 하드코딩된 값은 config 파일로
