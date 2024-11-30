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
          src="https://imgs.search.brave.com/FZ5KiFSpo7sg8lRLNa9H4OvGEFFiYR3x6qrC7VfWkBg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS12ZWN0b3Iv/Zm9vZC1sb2dvLWJh/Y2tncm91bmRfMTM5/MC03Mi5qcGc_c2Vt/dD1haXNfaHlicmlk"
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/5b4acd02d56ffe7c32f9b9d076018e4a"
      />
      <h3>Meghana Food</h3>
      <h6>Pizza,North Indian,Asian</h6>
      <h6>4.4 stars</h6>
      <h6>38 mins </h6>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <div className="    ">Search</div>
        <RestaurantCard />
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
