import React, {useState} from "react";
import {Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import Container from "react-bootstrap/Container";

export default function MyBarChart (props) {
    const data = props.data
    const color = props.color
    const[max,setMax] = useState(1)


    const getBar = () => {
        const {stacked} = props;



        const keysArr = Object.keys(data[0]).slice(1);
        const barArr = [];
        keysArr.forEach((item, index) => {
            if(max < item){
                setMax(item["name"])
            }
            barArr.push(<Bar dataKey={item} stackId={stacked ? "a" : null} fill={color[index]}/>)
        })
        return barArr;
    }


    const handleSort = (item1, item2) => {
        return 1;
    }


        return (
            <Container className="text-center">
                <ResponsiveContainer width="100%" aspect={2.2}>
                <BarChart
                    data={data}
                    margin={ { top: 10, left :20, bottom :20, right :70}}
                >
                    <CartesianGrid strokeDasharray="2 2" horizontal={false} vertical={false}/>
                    <XAxis dataKey={Object.keys(data[0])[0]} dy={5}  />
                    <YAxis domain={[0,max+100]} allowDataOverflow={true}/>
                    <Tooltip/>
                    {/*<Legend/>*/}
                    {getBar()}
                </BarChart>
                </ResponsiveContainer>
            </Container>
        );

}