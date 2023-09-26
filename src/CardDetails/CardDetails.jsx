import { useLoaderData, useParams } from "react-router-dom";
import { saveDonationCard } from "../dataStored/LocalStorage";

const CardDetails = () => {

    const cards = useLoaderData()

    const {id}= useParams();
      const idParse = parseInt(id)
    const card = cards.find(card=> card.id === idParse)

    const handleAddDonation =()=>{
      saveDonationCard(idParse);
    }
   const {picture, price,title,text_button_bg_color,description} = card ||{}
  

   const textColor1 = {
    backgroundColor: text_button_bg_color,
  };
 

    return (
       <div className="flex-1 justify-center max-w-7xl mx-auto mt-3">
           <div >
           <img src={picture} alt="" className="w-[1280px] h-[200px] md:h-[300px]  lg:h-[500px] flex text-center items-center justify-center"/>
           </div>
       
            
         
        <div className="hero-overlay lg:py-5 absolute h-[50px] top-[58%]  md:top-[90%] lg:top-[63%] lg:w-[1280px] mx-auto lg:h-[90px] ">
        <div >
            <button onClick={handleAddDonation} className="lg:ml-8 w-20 h-7 mt-3 items-center ml-3 rounded-sm mb-2 lg:w-36 lg:h-12 lg:mb-3 lg:mt-1 md:mt-3" 
            style={textColor1}> 
            <span className="text-white text-xs items-center  lg:text-lg"> Donate $</span>
             <span className="text-white text-xs lg:text-lg" >{price}</span>
            </button>
         </div>
           
        </div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-2 ml-1 md:ml-2">{title}</h1>
            <p className="text-sm lg:text-base ml-1 md:ml-2">{description}</p>
       </div>
    );
};

export default CardDetails;