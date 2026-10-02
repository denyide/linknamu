import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

type LinkListProps = {
  links: LinkItem[];
  counts: Record<string, number>;
};

export default function LinkList({ links, counts }: LinkListProps) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link, index) => (
        <li
          key={link.id}
          className="fade-up"
          style={{ animationDelay: `${120 + index * 60}ms` }}
        >
          <LinkCard link={link} initialCount={counts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
