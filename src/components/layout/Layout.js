import styled from 'styled-components';
import NavBar from './NavBar'
import Footer from './Footer'

const Main = styled.main`
  padding-top: 56px;
  padding-bottom: 40px;
`;

export default function Layout(props) {
  return (
    <div className='vh-100'>
      <NavBar t={props.t} set_t={props.set_t} toggleTheme={props.toggleTheme} theme={props.theme}/>
      <Main className='min-vh-100'>{props.children}</Main>
      <Footer t={props.t} />
    </div>
  );
}
