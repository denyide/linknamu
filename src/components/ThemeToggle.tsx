"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // 저장소를 쓸 수 없어도 현재 화면의 전환은 유지된다.
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-muted transition duration-200 hover:border-border hover:bg-card hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      {/* 밝은 화면에서는 달, 어두운 화면에서는 해 아이콘을 보여준다. */}
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px] dark:hidden"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="hidden h-[18px] w-[18px] dark:block"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
