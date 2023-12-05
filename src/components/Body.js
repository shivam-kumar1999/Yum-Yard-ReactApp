import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfrestaurant, setresList]= useState([]);
    const [searchText, setSearch]=useState("")

    useEffect(()=>{
        fetchData();
    }, []);

          const fetchData = async()=>{
             const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
          
          
               const json=await data.json();
               console.log(json)

               //optional chaning
              setresList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                 
            };




    return listOfrestaurant?.length===0 ? <Shimmer/> : (

        <div className="body">



               <div className="filter "> 



               <div className="search">

                  <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearch(e.target.value) }}/>
                   
                   <button onClick={()=>{
                         //filter the restaurent card and update the ui
                   }}>Search</button>

               </div>


                   <button 
                    onClick={()=>{
                       const filteredList = listOfrestaurant.filter((res)=>res.data.avgRating > 4);

                       setresList(filteredList);

                    }} 

                   className="filter-btn"> Top Restaurant</button>
               </div>

               <div className="res-container">

                   {listOfrestaurant.map((restaurant) =>( 
                   <RestaurantCard key={restaurant?.info?.id}  />
                   ))}
                    
                    


               </div>



        </div>
    );
}

export default Body;