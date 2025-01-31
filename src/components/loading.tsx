import { Loader2Icon } from "lucide-react";

export default function Loading() {
    return (
      <div className="flex items-center justify-center ">
        <div className="flex gap-1 items-center text-2xl mt-10">
            <Loader2Icon className="animate-spin duration-700 transition-all"/> Loading..
        </div>
      </div>
    );
  }