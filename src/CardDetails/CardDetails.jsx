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
   const {picture, price,title,text_button_bg_color ,description} = card ||{}
  

  const textColor = {
    color: text_button_bg_color,
  };
 

    return (
       <div className="max-w-7xl mx-auto ">
           <div >
           <img src={picture} alt="" className="w-[1400px] h-[500px] " />
           </div>
       
            
         
        <div className="hero-overlay py-3 absolute top-[66%] w-[1280px] mx-auto h-[70px] ">
        <div >
            <button onClick={handleAddDonation} className="btn btn-error ml-8 " style={textColor}> <span className="text-white"> Donate</span> <span className="text-white" > ${price}</span>
            </button>
         </div>
           
        </div>
        <h1 className="text-4xl font-bold mt-2 mb-2">{title}</h1>
            <p className="text-base">{description}</p>
       </div>
    );
};

export default CardDetails;