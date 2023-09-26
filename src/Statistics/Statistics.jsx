import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationCard } from "../dataStored/LocalStorage";
import Chart from "react-apexcharts";

const Statistics = () => {
    const getData = useLoaderData();
    const[getStatisticsData, setGetStatisticsData] = useState([]);

    // console.log(getData, getStatisticsData);
     useEffect(()=>{
        const storeData= getStoredDonationCard();
        const findData= getData.filter(data=> storeData.includes(data.id));
        setGetStatisticsData(findData)
        console.log(findData);
     },[getData])

    return(
      <div className="flex justify-center mt-16">
      <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <Chart
          type="pie"
          className="w-full"
          height={400}

           series={[getStatisticsData.length, getData.length]}
           options={{
            noData:{text:"Empty Data"},
            colors:["#00c49f","#FF444A"],
            labels:["Your Donation", "Total donation"],
           }}>  </Chart>

          </div>
    
        </div>
    );
};

export default Statistics;
