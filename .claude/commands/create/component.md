# 새 컴포넌트 생성

사용자가 요청한 컴포넌트를 프로젝트 컨벤션에 맞게 생성합니다.

## 컴포넌트 유형 확인

사용자에게 컴포넌트 유형을 확인합니다:
1. **UI 컴포넌트** → `src/components/ui/` (재사용 가능한 기본 컴포넌트)
2. **레이아웃 컴포넌트** → `src/components/layout/` (헤더, 푸터, 사이드바 등)
3. **기능 컴포넌트** → `src/features/[feature]/components/` (특정 기능용)

## UI 컴포넌트 템플릿

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const componentVariants = cva(
  "base-styles-here",
  {
    variants: {
      variant: {
        default: "default-styles",
      },
      size: {
        default: "default-size",
        sm: "small-size",
        lg: "large-size",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ComponentNameProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {}

const ComponentName = React.forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
ComponentName.displayName = "ComponentName"

export { ComponentName, componentVariants }
```

## 레이아웃 컴포넌트 템플릿

```tsx
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  className?: string
  children?: React.ReactNode
}

export function ComponentName({ className, children }: ComponentNameProps) {
  return (
    <div className={cn("base-styles", className)}>
      {children}
    </div>
  )
}
```

## 클라이언트 컴포넌트 (상호작용 필요 시)

파일 상단에 추가:
```tsx
"use client"
```

## 생성 후 체크리스트

- [ ] 파일명: kebab-case (예: `my-component.tsx`)
- [ ] 컴포넌트명: PascalCase (예: `MyComponent`)
- [ ] cn() 유틸리티로 className 처리
- [ ] forwardRef 사용 (필요 시)
- [ ] TypeScript 인터페이스 정의
- [ ] displayName 설정 (forwardRef 사용 시)
