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
            <ResponsiveContainer width="=80%" height="100%">
            <LineChart
                data={data}
                margin={ { top: 10, left :30, bottom :40, right :30}}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} fill='red'/>
                <XAxis dataKey={Object.keys(data[0])[0]}  angle={-45} interval={0} dy={25} tick={{ fontSize: 14, spacing :30 }} />
                <YAxis/>
                <Tooltip/>
                {/*<Legend/>*/}
                {getLineChart()}
            </LineChart>
             </ResponsiveContainer>
        );

}