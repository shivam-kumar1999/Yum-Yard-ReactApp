import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body=()=>{
    return(

        <div className="body">

               <div className="filter "> 
                   <button onClick={()=>{}} className="filter-btn"> Top Restaurant</button>
               </div>

               <div className="res-container">

                   {
                    resList.map(restaurant => <RestaurantCard key={restaurant.data.id}  resData={restaurant}/>)
                   }
                    
                    


               </div>



        </div>
    );
}

export default Body;