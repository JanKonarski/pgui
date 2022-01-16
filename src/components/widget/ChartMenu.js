import {Dropdown} from "react-bootstrap";
import {useTranslation} from "react-i18next";

export default function ChartMenu(props) {
    const t = useTranslation()[0]


    const displayChartType = (x) => {
        if (x === 'Line Chart') {
            return t('chart.line')
        } else {
            return t('chart.bar')
        }
    }

    const displayFilter = (x) => {
        if (x === 'Sold items') {
            return t('chart.sold')
        } else {
            return t('chart.turnover')
        }
    }

    const displayTimePeriod = (x) => {
        if (x === 'Today') {
            return t('chart.today')
        }
        if (x === 'This week') {
            return t('chart.week')
        }
        if (x === 'This year') {
            return t('chart.year')
        }
    }

    return (
        <div>
            <div>
                <div>{t('chart.filter')}</div>
                <Dropdown onSelect={props.onFilterChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {displayFilter(props.filter)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableFilters.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.filter}>
                                {displayFilter(k)}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

            </div>
            <div>
                <div>{t('chart.chartMsg')}</div>
                <Dropdown onSelect={props.onChartTypeChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {displayChartType(props.chartType)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableChartTypes.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.chartType}>
                                {displayChartType(k)}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <div>{t('chart.timePeriodMsg')}</div>
                <Dropdown onSelect={props.onTimePeriodChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {displayTimePeriod(props.timePeriod)}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableTimePeriods.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.timePeriod}>
                                {displayTimePeriod(k)}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

            </div>


        </div>
    );
}