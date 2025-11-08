import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-gray-950 ">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-gray-950">
        {/*<Image*/}
        {/*  className="dark:invert"*/}
        {/*  src="/next.svg"*/}
        {/*  alt="Next.js logo"*/}
        {/*  width={100}*/}
        {/*  height={20}*/}
        {/*  priority*/}
        {/*/>*/}
       <h1 className={' m-5 text-center text-5xl text-red-500 mx-auto font-bold p-5'}> Home Page</h1>
      </main>
    </div>
  );
}
