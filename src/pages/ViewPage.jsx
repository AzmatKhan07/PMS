import React from "react";
import Header from "../components/common/Header";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdGridView } from "react-icons/md";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const ViewPage = () => {
  return (
    <div>
      <Header />

      <div className="p-10 mt-10 border border-gray-200 rounded-lg">
        <h1 className="mb-5 text-2xl font-bold">Users Records</h1>

        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow className="font-semibold">
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell>
                    <span
                      className={`text-xs font-semibold py-1 px-3 rounded-full ${
                        invoice.paymentStatus === "Paid"
                          ? "bg-green-100 text-green-500"
                          : invoice.paymentStatus === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {invoice.paymentStatus}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                  <TableCell className="flex items-center justify-end gap-4 text-right">
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
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
