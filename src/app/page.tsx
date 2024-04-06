"use client";

import React, { useState } from "react";
import Servings from "@/components/Servings";
import Meals from "@/components/Meals";

const Home = () => {
  // useState pour récupérer le nombre de repas et le passer a Meals
  const [servingsCount, setServingsCount] = useState(null);
  const handleServingsUpdate = (totalServings) => {
    setServingsCount(totalServings);
  };
  return (
    <main>
      <Servings handleServingsUpdate={handleServingsUpdate(totalServings)} />
      <Meals maxMeals={3} />
      {/* 
      <Planning /> */}
    </main>
  );
};

export default Home;
