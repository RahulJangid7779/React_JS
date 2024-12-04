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
const reslist = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "632986",
          name: "La Pino'z Pizza",
          cloudinaryImageId: "b9ixfa8dpbf19njypjbt",
          locality: "Kalwad Road",
          areaName: "Jhotwara",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
          avgRating: 4.3,
          veg: true,
          parentId: "4961",
          avgRatingString: "4.3",
          totalRatingsString: "1.6K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 03:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            subHeader: "UPTO ₹90",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=632986&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "904413",
          name: "Roll Wale",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/14/0b45da63-830c-4a1b-ab97-c3d412872111_904413.jpg",
          locality: "Moti Nagar",
          areaName: "Vaishali Nagar",
          costForTwo: "₹200 for two",
          cuisines: ["Rolls & Wraps", "Chinese"],
          avgRating: 4.2,
          veg: true,
          parentId: "170851",
          avgRatingString: "4.2",
          totalRatingsString: "83",
          promoted: true,
          adTrackingId:
            "cid=21916684~p=4~adgrpid=21916684#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=904413~eid=0cb7a8ae-136d-454a-9d88-7f89a208032c~srvts=1733161273002~collid=83631",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 10.2,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "10.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-02 23:55:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "21916684",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=904413&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "902578",
          name: "The Pizza Town",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/20/4ef2a8bf-7d7f-4395-afec-5507352f19ff_e525bf3b-a851-4176-b9b7-63aefc31d357.jpg",
          locality: "100 Feet Rd",
          areaName: "Jhotwara",
          costForTwo: "₹300 for two",
          cuisines: ["American", "Pizzas", "Burgers"],
          avgRating: 3.9,
          veg: true,
          parentId: "212662",
          avgRatingString: "3.9",
          totalRatingsString: "10",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 2,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-02 23:58:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=902578&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "45213",
          name: "Kalyan Rooftop Restaurant",
          cloudinaryImageId: "qvrdltzftpsuc80drxhr",
          locality: "Gopalbari",
          areaName: "Lal Kothi",
          costForTwo: "₹600 for two",
          cuisines: [
            "South Indian",
            "Indian",
            "Italian",
            "Chinese",
            "Continental",
            "Mexican",
            "Desserts",
          ],
          avgRating: 4.4,
          parentId: "114176",
          avgRatingString: "4.4",
          totalRatingsString: "579",
          promoted: true,
          adTrackingId:
            "cid=22077570~p=5~adgrpid=22077570#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=45213~eid=969010fd-447b-4de8-950a-9af57548a551~srvts=1733161273002~collid=83631",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 11.2,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "11.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-02 23:59:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹125",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.6",
              ratingCount: "3.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22077570",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=45213&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "427425",
          name: "The Baker's Dozen",
          cloudinaryImageId: "54af8ba5dc1b4b90eea373cd6958f112",
          locality: "Ashok Vihar Vistar Colony",
          areaName: "Jhotwara",
          costForTwo: "₹400 for two",
          cuisines: ["Pizzas", "Continental", "Beverages"],
          avgRating: 4.3,
          parentId: "946",
          avgRatingString: "4.3",
          totalRatingsString: "20",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=427425&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "730303",
          name: "Pizza Bar",
          cloudinaryImageId: "db10061cfb54fef29c85aab7331530da",
          locality: "Chitrakoot",
          areaName: "Chitrakoot ",
          costForTwo: "₹200 for two",
          cuisines: ["Pizzas", "Fast Food", "Burgers", "Beverages"],
          avgRating: 4.1,
          veg: true,
          parentId: "158340",
          avgRatingString: "4.1",
          totalRatingsString: "706",
          promoted: true,
          adTrackingId:
            "cid=22088043~p=6~adgrpid=22088043#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=730303~eid=cabc01c5-900e-4144-bfce-02866c6f6032~srvts=1733161273002~collid=83631",
          sla: {
            deliveryTime: 47,
            lastMileTravel: 8.9,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "8.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 02:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Pizza.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Pizza.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22088043",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=730303&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "452091",
          name: "Pizza",
          cloudinaryImageId: "cb8dac543118fc0ca966c891480d2b52",
          locality: "Govind Nagar",
          areaName: "Gokulpura",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas"],
          avgRating: 3.3,
          veg: true,
          parentId: "158220",
          avgRatingString: "3.3",
          totalRatingsString: "166",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "pureveg",
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹499",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=452091&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "822879",
          name: "Olio - The Wood Fired Pizzeria",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/12/4e70f5c7-4c96-49ac-9dae-15a90cfac90c_7326b059-aac8-4b5b-8e92-fb98b8e181c3.jpg_compressed",
          locality: "VAISHALI",
          areaName: "CHITRAKOOT",
          costForTwo: "₹300 for two",
          cuisines: ["Pizzas", "Pastas", "Fast Food", "Snacks", "Beverages"],
          avgRating: 4.4,
          parentId: "11633",
          avgRatingString: "4.4",
          totalRatingsString: "1.1K+",
          promoted: true,
          adTrackingId:
            "cid=22128771~p=8~adgrpid=22128771#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=822879~eid=1ca20bf4-d1ba-4808-a396-5f7f55c5ece2~srvts=1733161273002~collid=83631",
          sla: {
            deliveryTime: 49,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            slaString: "45-50 mins",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 05:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹249",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "22128771",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=822879&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "275783",
          name: "The rose cafe",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/8/b196f1df-6bcf-4348-8746-b21aaa96ca73_3823dae4-6727-4343-8b3e-75926179b6e7",
          locality: "Jhotwara",
          areaName: "Jhotwara",
          costForTwo: "₹250 for two",
          cuisines: ["Indian"],
          avgRating: 4.3,
          parentId: "213292",
          avgRatingString: "4.3",
          totalRatingsString: "71",
          sla: {
            deliveryTime: 31,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2024-12-03 03:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹350",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=275783&source=collection&query=Pizza",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines } = resData?.card.card.info;
  return (
    <div className="res-card">
      <img
        className="res-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.card.card.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h6>{cuisines}</h6>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {reslist.map((info) => (
          <RestaurantCard key={info.id} resData={info} />
        ))}
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
