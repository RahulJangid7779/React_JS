import React from "react";
import ReactDOM from "react-dom/client";

/*
#HEADER#
-LOGO
-NAV-ITEMS
#BODY#
-SEARCH-BAR
---RESTAURAUNTCONTAINER
-RESTRAUNTCARD
----IMG
----Name od Res, Star Rating, cuisine, dilivery time etc
#FOOTER#
-LINKS
-COPYRIGHT
-ADDRESS
-CONTACT
*/
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          class="logo "
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/portal/c/logo_2022.png"
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>HOME</li> <li>About Us</li> <li>Contact Us</li> <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5b4acd02d56ffe7c32f9b9d076018e4a"
      />
      <h3>{resData.data.name}</h3>
      <h6>{resData.data.cusine}</h6>
      <h6>{resData.data.rating}</h6>
      <h6>{resData.data.time} </h6>
    </div>
  );
};
const resObj = {
  data: {
    name: "KFC",
    cusine: "pizza, burger,mocktail",
    rating: 2.2,
    time: 35,
  },
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj} />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
