---
description: '변경사항을 임시 저장하고 복원합니다'
allowed-tools:
  [
    'Bash(git stash:*)',
    'Bash(git status:*)',
    'Bash(git diff:*)',
  ]
argument-hint: '[작업: save|pop|list|apply|drop|clear]'
---

# Claude 명령어: Stash

작업 중인 변경사항을 임시로 저장하고 복원합니다.

## 사용법

```
/stash
/stash save "작업 설명"
/stash pop
/stash list
/stash apply stash@{0}
/stash drop stash@{0}
/stash clear
```

## 주요 작업

### Save (저장)
현재 변경사항을 stash에 저장합니다.

```bash
git stash push -m "작업 설명"
```

**옵션:**
- 기본값: tracked 파일만 저장
- `-u`: untracked 파일도 포함
- `-a`: ignored 파일까지 모두 포함

### Pop (복원 및 삭제)
가장 최근 stash를 적용하고 삭제합니다.

```bash
git stash pop
```

### Apply (복원만)
stash를 적용하지만 삭제하지 않습니다.

```bash
git stash apply stash@{0}
```

### List (목록)
저장된 모든 stash를 조회합니다.

```bash
git stash list
```

### Drop (삭제)
특정 stash를 삭제합니다.

```bash
git stash drop stash@{0}
```

### Clear (전체 삭제)
모든 stash를 삭제합니다.

```bash
git stash clear
```

## 사용 시나리오

### 긴급 작업 전환
작업 중 긴급한 다른 작업이 필요할 때:
1. `/stash save "진행 중인 작업"`
2. 긴급 작업 처리
3. `/stash pop`

### 브랜치 전환
다른 브랜치로 전환해야 할 때:
1. `/stash`
2. 브랜치 전환
3. 작업 후 원래 브랜치로 복귀
4. `/stash pop`

### 실험적 변경
실험적인 코드를 잠시 보관:
1. `/stash save "실험: 새로운 접근법"`
2. 다른 방법 시도
3. 필요시 `/stash apply` 로 복원

## 충돌 처리

stash pop/apply 시 충돌이 발생하면:
1. 충돌 파일 확인
2. 수동으로 충돌 해결
3. 해결 후 `git add`
4. pop인 경우 자동으로 stash 삭제 안됨, 수동으로 `git stash drop`

## 참고사항

- stash는 스택 구조 (LIFO)
- 인수 없으면 save 또는 list 제안
- 설명을 추가하면 나중에 찾기 쉬움
- stash는 브랜치와 무관하게 전역으로 저장
- 오래된 stash는 주기적으로 정리 권장
