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
      className="flex min-h-14 items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:translate-y-0"
    >
      <span className="font-medium">{link.title}</span>
      <span className="shrink-0 text-xs tabular-nums text-muted">
        클릭 {count.toLocaleString("ko-KR")}
      </span>
    </a>
  );
}
