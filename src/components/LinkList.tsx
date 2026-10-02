import type { LinkItem } from "@/data/profile";
import LinkCard from "@/components/LinkCard";

type LinkListProps = {
  links: LinkItem[];
  counts: Record<string, number>;
};

export default function LinkList({ links, counts }: LinkListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} initialCount={counts[link.id] ?? 0} />
        </li>
      ))}
    </ul>
  );
}
