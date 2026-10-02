"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";

type LinkCardProps = {
  link: LinkItem;
  initialCount: number;
};

export default function LinkCard({ link, initialCount }: LinkCardProps) {
  const [count, setCount] = useState(initialCount);

  const recordClick = () => {
    // 링크 이동을 막지 않도록 응답을 기다리지 않는다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: link.id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (typeof data?.count === "number") setCount(data.count);
      })
      .catch(() => {});
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="group flex min-h-[60px] items-center justify-between gap-3 rounded-2xl border border-border bg-card py-4 pl-5 pr-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-card-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none"
    >
      <span className="truncate font-medium tracking-tight">{link.title}</span>
      <span className="flex shrink-0 items-center gap-2.5 text-xs tabular-nums text-muted">
        클릭 {count.toLocaleString("ko-KR")}
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground motion-reduce:transform-none"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 17 17 7M8 7h9v9" />
        </svg>
      </span>
    </a>
  );
}
