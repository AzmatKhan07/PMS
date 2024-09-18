import React from "react";
import Header from "../components/common/Header";
import DashboardCard from "../components/home/DashboardCard";
import DashboardChart from "../components/home/Chart";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div>
      <Header />
      <DashboardCard />
      <DashboardChart />
    </div>
  );
};

export default Home;
