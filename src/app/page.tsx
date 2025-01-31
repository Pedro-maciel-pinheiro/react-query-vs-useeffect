import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center 
    justify-center min-h-screen gap-10  place-items-center "
    >
      <div className="flex flex-col items-start">
        <h1 className="text-2xl font-semibold">UseEffect vs React.Query</h1>
        <p className="text-center text-lg font-medium w-full">Select your Filter option</p>
      </div>
      <ol className="flex items-center gap-10  max-w-5xl place-items-center ">
        <li>
          <Link href={"/use-effect"}>
            <Button className="w-28">Use-Effect</Button>
          </Link>
        </li>
        <li>
          <Link href={"/query"}>
            <Button className="w-28">React-Query</Button>
          </Link>
        </li>
      </ol>
    </div>
  );
}
