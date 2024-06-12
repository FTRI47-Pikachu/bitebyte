import React from "react";
import AddSnack from "../components/AddSnack";
import Carousel from "../components/Carousel";

const HomePage: React.FC = () => {
  const slides = [
    {
      id: 1,
      content: "Snack 1",
      image:
        "https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg",
    },
    {
      id: 2,
      content: "Snack 2",
      image:
        "https://cablevey.com/wp-content/uploads/2020/11/The-Complete-Guide-on-Snack-Foods.jpg",
    },
    {
      id: 3,
      content: "Snack 3",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2020/05/health-snacks.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-6 p-4">
      <Carousel slides={slides} />
      <AddSnack />
    </div>
  );
};

export default HomePage;
