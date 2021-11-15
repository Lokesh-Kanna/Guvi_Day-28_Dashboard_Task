import * as React from 'react';
import { Chart } from "react-google-charts";

export function LineChart({ data }) {
    return (
        <Chart
            width={'700px'}
            height={'500px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
                hAxis: {
                    title: 'Time',
                },
                vAxis: {
                    title: 'Money',
                },
            }}
            rootProps={{ 'data-testid': '1' }} />
    );
}
export function PieChart({ data }) {
    return (
        <div id="pieChart">
            <Chart
                width={'800px'}
                height={'600px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={data}
                options={{
                    title: 'Earning Distribution',
                }}
                rootProps={{ 'data-testid': '1' }} />
        </div>
    );
}

