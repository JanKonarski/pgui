import Container from 'react-bootstrap/Container';

import Widget from './Widget';
import {StyledDailyTips} from "./styled_widget/StyledDailyTips";
import {useEffect, useState} from "react";

export default function DailyTips() {
    const errorMessage = "Something went wrong - could not load daily tips.";
    const [error, setError] = useState(null);
    const [tips,setTips] = useState(null)
    const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
        setError(null);
        fetch(
            'http://127.0.0.1:8000/tips/eng'
        ).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(errorMessage)
            }
        }).then((data) => {

            setTips(getTips(data))
            console.log(tips)
        }).catch((error) => {
            setError(errorMessage);
            setIsLoading(false);
        });
    }, []);

    const getTips=(data)=> {
        let tips = [];
        for (const key in data) {
            const tip = {
                id: key,
                ...data[key]
            };
            tips.push(tip);
        }

        return tips;
    }


  return(
    <StyledDailyTips className='col-md-4'>
      <Container className='row justify-content-center fs-3 fw-bold m-0 title' fluid>
        Daily tips

      </Container>
      <Container className='daily-tips'>
          {/*{tips.map((t) =>(*/}
          {/*<Container className='pt-2' fluid>*/}
          {/*    {t}*/}
          {/*</Container>*/}
          {/*    ))}*/}


      </Container>

    </StyledDailyTips>
  );
}