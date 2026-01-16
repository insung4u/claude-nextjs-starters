---
description: '현재 브랜치를 원격 저장소에 푸시합니다'
allowed-tools:
  [
    'Bash(git status:*)',
    'Bash(git push:*)',
    'Bash(git branch:*)',
    'Bash(git remote:*)',
  ]
argument-hint: '[옵션: -f, --force]'
---

# Claude 명령어: Push

현재 브랜치를 원격 저장소에 푸시합니다.

## 사용법

```
/push
/push -f
/push --force
```

## 프로세스

1. 현재 브랜치 확인
2. 원격 추적 브랜치 확인
3. 커밋 상태 확인
4. 푸시 실행 (필요시 upstream 설정)
5. 결과 확인 및 리포트

## 옵션

- **없음**: 일반 푸시
- **-f, --force**: force push (주의: main/master는 경고)
- **-u**: upstream 설정과 함께 푸시

## 안전 규칙

- **main/master force push 경고**: 메인 브랜치에 force push 시도 시 확인 필요
- **커밋 없음**: 푸시할 커밋이 없으면 스킵
- **충돌 감지**: 원격과 충돌 시 pull 제안

## 참고사항

- 원격 브랜치 없으면 자동으로 -u 옵션 추가
- force push는 신중하게 사용
- 협업 중인 브랜치는 force push 지양
