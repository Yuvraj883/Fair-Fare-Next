import { SignUp } from "@clerk/nextjs";

export default function Onboard(){
  return(
    <>
      <div>
      <img src='./Cover.jpeg' className="object-fit w-full h-[100vh]" />
    </div>
    <div className="absolute top-20 right-1/3">
      <SignUp/>
    </div>
    </>
  )
}
