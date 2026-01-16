---
description: '브랜치를 생성, 전환, 관리합니다'
allowed-tools:
  [
    'Bash(git branch:*)',
    'Bash(git checkout:*)',
    'Bash(git switch:*)',
    'Bash(git status:*)',
    'Bash(git stash:*)',
  ]
argument-hint: '[브랜치명]'
---

# Claude 명령어: Branch

브랜치를 생성하고 전환하며 관리합니다.

## 사용법

```
/branch
/branch feature/new-feature
/branch -d old-branch
/branch -l
```

## 기능

### 브랜치 생성 및 전환
인수로 브랜치명을 제공하면 새 브랜치를 생성하고 전환합니다.

```bash
git checkout -b <branch-name>
```

### 브랜치 목록 조회
인수 없이 실행하거나 -l 옵션 사용:

```bash
git branch -a
```

### 브랜치 삭제
-d 옵션으로 브랜치 삭제:

```bash
git branch -d <branch-name>
git branch -D <branch-name>  # 강제 삭제
```

## 브랜치 명명 규칙

### 권장 패턴
- `feature/기능명`: 새로운 기능
- `fix/버그명`: 버그 수정
- `refactor/대상`: 리팩토링
- `docs/문서명`: 문서 작업
- `test/테스트명`: 테스트 추가
- `chore/작업명`: 기타 작업

### 예시
```
feature/user-authentication
fix/login-button-crash
refactor/api-client
docs/readme-update
```

## 안전 규칙

- **변경사항 보호**: 변경사항이 있으면 stash 또는 commit 제안
- **브랜치명 검증**: 유효한 브랜치명인지 확인
- **삭제 확인**: 병합되지 않은 브랜치 삭제 시 경고
- **원격 브랜치**: 원격 브랜치도 함께 표시

## 프로세스

1. 현재 브랜치 및 상태 확인
2. 변경사항 있으면 처리 방법 안내
3. 브랜치 작업 실행
4. 결과 확인 및 다음 단계 안내

## 참고사항

- 최신 베이스 브랜치에서 분기 권장
- 브랜치명은 kebab-case 사용
- 작업 완료 후 불필요한 브랜치는 삭제
- 원격 브랜치는 `git push -d origin <branch>` 로 삭제
