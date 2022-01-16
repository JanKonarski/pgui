import {useCallback, useEffect, useState} from "react";
import ChartMenu from "./ChartMenu";

import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import {StyledSalesChart} from "./styled_widget/StyledSalesChart";
import moment from "moment";
import 'moment/locale/en-au';
import 'moment/locale/pl';
import spinner from "../../image/spinner.gif";

export default function SalesChart(props) {



    const availableChartTypes = ["Line Chart", "Bar Chart"];
    const availableTimePeriods = {
                                    "Today" : "day",
                                    "This week" : "week",
                                    "This year" : "year"
                                };
    const availableFilters = {"Revenue" : "revenue", 'Sold items' :'turnover'}
    const [isLoading, setIsLoading] = useState(true);
    let content = null



    const [chartType, setChartType] = useState(availableChartTypes[0]);
    const [timePeriod, setTimePeriod] = useState(Object.keys(availableTimePeriods)[0]);

    const [filter, setFilter] = useState(Object.keys(availableFilters)[0])

    const color = ["#8884d8", "#82ca9d", "orange", "pink"]

    const [months,setMonths] = useState(()=>{
        if (props.language === 'eng'){
            moment.locale('en-au')
        }else{
            moment.locale('pl')
        }

        return moment.months()

    })
    const [days,setDays] = useState(()=>{
        if (props.language === 'eng'){
            moment.locale('en-au')
        }else{
            moment.locale('pl')
        }

        console.log(moment.weekdays())
        return moment.weekdays()

    })

    const [hours,setHour] = useState(null)

    const [chartData,setChartData] =useState(null)

    const getTimeLabels = () => {
        if (timePeriod ==='Today'){
            return hours;
        }
        if(timePeriod==='This week'){
            return days
        }
        return months
    };

    const fetchData=(filter, timePeriod)=>{

        setIsLoading(true);
        fetch(
            'http://127.0.0.1:8000/chart/'+availableFilters[filter]+'/'+availableTimePeriods[timePeriod]+'/?id='+props.id+'&date=2022-1-7T23:40:00.000'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Could not load data')
            }
        }).then((data) => {
            setTimeout(function(){
                console.log("Loading chart data");

            },2000);
            console.log(data);
            let tmp = convert(data,getTimeLabels())
            console.log(tmp);
            setChartData(tmp);
            setIsLoading(false)
        }).catch((error) => {
            setIsLoading(false)
        });
    }



    const convert=(data,labels)=>{
        let k =0
        let d = []
        if (data===null || labels ===null ){return null}
        for (let key in data){
            d.push({

                    name : JSON.stringify(labels[k]),
                    value:JSON.stringify(data[key])

            })
            k+=1
        }
        return d
    }


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
        fetchData(filter,timePeriod)

    }, [props.language, timePeriod, filter]);

    const onChartTypeChangeHandler = (e) => {
        setChartType(e);
    };

    const onTimePeriodChangeHandler = (e) => {
        setTimePeriod(e)
        fetchData(filter,e)
    }

    const onFilterChangeHandler = (e) => {
        setFilter(e)
        fetchData(e,timePeriod)
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

    if (isLoading) {
        content =
            <Col className='mx-auto d-block spinner'><img className='mx-auto align-self-center d-block spinner'
                                                          src={spinner} alt={''}/></Col>
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
                        {JSON.stringify(chartData)}
                        {/*{fetchChart(chartType)}*/}

                    </Col>

                </Row>
                <Row>
                    {content}
                </Row>






            </Container>
        </StyledSalesChart>
    )


}