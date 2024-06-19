import Input from "./Input";

const SearchSection = ()=>{
  return(
    <>
    <div className="px-8 bg-gray-200 py-4 h-full">
    <Input pickup={true}/>
    <Input pickup={false}/>
    <button className="w-full hover:text-green-300 bg-black text-white font-bold text-xl py-2 rounded-lg">Search</button>
    </div>
    </>
  )
}
export default SearchSection;
