---
description: '마지막 git 작업을 취소하거나 되돌립니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git reset:*)',
    'Bash(git revert:*)',
    'Bash(git commit:*)',
    'Bash(git log:*)',
    'Bash(git reflog:*)',
  ]
argument-hint: '[대상: commit|add|push]'
---

# Claude 명령어: Undo

마지막 git 작업을 안전하게 취소하거나 되돌립니다.

## 사용법

```
/undo
/undo commit
/undo add
/undo push
```

## 작업 유형

### Undo Commit (기본값)
마지막 커밋을 취소합니다.

**옵션:**
- **soft**: 커밋만 취소, 변경사항 유지 (staged)
- **mixed**: 커밋 취소, 변경사항 unstaged
- **hard**: 커밋 및 변경사항 완전 삭제 ⚠️

### Undo Add
스테이지된 변경사항을 unstage합니다.

```bash
git reset HEAD
```

### Undo Push
푸시한 커밋을 되돌립니다 (이미 push된 경우).

**방법:**
- **revert**: 새로운 revert 커밋 생성 (안전)
- **force push**: 강제로 이전 상태로 되돌림 (위험)

## 안전 규칙

- **기본값은 soft reset**: 데이터 손실 방지
- **hard reset 경고**: 변경사항 완전 삭제 전 확인
- **push 취소 경고**: 협업 중인 브랜치는 revert 권장
- **reflog 활용**: 실수로 삭제한 커밋 복구 가능

## 프로세스

1. 현재 상태 확인 (git status, git log)
2. 취소할 작업 유형 확인
3. 안전한 방법 선택
4. 작업 실행 전 확인
5. 실행 및 결과 확인

## 복구 방법

실수로 삭제한 경우:
```bash
git reflog
git reset --hard <commit-hash>
```

## 참고사항

- 이미 push된 커밋은 revert 사용 권장
- hard reset은 신중하게 사용
- 협업 브랜치에서는 force push 지양
- reflog는 30일간 보관
