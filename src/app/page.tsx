import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center bg-home-image bg-cover bg-center bg-no-repeat">
      <Link
        href={"/home"}
        className="text-6xl p-2 font-bold rounded text-white bg-[rgba(0,0,0,0.5)] hover:animate-swing"
      >
        Start here!
      </Link>
    </div>
  );
}
