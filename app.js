import React from "react";
import  ReactDOM  from "react-dom/client";



const Header=()=>{
    return(

        <div className="header">

               <div className="logo-container">
                    <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNJCDxNcy7xcuTDaSYQZJTxpl540tiz2e2g&usqp=CAU" alt=" yum,yaard" />
                    <span className="span">YUM-YARD</span>
               </div>

                <div className="nav-items">
                       
                       <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                       </ul>
                </div>

        </div>
    );
}

const RestaurantCard =()=>{
    return(

        <div className="res-card">
            <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426" alt="kfcimg" />
            <h3>KFc goods</h3>
            <h4>Biryani, Fried chicken,Ameri</h4>
            <h4>4.5 stars</h4>
             <h4>28 minutes</h4>
        </div>

    )
}

const Body=()=>{
    return(

        <div className="body">

               <div className="search"> Search</div>
               <div className="res-container">

                     <RestaurantCard></RestaurantCard>

               </div>



        </div>
    )
}

const Applayout = () =>{
    return(
        <div className="app">

            
           <Header></Header>
           <Body></Body>




        </div>
    );
}



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout/>);