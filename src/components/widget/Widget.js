import Container from 'react-bootstrap/Container';
import {StyledCard} from "./styled_widget/StyledCard";

export default function Widget(props) {
  return(
    <Container className={'p-2 ' + props.className} fluid>
      <StyledCard className=' p-3 h-100' fluid>
        {props.children}
      </StyledCard>
    </Container>
  );
}