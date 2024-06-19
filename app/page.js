import GoogleMapSection from "@/components/Home/GoogleMapSection";
import SearchSection from "@/components/Home/SearchSection";
import { UserButton, UserProfile } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div  className="bg-white text-black p-6 grid gap-5 grid-cols-1 md:grid-cols-3 h-[100vh]">
      <div>
        <SearchSection/>
      </div>
      <div className="col-span-2">
        <GoogleMapSection/>
      </div>

    </div>
  </>
  );
}
