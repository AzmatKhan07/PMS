import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Register necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const DashboardChart = () => {
  // Sales Bar Chart data
  const salesData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [150, 200, 170, 220, 180],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
    ],
  };

  // Purchases Line Chart data
  const purchasesData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Purchases",
        data: [120, 180, 140, 200, 160],
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
      },
    ],
  };

  // Users Pie Chart data (random values)
  const usersData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Users",
        data: [300, 450, 320, 480, 400],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Chart options (shared for all charts)
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold ">All data in chart</h1>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Show Modal</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <hr className="mb-4" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Sales Bar Chart */}
        <div className="chart-container">
          <Bar
            data={salesData}
            options={{
              ...options,
              title: { display: true, text: "Sales Data (Bar Chart)" },
            }}
          />
        </div>

        {/* Purchases Line Chart */}
        <div className="chart-container">
          <Line
            data={purchasesData}
            options={{
              ...options,
              title: { display: true, text: "Purchases Data (Line Chart)" },
            }}
          />
        </div>

        {/* Users Pie Chart */}
        <div className="chart-container">
          <Pie
            data={usersData}
            options={{
              ...options,
              title: { display: true, text: "Users Data (Pie Chart)" },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardChart;
