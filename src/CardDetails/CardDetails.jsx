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
        <div className="relative mt-4 rounded-xl">
          <div>
              <img src={picture} alt="" className="w-full h-[60vh] rounded-lg" />
          </div>
          <div className="lg:h-28 md:h-16 h-14 w-full bg-opacity-30 bg-black absolute bottom-0">
              <button onClick={handleAddDonation} className="btn lg:my-9 md:my-2 lg:ml-9 md:ml-5 my-1 ml-3 px-2 py-4 lg:px-5 lg:py-3"
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
