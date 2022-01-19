import {useCallback, useEffect, useState} from "react";
import ChartMenu from "./ChartMenu";

import React from "react";
import {Card, Col, Container, Row} from "react-bootstrap";
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
    const [isLoading, setIsLoading] = useState(false);
    let content = null
    let chart =null



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


        return moment.weekdays(true)

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

        let tmp
        setIsLoading(true);
        fetch(
            'http://127.0.0.1:8000/chart/'+availableFilters[filter]+'/'+availableTimePeriods[timePeriod]+'/?id='+props.id+'&date=2022-1-7T23:40:00.000'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Could not load data')
            }
        }).then(data => {
            setTimeout(function(){
                console.log("Loading chart data");

            },2000);

            tmp = convert(data,getTimeLabels())

        }).then(()=>{

            setChartData(tmp);

            }

        ).catch((error) => {
            setIsLoading(false)
        }).finally(()=>{
            setIsLoading(false)
        });
    }



    const convert=(data,labels)=>{
        let k =0
        let d = []
        if (data===null || labels ===null ){return null}
        for (let key in data){
            d.push({

                    name : labels[k],
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


            setMonths(moment.months());
            setDays(moment.weekdays())

        fetchData(filter, timePeriod)




    }, [props.language, timePeriod, filter]);

    const onChartTypeChangeHandler = (e) => {
        setChartType(e);
        fetchData(filter,timePeriod)
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
            width: "5px",
            height: "5px",
            backgroundColor: props.color
        }}></span>{name} : {value}</span>
        return [nameJSX];
    }
    const fetchChart = (type) => {
        switch (type) {
            case availableChartTypes[0]:
                return <MyLineChart data= {chartData} key={type} color={color} modifyFormatter={modifyFormatter}/>
            case availableChartTypes[1]:
                return <MyBarChart  data= {chartData} key={type} color={color} modifyFormatter={modifyFormatter}/>
            default:
                return <MyLineChart data= {chartData} key={type} color={color} modifyFormatter={modifyFormatter}/>
        }
    }

    if (isLoading) {
        content =
            <Col className='mx-auto d-block spinner'><img className='mx-auto align-self-center d-block spinner'
                                                          src={spinner} alt={''}/></Col>
    }

    if(chartData===null){
        chart = null
    }else{
        chart = fetchChart(chartType)
    }

    return (
        <StyledSalesChart>
            <Card.Body>
            <Card.Title className="row justify-content-center fs-3 fw-bold m-0">{props.t('chartWidget')}</Card.Title>


                <Row className='chart'>

                    <Col className="col-12 px-0 mx-0 gx-0 col-sm-12 col-md-8 chart">
                        {/*{JSON.stringify(chartData)}*/}

                        {chart}

                    </Col>
                    <Col className="col-12 col-sm-12 col-md-4">

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

                </Row>

            </Card.Body>






        </StyledSalesChart>
    )


}