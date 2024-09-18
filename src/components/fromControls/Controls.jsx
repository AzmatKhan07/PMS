import React from "react";

const Controls = () => {
  return (
    <div className="p-10 mt-5 border border-gray-200 rounded-lg">
      <h1 className="mb-2 text-2xl font-medium">
        Please Enter the Information
      </h1>
      <hr className="mb-4" />

      <form className="">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Username
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Email
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Password
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Confirm Password
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="password"
              placeholder="Confirm the password"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <select className="px-6 py-3 text-sm border border-gray-200 rounded-md">
              <option value="name">value 1</option>
              <option value="name">value 1</option>
              <option value="name">value 1</option>
            </select>
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Username
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Email
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Password
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Confirm Password
            </label>
            <input
              className="px-6 py-3 text-sm border border-gray-200 rounded-md"
              type="password"
              placeholder="Confirm the password"
            />
          </div>
          <div className="flex flex-col w-full gap-1">
            <label className="text-sm font-medium" htmlFor="name">
              Name
            </label>
            <select className="px-6 py-3 text-sm border border-gray-200 rounded-md">
              <option value="name">value 1</option>
              <option value="name">value 1</option>
              <option value="name">value 1</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm font-medium" htmlFor="name">
              Agree Tream and conductions
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm font-medium" htmlFor="name">
              Agree Tream and conductions
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm font-medium" htmlFor="name">
              Agree Tream and conductions
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm font-medium" htmlFor="name">
              Agree Tream and conductions
            </label>
          </div>
        </div>

        <div className="flex items-center justify-end mt-7">
          <button className="hidden px-8 py-3 text-sm font-medium text-white rounded-full md:inline-block bg-primary">
            Submit Information
          </button>
        </div>
      </form>
    </div>
  );
};

export default Controls;
