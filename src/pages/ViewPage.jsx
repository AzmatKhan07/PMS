import React from "react";
import Header from "../components/common/Header";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

const ViewPage = () => {
  return (
    <div>
      <Header />

      <div className="p-10 mt-10 border border-gray-200 rounded-lg">
        <h1 className="mb-5 text-2xl font-bold">Users Records</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm bg-white divide-y-2 divide-gray-200">
            <thead className="font-bold ltr:text-left rtl:text-right">
              <tr>
                <th className="px-4 py-2 text-gray-900 whitespace-nowrap">
                  Name
                </th>
                <th className="px-4 py-2 text-gray-900 whitespace-nowrap">
                  Date of Birth
                </th>
                <th className="px-4 py-2 text-gray-900 whitespace-nowrap">
                  Role
                </th>
                <th className="px-4 py-2 text-gray-900 whitespace-nowrap">
                  Salary
                </th>
                <th className="px-4 py-2 text-gray-900 whitespace-nowrap">
                  Status
                </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>

            <tbody className="text-center divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  24/05/1995
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Web Developer
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  $120,000
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                    Active
                  </span>
                </td>
                <td className="flex gap-2 px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-indigo-500 bg-indigo-100 rounded"
                  >
                    <MdGridView className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-red-500 bg-red-100 rounded"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-yellow-500 bg-yellow-100 rounded"
                  >
                    <TiEdit className="text-lg" />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  24/05/1995
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Web Developer
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  $120,000
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                    Active
                  </span>
                </td>
                <td className="flex gap-2 px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-indigo-500 bg-indigo-100 rounded"
                  >
                    <MdGridView className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-red-500 bg-red-100 rounded"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-yellow-500 bg-yellow-100 rounded"
                  >
                    <TiEdit className="text-lg" />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  24/05/1995
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Web Developer
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  $120,000
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                    Active
                  </span>
                </td>
                <td className="flex gap-2 px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-indigo-500 bg-indigo-100 rounded"
                  >
                    <MdGridView className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-red-500 bg-red-100 rounded"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-yellow-500 bg-yellow-100 rounded"
                  >
                    <TiEdit className="text-lg" />
                  </a>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                  John Doe
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  24/05/1995
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  Web Developer
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  $120,000
                </td>
                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">
                  <span className="inline-block px-4 py-1 text-xs font-semibold text-white bg-green-500 rounded-full">
                    Active
                  </span>
                </td>
                <td className="flex gap-2 px-4 py-2 whitespace-nowrap">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-indigo-500 bg-indigo-100 rounded"
                  >
                    <MdGridView className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-red-500 bg-red-100 rounded"
                  >
                    <RiDeleteBin5Line className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-xs font-medium text-yellow-500 bg-yellow-100 rounded"
                  >
                    <TiEdit className="text-lg" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
