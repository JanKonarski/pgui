import React from "react";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

export default function MyBarChart (props) {
    const data = props.data
    const color = props.color


    const getBar = () => {
        const {stacked} = props;
        const keysArr = Object.keys(data[0]).slice(1);
        const barArr = [];
        keysArr.forEach((item, index) => {
            barArr.push(<Bar dataKey={item} stackId={stacked ? "a" : null} fill={color[index]}/>)
        })
        return barArr;
    }


    const handleSort = (item1, item2) => {
        return 1;
    }


        return (
            <ResponsiveContainer width="95%" height="100%">
            <BarChart
                data={data}
                margin={{ top: 5}}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false}/>
                <XAxis dataKey={Object.keys(data[0])[0]}/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                {getBar()}
            </BarChart>
            </ResponsiveContainer>
        );

}