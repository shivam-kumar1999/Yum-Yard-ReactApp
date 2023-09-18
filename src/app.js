import React from "react";
import  ReactDOM  from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";




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