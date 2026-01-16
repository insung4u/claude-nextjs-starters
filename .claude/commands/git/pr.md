---
description: 'Pull Request를 생성하고 관리합니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git diff:*)',
    'Bash(git log:*)',
    'Bash(git push:*)',
    'Bash(git branch:*)',
    'Bash(gh pr:*)',
  ]
argument-hint: '[제목]'
---

# Claude 명령어: Pull Request

Pull Request를 생성하고 관리합니다.

## 사용법

```
/pr
/pr "PR 제목"
```

## 프로세스

1. 현재 브랜치 상태 확인
2. 커밋 히스토리 분석 (base 브랜치와 비교)
3. 변경사항 요약 생성
4. PR 제목 및 본문 작성
5. gh pr create로 PR 생성

## PR 본문 포맷

```markdown
## Summary
- 변경사항 요약 (1-3개 bullet points)

## Changes
- 주요 변경사항 상세 설명

## Test Plan
- 테스트 방법 체크리스트
```

## 참고사항

- 브랜치가 원격에 없으면 자동으로 push
- gh CLI 필요 (GitHub CLI)
- 베이스 브랜치 자동 감지 (main/master)
- 변경사항이 없으면 PR 생성 불가
