import React from "react";
import Carousel from "../components/Carousel";
import Header from '../components/header'
import SavedSnacks from "../components/SavedSnacks";
import AddSnackAWS from "../components/AddSnackAWS"
import snack2 from "../assets/snack2.jpg"

const HomePage: React.FC = ( { userId }) => {
  const [refreshKey, setRefreshKey] = React.useState(0);

  const slides = [
    {
      id: 1,
      content: "",
      image:
        "https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg",
    },
    {
      id: 2,
      content: "",
      image: snack2
    },
    {
      id: 3,
      content: "",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/05/health-snacks.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
      <Header />
      <Carousel slides={slides} />
      <AddSnackAWS 
      userId={userId}
      setRefreshKey={setRefreshKey}
      />
      <SavedSnacks
      userId={userId}
      refreshKey={refreshKey}
       />
    </div>
  );
};

export default HomePage;
