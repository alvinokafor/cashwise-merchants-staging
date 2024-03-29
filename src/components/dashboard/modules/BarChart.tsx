import React from 'react';
import { Chart as ChartJs, ArcElement, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJs.register(
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    BarElement,
    ArcElement
);

const BarChart = () => {
    const generateData = () => {
        const labels = [];
        const data = [];
        const colors = ['#DBFAE9', '#FFE7E4', '#2a85ff']; // Array of colors

        // Generate data for the last 7 days
        for (let i = 11; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            const formattedDate = date.toISOString().split('T')[0];
            labels.push(formattedDate);

            // Generate random amount for each day
            const amount = Math.floor(Math.random() * 1000) + 500;
            data.push(amount);
        }

        return { labels, data, colors };
    };

    // Use the generated data
    const { labels, data, colors } = generateData();

    const chartData = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: colors, // Assign colors to bars
        }]
    };

    const option = {
        plugins: {
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false
            },
            legend: {
                display: false
            }
        },
        interaction: {
            mode: 'index',
            intersect: false
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                // Adjust min and max based on your data
                min: Math.min(...data) - 100,
                max: Math.max(...data) + 100,
                ticks: {
                    stepSize: 300,
                    callback: (value: string) => value + 'K'
                },
                grid: {
                    borderDash: [10]
                }
            }
        }
    };

    return (
        <div className='w-[100%] h-[100%]'>
        <Bar data={chartData} options={option} />
        </div>
    );
};

export default BarChart;
