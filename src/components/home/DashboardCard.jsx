import React from "react";
import CardItem from "./CardItem";
import { BsCashCoin } from "react-icons/bs";
import { GiCash } from "react-icons/gi";
import { TbBrandCashapp } from "react-icons/tb";
import { ImUsers } from "react-icons/im";

const DashboardCard = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-3 lg:grid-cols-4">
      <CardItem name="Users" value="2000" icon={<ImUsers />} />
      <CardItem name="Income" value="$4500.0k" icon={<BsCashCoin />} />
      <CardItem name="Sells" value="$2000.0k" icon={<GiCash />} />
      <CardItem name="Parchase" value="$2100.0k" icon={<TbBrandCashapp />} />
    </div>
  );
};

export default DashboardCard;
