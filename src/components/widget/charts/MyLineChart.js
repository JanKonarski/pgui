import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function MyLineChart (props) {

    const data = props.data
    const color = props.color

    const getLineChart = () => {
        const keysArr = Object.keys(data[0]).slice(1);
        const lineArr = [];
        keysArr.forEach((item, index) => {
            lineArr.push(<Line type="monotone" dataKey={item} stroke={color[index]}/>)
        })
        return lineArr;
    }

        return (
            <ResponsiveContainer width="95%" height="100%">
            <LineChart
                data={data}
                margin={{ top: 5}}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
                <XAxis dataKey={Object.keys(data[0])[0]}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {getLineChart()}
            </LineChart>
             </ResponsiveContainer>
        );

}