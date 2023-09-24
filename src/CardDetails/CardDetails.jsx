import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const cards = useLoaderData()
   

    const {id}= useParams();
      const idParse = parseInt(id)
    const card = cards.find(card=> card.id === idParse)



    return (
       <div className="max-w-7xl mx-auto">
           <img src={card.picture} alt="" className="w-[1400px] h-[500px]" />
          <div className=" bg-transparent">
            <div className="bg-transparent py-5">
            <button className="btn btn-error absolute top-[66%] ml-8">Donation $ {card.price}</button>
            </div>
             </div>
         
        <div>
            <h1>{card.title}</h1>
            <p>{card.description}</p>
        </div>
       </div>
    );
};

export default CardDetails;