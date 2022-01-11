import {Dropdown} from "react-bootstrap";

export default function ChartMenu(props) {

    return (
        <div>
            <div>
                <div>Select filter</div>
                <Dropdown onSelect={props.onFilterChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {props.filter}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableFilters.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.filter}>
                                {k}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

            </div>
            <div>
                <div>Select chart type you want to display</div>
                <Dropdown onSelect={props.onChartTypeChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {props.chartType}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableChartTypes.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.chartType}>
                                {k}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div>
                <div>Select time period</div>
                <Dropdown onSelect={props.onTimePeriodChangeHandler}>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        {props.timePeriod}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {props.availableTimePeriods.map((k) => (
                            <Dropdown.Item eventKey={k} key={k} active={k === props.timePeriod}>
                                {k}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>

            </div>


        </div>
    );
}