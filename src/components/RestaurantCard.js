import { CDN_URL } from "../utils/constants";


const RestaurantCard =(props)=>{

    const {resData} = props;

    //optimising our code more --> resdata?.data means optional chaining

     const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData;
   
    return(

        <div className="res-card">

             <img  className="res-logo" src={CDN_URL+cloudinaryImageId} >

            </img>


            <h4>{name}</h4>
            <h4>{cuisines.join(",") }</h4>   
            <h4>{avgRating}</h4>
            <h4>{costForTwo/100}</h4>
            <h4>{deliveryTime}</h4>
       
        </div>

    );
}   

export default RestaurantCard;