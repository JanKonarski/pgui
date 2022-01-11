import {useState} from "react";
import ChartMenu from "./ChartMenu";

import React from "react";
import {
    LineChart,
    BarChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer, Brush, Bar
} from "recharts";
import {Col, Container, Row} from "react-bootstrap";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import {StyledSalesChart} from "./styled_widget/StyledSalesChart";


const color = ["#8884d8", "#82ca9d", "orange", "pink"]

const data = [
    {
        name: 'Page A', uv: 4000,
    },
    {
        name: 'Page B', uv: 3000,
    },
    {
        name: 'Page C', uv: 2000,
    },
    {
        name: 'Page D', uv: 2780,
    },
    {
        name: 'Page E', uv: 1890,
    },
    {
        name: 'Page F', uv: 2390,
    },
    {
        name: 'Page G', uv: 3490,
    },
];







export default function SalesChart() {
    const availableChartTypes = ["Line Chart", "Bar Chart"];
    const availableTimePeriods = ["Today", "This week", "Last year"];
    const availableFilters = ["Revenue", 'Sold items']
    const [chartType, setChartType] = useState(availableChartTypes[0]);
    const [timePeriod, setTimePeriod] = useState("6 months")
    const [filter, setFilter] = useState(availableFilters[0])


    const onChartTypeChangeHandler = (e) => {
        setChartType(e);
    };

    const onTimePeriodChangeHandler = (e) => {
        setTimePeriod(e)
    }

    const onFilterChangeHandler = (e) => {
        setFilter(e)
    }


    const modifyFormatter = (value, name, props) => {
        const nameJSX = <span><span style={{
            display: "inline-block",
            marginRight: "5px",
            borderRadius: "10px",
            width: "10px",
            height: "10px",
            backgroundColor: props.color
        }}></span>{name} : {value}</span>
        return [nameJSX];
    }
    const fetchChart = (type) => {
        switch (type) {
            case availableChartTypes[0]:
                return <MyLineChart data= {data} key={type} color={color} modifyFormatter={modifyFormatter}/>
            case availableChartTypes[1]:
                return <MyBarChart  data= {data} key={type} color={color} modifyFormatter={modifyFormatter}/>
            default:
                return <MyLineChart data= {data} key={type} color={color} modifyFormatter={modifyFormatter}/>
        }
    }

    return (
        < StyledSalesChart>
        <Container className="container">
            <Row>
                <Col>
                    <ChartMenu
                        availableChartTypes={availableChartTypes}
                        availableTimePeriods={availableTimePeriods}
                        availableFilters={availableFilters}
                        chartType={chartType}
                        timePeriod={timePeriod}
                        filter={filter}
                        onChartTypeChangeHandler={onChartTypeChangeHandler}
                        onTimePeriodChangeHandler={onTimePeriodChangeHandler}
                        onFilterChangeHandler={onFilterChangeHandler}
                    />
                </Col>
                <Col xs={9} className={"chart"}>

                    {fetchChart(chartType)}
                </Col>
            </Row>
        </Container>
        </StyledSalesChart>
    )


}