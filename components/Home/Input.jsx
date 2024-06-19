"use client"
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { useState } from "react";
const Input  = (props)=>{
  const pickup = props?.pickup;
  const [value, setValue] = useState(null);

  return (
    <>
    <div className="flex px-4 bg-white my-2 ">

    <img src={pickup?'./pick-up.png' : './drop-off.png'} alt="pick-up icon"
         className="h-10"/>
    {/* <input className="outline-none w-full px-3 py-1" placeholder={pickup?"Pick up location": "Drop off location"} type='text'/> */}
      <GooglePlacesAutocomplete apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
              selectProps={{
                value,
                onChange: setValue,
              }}

      />
    </div>
    </>
  )
}
export default Input;
