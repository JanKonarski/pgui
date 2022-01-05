import Container from 'react-bootstrap/Container';

export default function Widget(props) {
  return(
    <Container className={'p-2 ' + props.className} fluid>
      <Container className='border border-4 rounded-3 border-primary p-3 h-100' fluid>
        {props.children}
      </Container>
    </Container>
  );
}