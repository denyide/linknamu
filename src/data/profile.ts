export type LinkItem = {
  /** 클릭 수 집계에 쓰이는 고유 ID. 한 번 정하면 바꾸지 않는다. */
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김개발",
  bio: "풀스택 개발자",
  // 표시 크기(112px)에 맞춘 2배율 PNG. 확장자를 빼면 SVG가 내려와 next/image가 거부한다.
  image: "https://placehold.co/112x112@2x/orange/white.png",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
