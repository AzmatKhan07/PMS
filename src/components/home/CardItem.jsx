import React from "react";

const CardItem = (props) => {
  return (
    <div className="flex items-center justify-between gap-5 px-8 py-4 border border-gray-200 cursor-pointer rounded-xl hover:shadow-sm">
      <div>
        <h1 className="mb-0 text-base font-medium tracking-wide text-gray-500">
          {props.name}
        </h1>
        <p className="mb-0 text-3xl font-bold">{props.value}</p>
      </div>

      <div className="p-3 text-4xl text-white rounded-lg bg-primary">
        {props.icon}
      </div>
    </div>
  );
};

export default CardItem;
