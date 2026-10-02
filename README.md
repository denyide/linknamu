# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 Link in Bio 서비스입니다.

## 시작하기

```bash
npm install
cp .env.example .env.local   # MONGODB_URI 입력
npm run dev
```

http://localhost:3000 에서 확인합니다.

`MONGODB_URI`가 없어도 페이지는 동작하며, 이 경우 클릭 수는 저장되지 않고 0으로 표시됩니다.

## 내 정보로 바꾸기

- 이름 · 소개 · 링크 목록: `src/data/profile.ts`
- 프로필 사진: `public/`에 이미지를 넣고 `profile.image` 경로를 수정

링크의 `id`는 클릭 수 집계 키로 쓰이므로 한 번 정한 뒤에는 바꾸지 마세요.

## 구조

```
src/
  app/
    page.tsx              # 메인 페이지
    api/clicks/route.ts   # 클릭 수 기록 API (POST)
  components/             # Profile, LinkList, LinkCard, ThemeToggle
  data/profile.ts         # 프로필 · 링크 데이터
  lib/                    # MongoDB 연결, 클릭 수 조회/증가
```

## 배포

Vercel에 배포할 때 프로젝트 환경 변수에 `MONGODB_URI`를 등록합니다.
