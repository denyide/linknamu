import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="fade-up flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-1 ring-border ring-offset-4 ring-offset-background"
      />
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] text-muted">{bio}</p>
    </header>
  );
}
