/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link, useLoaderData, useNavigate} from "react-router-dom";
import { saveDonationCard } from "../dataStored/LocalStorage";

const Cards = ({card}) => {
    const{id,picture,title,category,card_bg_color,category_bg_color,text_button_bg_color,price}= card || {}

    const bgColor = {
        backgroundColor: card_bg_color
      };
    
      const bgCategory = {
        backgroundColor: category_bg_color
      };
    
      const textColor = {
        color: text_button_bg_color,
      };
      const textColor1 = {
        backgroundColor: text_button_bg_color,
      };
  
    return (
        <div style={bgColor}>
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-x bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture} alt="image" className="h-full w-full object-cover"/>
  </div>
  <div className="p-6">
    <button className="mb-4 block font-sans text-base font-semibold uppercase antialiased btn" style={bgCategory}>
      <span style={textColor}>{category}</span>
    </button>
    <h4 className="mb-2 block font-sans text-2xl font-bold" style={textColor}>
      {title}
    </h4>
    <p className="mb-8 block font-sans text-base font-bold leading-relaxed antialiased">
      <span  style={textColor}>${price}.00</span>
    </p>
    <Link className="inline-block">
      <button
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center btn align-middle font-sans text-xs uppercase"
       style={textColor1}
      ><span className="text-white font-bold"> View Details</span></button>
  </Link>
   
  </div>
</div>
        </div>
    );
};

export default Cards;