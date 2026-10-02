import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        priority
        className="h-44 w-44 rounded-full border border-border object-cover"
      />
      <h1 className="mt-6 text-xl font-bold">{name}</h1>
      <p className="mt-4 text-sm text-muted">{bio}</p>
    </header>
  );
}
