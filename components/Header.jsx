import { UserButton, UserProfile } from "@clerk/nextjs";

const Header = ()=>{
  const NavMenu = [
    {
      id:1,
      title:'Ride',
      image:'./taxi.png'
    },
    {
      id:2,
      title:'Packages',
      image:'./packages.webp',

    }
  ]

  return(
    <>
    <nav className="flex justify-between bg-white px-6 py-3">
    <nav className=" flex text-black gap-10 items-center ">
      <span className="text-2xl font-bold">FairFare</span>
      <div className="flex gap-4">
        {
          NavMenu.map((menu)=>(
            <ul key={menu.id} className="flex items-center gap-2 hover:scale-110 cursor-pointer">
              <img src={menu.image} className="h-10 w-10"/>
              <li className="font-bold">{menu.title}</li>
            </ul>
          ))
        }
      </div>
    </nav>
    <UserButton className="h-16"/>

    </nav>
    </>
  )
}
export default Header;
