import { useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {

    const cards = useLoaderData()
   

    const {id}= useParams();
      const idParse = parseInt(id)
    const card = cards.find(card=> card.id === idParse)
   console.log(card);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CardDetails;