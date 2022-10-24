import React from 'react'
import lebalData from "./lebalData";
import './Chart.css'
import { Chart, ArcElement } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Label from '../Partials/lebal/Label';
Chart.register(ArcElement)

const config = {
    data: {
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                'rgb(255, 9,100)',
                'rgb(4, 162,205)',
                'rgb(255,205,86)',
            ],
            hoverOffset: 3,
            borderRadius: 20,
            borderColor: "gray",
            borderWidth: 2,
            spacing: 10
        }]
    },
    options: {
        cutout: 125
    }
}
const chart = () => {
    return (
        <>
            {/* chart and labels */}
            <div className='chart_container'>
                <div className='chart_item'>
                    <div className='chart_box'>
                        {/* pie chart of the Expense */}
                        <Doughnut {...config}></Doughnut>
                        <h3>
                            Total <span >${0}</span>
                        </h3>

                    </div>
                    <div className='labels_container'>
                        {/* labels container */}
                        {
                            lebalData.map((lebelItem, index) => {
                                return < Label lebelItem={lebelItem} index={index} key={index} />
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default chart