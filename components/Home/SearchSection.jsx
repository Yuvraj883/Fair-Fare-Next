import Input from "./Input";

const SearchSection = ()=>{
  return(
    <>
    <div className="px-8  py-4 shadow-lg bg-gray-100">
      <h2 className="font-semibold text-lg ">Get a ride</h2>
    <Input pickup={true}/>
    <Input pickup={false}/>
    <button className="w-full hover:text-green-300 bg-black text-white font-bold text-xl py-2 rounded-lg">Search</button>
    </div>
    </>
  )
}
export default SearchSection;
