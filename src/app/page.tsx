import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";
import { getClickCounts } from "@/lib/clicks";

// 클릭 수는 요청할 때마다 최신 값을 읽는다.
export const dynamic = "force-dynamic";

export default async function Home() {
  const counts = await getClickCounts();

  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-8 pb-16 pt-14">
      <div className="absolute right-5 top-5">
        <ThemeToggle />
      </div>
      <Profile {...profile} />
      <div className="mt-10">
        <LinkList links={links} counts={counts} />
      </div>
    </main>
  );
}
