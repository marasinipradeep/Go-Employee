import React from 'react'
import { Bar } from "react-chartjs-2"

//import styles from chart
import "./chart.css"


function chart(props) {

    const { data } = props
    const newData = data.employees
    const Total = data.employees.length;
    let farmWorker = 0;
    let restaurantWorker = 0;
    let cleaners = 0

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
                data: [cleaners],
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