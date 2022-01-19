import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledDailyTips} from "./styled_widget/StyledDailyTips";
import {useEffect, useState} from "react";
import i18n from "../../translations/i18n";

export default function DailyTips(props) {
    const errorMessage = "Something went wrong - could not load daily tips.";
    const [error, setError] = useState(null);
    const [tips,setTips] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    let displayTips = null



        useEffect(()=> {
        setError(null);
        fetch(
            'http://127.0.0.1:8000/tips/'+props.language+"/0"
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(errorMessage)
            }
        }).then((data) => {
            console.log(data)
            setTips(getTips(data))
        }).catch((error) => {
            setError(errorMessage);
            setIsLoading(false);
        });
    }, [props.language]);

    const getTips=(data)=> {
        let tips = [];
        for (const key in data) {
            console.log(data[key])
            const tip =data[key].tip

            tips.push(tip);
        }
        console.log(tips)
        return tips;
    }

    if(tips!==null){
       displayTips= (
            tips.map((t) =>(
        <Container className='pt-2 text-center' fluid>
          {t}
        </Container>
            ))
        )
    }

  return(
    <StyledDailyTips className='col-lg-6 col-xxl-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
          {props.t('dailyTipsWidget')}

      </Container>
      <Container className='daily-tips'>
          {displayTips}
      </Container>

    </StyledDailyTips>
  );
}