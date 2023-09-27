/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useEffect, useRef, useState } from "react";
import { getStoredDonationCard } from "../dataStored/LocalStorage";

const DonationCards = () => {
  const cards = useLoaderData()
  const[getData, setGetData]= useState(cards)

  const[searchValue, setSearchValue]= useState(cards);
  
  const inputValue= useRef()

const handleSearch=()=>{
    
  const card = inputValue.current.value.toLowerCase();

  if(card){
    const filterData= cards.filter(data=> data.category.toLowerCase().includes(card));
    setGetData(filterData);
  }else{
    setGetData(cards)
  }
  
}

    return (
        <div>

<div className="flex justify-center">
         <div className="flex justify-center w-full bg-auto">
            <div className="hero min-h-screen relative md:bg-contain md:bg-no-repeat sm:bg-contain" style={{backgroundImage:'url(https://i.ibb.co/4jHjDMQ/bannerpicture.jpg)'}}>
                <div className="absolute inset-0 bg-white opacity-90">              
                </div>
                <div className="searchbar absolute bottom-[43%] px-20">
                <div className="flex-1 text-center mb-6">
                <h1 className="text-lg  md:text-4xl lg:text-5xl font-bold">I Grow By Helping People In Need</h1>
         
      </div>
      <div>
     
          <label className="mb-2 text-sm font-medium sr-only dark:text-white h-[40vh]">
            Search
          </label>
          <div className="relative">
            <input ref={inputValue}
             type="search"
             name="search"
             id="default-search"
              className="block w-full p-4 pl-1 md:pl-8 lg:pl-10 md:text-sm border rounded-lg bg-gray-50 text-[11px]"
              placeholder="Search category" 
              required/>
            <button type="submit" onClick={handleSearch} className="text-white absolute right-[1px] bottom-[1px] bg-[#FF444A] font-medium rounded-lg text-sm px-2 py-3.5 md:px-6 md:py-4 lg:px-6 lg:py-4">
              Search
            </button>
          </div>
       
      </div>
          
      </div>
   
            </div>
      
        </div>
       </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10 max-w-7xl mx-auto">
               {
                getData?.map(card=><Card key={card.id} card={card}></Card>)
               }
            </div>
        </div>
    );
};

export default DonationCards;

