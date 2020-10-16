import React, { useEffect } from 'react'
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2"

import "./chart.css"

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
        {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
        },
        {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
        }
    ]
};
function chart(props) {
    console.log("inside chart")
    console.log(props)
    const { data } = props
    const newData = data.employees
    const Total = data.employees.length;
    let farmWorker = 0;
    let restaurantWorker = 0;
    let cleaners=0

    let obj = newData.find((o, i) => {
        if (o.workType === 'Farm-Worker') {
            farmWorker++;
        }
        else if (o.workType === 'Restaurant-Worker') {
            restaurantWorker++;
        }
        else if (o.workType === 'Cleaners') {
            cleaners++;
        }
    })

    console.log(farmWorker,restaurantWorker,cleaners)

    
    const chartData = {
        labels: [`Total Available Workers = ${Total}`],
        datasets: [
            {
                label: `Total Farm Worker : ${farmWorker}`,
                data: [farmWorker],
                fill: true,
                backgroundColor: "red",
                borderColor: "#742774"
            },
            {
                label: `Total Restaurant Workers : ${restaurantWorker}`,
                data: [restaurantWorker],
                fill: true,
                backgroundColor: "blue",
                borderColor: "#742774"
            },

            {
                label: `Total Cleaners : ${cleaners}`,
                data: [restaurantWorker],
                fill: true,
                backgroundColor: "black",
                borderColor: "#742774"
            },
        ]
    }

    return (
        <div className="chart-container chart" >
            <Bar data={chartData}></Bar>

        </div>
    )
}
export default chart