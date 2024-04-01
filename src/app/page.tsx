"use client";

import React from "react";
import Servings from "@/components/Servings";
import Meals from "@/components/Meals";

const Home = () => {
  // useState pour récupérer le nombre de repas et le passer a Meals

  return (
    <main>
      <Servings />
      <Meals maxMeals={3} />
      {/* 
      <Planning /> */}
    </main>
  );
};

export default Home;
