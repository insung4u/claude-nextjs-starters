---
description: '변경사항을 분석하고 코드 리뷰를 수행합니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git diff:*)',
    'Bash(git log:*)',
    'Bash(git show:*)',
    'Read',
    'Grep',
  ]
argument-hint: '[범위: staged|commit|branch]'
---

# Claude 명령어: Review

변경사항을 분석하고 자동 코드 리뷰를 수행합니다.

## 사용법

```
/review
/review staged
/review commit
/review branch
```

## 범위

- **없음/staged**: 스테이지된 변경사항 리뷰
- **commit**: 마지막 커밋 리뷰
- **branch**: 현재 브랜치의 모든 커밋 리뷰 (베이스 브랜치 대비)

## 리뷰 항목

### 코드 품질
- 코드 스타일 및 일관성
- 명명 규칙
- 함수/클래스 크기 및 복잡도
- 중복 코드 감지

### 보안
- SQL Injection
- XSS 취약점
- 인증/권한 문제
- 민감 정보 노출 (API 키, 비밀번호 등)

### 성능
- 비효율적인 알고리즘
- 불필요한 반복문
- 메모리 누수 가능성

### 베스트 프랙티스
- 에러 핸들링
- 테스트 커버리지
- 문서화
- 의존성 관리

## 출력 형식

```markdown
## 📊 변경사항 요약
- 파일 수: X개
- 추가: +X줄
- 삭제: -X줄

## ✅ 긍정적인 부분
- ...

## ⚠️ 개선 제안
- ...

## 🔒 보안 이슈
- ...

## 🚀 성능 최적화
- ...
```

## 참고사항

- 변경사항이 없으면 리뷰 불가
- 대용량 변경사항은 파일별로 분석
- 심각한 보안 이슈는 우선 표시
