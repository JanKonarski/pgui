import {useEffect, useState} from "react";
import ChartMenu from "./ChartMenu";

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import {StyledSalesChart} from "./styled_widget/StyledSalesChart";
import moment from "moment";
import 'moment/locale/en-au';
import 'moment/locale/pl';

export default function SalesChart(props) {



    const availableChartTypes = ["Line Chart", "Bar Chart"];
    const availableTimePeriods = {
                                    "Today" : "day",
                                    "This week" : "week",
                                    "Last year" : "year"
                                };
    const availableFilters = {"Revenue" : "revenue", 'Sold items' :'turnover'}
    const [isLoading, setIsLoading] = useState(true);



    const [chartType, setChartType] = useState(availableChartTypes[0]);
    const [timePeriod, setTimePeriod] = useState(Object.keys(availableTimePeriods)[0])
    const [filter, setFilter] = useState(Object.keys(availableFilters)[0])

    const color = ["#8884d8", "#82ca9d", "orange", "pink"]

    const [months,setMonths] = useState(null)
    const [days,setDays] = useState(null)
    const [hours,setHour] = useState(null)


    const getConvertedChartData=(data,labels)=> {
        console.log("here")
        console.log(labels)
        console.log(data)
        let d = [];
        let index =0
        // for (let i in labels) {
        //    d.push({
        //     {
        //
        //
        //         key : ,
        //         value: i
        //     }
        //    })
        //     console.log('data'+data[1])
        //     console.log('label'+labels[i])
        //     index = index+1
        // }
        console.log(d)
        return d

    }


    const fetchData=(filter, timePeriod)=>{
        // setIsLoading(true);
        fetch(
            'http://127.0.0.1:8000/chart/'+availableFilters[filter]+'/'+availableTimePeriods[timePeriod]+'/?id='+props.id+'&date=2022-1-7T23:40:00.000'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Could not load data')
            }
        }).then((data) => {
            // setIsLoading(false);

            setChartData(data)


        }).catch((error) => {

        });
    }

    const [chartData,setChartData] =useState(null)




    useEffect(()=> {
        if (props.language === 'eng'){
            moment.locale('en-au')
        }else{
            moment.locale('pl')
        }
        setHour([0,1,2,3,4,5,6,7,8,9,10,10,12,13,14,15,16,17,18,19,20,21,22,23]

        )
        setMonths(moment.months())
        setDays(moment.weekdays())
    }, [props.language]);



    const onChartTypeChangeHandler = (e) => {
        setChartType(e);


    };

    const onTimePeriodChangeHandler = (e) => {
        setTimePeriod(e)
        fetchData(filter,timePeriod)
    }

    const onFilterChangeHandler = (e) => {
        setFilter(e)
        fetchData(filter,timePeriod)
    }

    const data=["elo","eo"]

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
                            availableTimePeriods={Object.keys(availableTimePeriods)}
                            availableFilters={Object.keys(availableFilters)}
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
                {/*<ul>*/}
                {/*    {isLoading ? <div>loading</div> : {chartData}}*/}
                {/*</ul>*/}
                {chartData}





            </Container>
        </StyledSalesChart>
    )


}