import { SignIn } from "@clerk/nextjs";

const LogIn = ()=>{
  return (
    <>
    <div>
      <img src='./Cover.jpeg' className="object-fit w-full h-[100vh]" />
    </div>
    <div className="absolute top-20 right-1/3">
      <SignIn/>
    </div>
    </>
  )
}
export default LogIn;
