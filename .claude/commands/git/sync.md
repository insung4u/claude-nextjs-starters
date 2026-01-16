---
description: '베이스 브랜치와 동기화합니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git fetch:*)',
    'Bash(git pull:*)',
    'Bash(git rebase:*)',
    'Bash(git merge:*)',
    'Bash(git branch:*)',
    'Bash(git stash:*)',
  ]
argument-hint: '[전략: rebase|merge]'
---

# Claude 명령어: Sync

베이스 브랜치(main/master)와 현재 브랜치를 동기화합니다.

## 사용법

```
/sync
/sync rebase
/sync merge
```

## 프로세스

1. 현재 작업 상태 확인
2. 변경사항이 있으면 stash
3. 원격 저장소에서 fetch
4. 베이스 브랜치와 동기화 (rebase 또는 merge)
5. stash한 변경사항 복원
6. 충돌 발생 시 안내

## 동기화 전략

### Rebase (기본값)
- 깔끔한 선형 히스토리 유지
- 커밋 히스토리 재작성
- feature 브랜치에 권장

### Merge
- 병합 커밋 생성
- 원본 히스토리 보존
- 공유 브랜치에 권장

## 안전 규칙

- **변경사항 보호**: 자동으로 stash하고 복원
- **충돌 처리**: 충돌 발생 시 해결 가이드 제공
- **베이스 브랜치 확인**: main/master 자동 감지

## 참고사항

- 인수 없으면 rebase 방식 사용
- 원격 브랜치 최신 상태로 업데이트
- rebase 중 충돌 시 git rebase --continue/--abort 안내
