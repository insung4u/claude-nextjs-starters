---
description: '커밋 히스토리를 조회하고 분석합니다'
allowed-tools:
  [
    'Bash(git log:*)',
    'Bash(git show:*)',
    'Bash(git diff:*)',
    'Bash(git branch:*)',
  ]
argument-hint: '[범위: 숫자|브랜치|커밋범위]'
---

# Claude 명령어: Log

커밋 히스토리를 조회하고 분석합니다.

## 사용법

```
/log
/log 10
/log main..feature
/log --author="이름"
/log --since="2 weeks ago"
```

## 조회 옵션

### 개수 제한
숫자를 인수로 전달하면 최근 N개 커밋 조회:

```bash
git log -10 --oneline --graph --decorate
```

### 브랜치 비교
두 브랜치 간 차이 조회:

```bash
git log main..feature
```

### 작성자 필터
특정 작성자의 커밋만 조회:

```bash
git log --author="이름"
```

### 기간 필터
특정 기간의 커밋 조회:

```bash
git log --since="1 week ago"
git log --after="2024-01-01" --before="2024-12-31"
```

### 파일 히스토리
특정 파일의 변경 이력:

```bash
git log --follow -- 파일명
```

## 출력 형식

### 기본 형식
```
<커밋 해시> <이모지> <타입>: <메시지>
<작성자> | <날짜>
```

### 상세 형식
특정 커밋의 상세 정보:

```bash
git show <commit-hash>
```

### 통계 포함
변경된 파일 및 라인 수 표시:

```bash
git log --stat
```

### 그래프 형식
브랜치 구조를 시각적으로 표시:

```bash
git log --graph --oneline --all
```

## 분석 기능

### 커밋 패턴 분석
- 커밋 빈도
- 주요 작성자
- 커밋 타입 분포
- 활발한 파일

### 변경사항 요약
- 파일 변경 횟수
- 추가/삭제 라인 통계
- 주요 변경 영역

## 유용한 조합

### 최근 작업 요약
```bash
git log -10 --oneline --graph --decorate
```

### 특정 브랜치의 모든 커밋
```bash
git log main..HEAD --oneline
```

### 머지 커밋만 보기
```bash
git log --merges
```

### 머지 커밋 제외
```bash
git log --no-merges
```

## 참고사항

- 인수 없으면 최근 20개 커밋 조회
- 그래프 형식으로 브랜치 구조 시각화
- 커밋 해시 클릭 가능하게 표시
- 대용량 히스토리는 페이지네이션 고려
