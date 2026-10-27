import Image, { type StaticImageData } from "next/image";

export function ProfilePortrait({ image, alt }: { image: StaticImageData; alt: string }) {
  return (
    <div className="w-full max-w-64 justify-self-center rounded-2xl border border-border bg-surface p-2 shadow-sm sm:max-w-80 lg:max-w-96 lg:justify-self-end">
      <Image
        src={image}
        alt={alt}
        preload
        placeholder="blur"
        sizes="(min-width: 1152px) 384px, (min-width: 1024px) 36vw, (min-width: 640px) 320px, 256px"
        className="aspect-square h-auto w-full rounded-xl object-cover"
      />
    </div>
  );
}
