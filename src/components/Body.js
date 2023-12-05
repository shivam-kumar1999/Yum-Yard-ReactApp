import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{

    const [listOfrestaurant, setresList]= useState([]);
     const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearch]=useState("")

    useEffect(()=>{
        fetchData();
    }, []);

          const fetchData = async()=>{
             const data= await fetch(" https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

               const json=await data.json();
               console.log(json)

               //optional chaning
              setresList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

              setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
                 
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
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the restraunt cards and update the UI
              // searchText
              console.log(searchText);

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>

               </div>

               <div className="res-container">

                    {listOfrestaurant.map((restaurant) =>( 
                   <RestaurantCard key={restaurant?.info?.id}  resData = {restaurant} />
                   ))} 
                    
                    


               </div>



        </div>
    );
}

export default Body;