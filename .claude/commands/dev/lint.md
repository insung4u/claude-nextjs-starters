# 코드 린트 검사

ESLint를 실행하여 코드 품질을 검사합니다.

## 실행

```bash
npm run lint
```

## 검사 항목

- Next.js Core Web Vitals 규칙
- Next.js TypeScript 규칙
- React Hooks 규칙
- 접근성(a11y) 규칙

## 자동 수정

자동 수정 가능한 문제 해결:
```bash
npm run lint -- --fix
```

## 일반적인 린트 에러

1. **React Hook 의존성**: useEffect/useCallback 의존성 배열 확인
2. **이미지 최적화**: `<img>` 대신 `next/image` 사용
3. **링크 최적화**: `<a>` 대신 `next/link` 사용
4. **타입 any**: 명시적 타입 정의 필요

## 린트 무시 (권장하지 않음)

```tsx
// eslint-disable-next-line [rule-name]
// @ts-expect-error [reason]
```
