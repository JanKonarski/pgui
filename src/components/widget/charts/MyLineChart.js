import React from "react";
import {CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Container} from "react-bootstrap";

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
            <Container className="text-center">
            <ResponsiveContainer width="100%" aspect={2.2}>
                <LineChart

                    data={data}
                    margin={ { top: 10, left :20, bottom :20, right :70}}
                >
                    <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
                    <XAxis dataKey={Object.keys(data[0])[0]}  dy={5}  />
                    <YAxis allowDataOverflow={true}/>
                    <Tooltip/>
                    {/*<Legend/>*/}
                    {getLineChart()}
                </LineChart>
             </ResponsiveContainer>
            </Container>
        );

}