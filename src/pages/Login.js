import {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';

export default function Login(props) {
  const errorMessage = "Something went wrong - could not load orders.";
  const [users, setUsers] = useState({});
  const [user, setUser] = useState({id: null, name: null});
  const t = props.t;
  const [state, setState] = useState(false);

  useEffect(() => {
    fetch(
      'http://127.0.0.1:8000/user'
    ).then((response) => {
      if (response.ok)
        return response.json();
      else
        throw new Error(errorMessage);
    }).then((data) => {
      const usr = data;
      setUsers(usr);
    }).catch((error) => {

    })
  }, []);

  const handleSubmit = (event) => {
    const email = event.target[0].value;
    const password = event.target[1].value;

    users.forEach((element, index, array) => {
      if (email === element['username'] && password === element['password']) {
        window.localStorage.setItem('user', JSON.stringify({id: element['id'], name: element['name']}));
        let usersData = new Array();
        users.forEach((element, index, array) => {
          usersData.push({id: element['id'], name: element['name']});
        });
        window.localStorage.setItem('users', JSON.stringify(usersData));
        window.location.href='/';
      }
    })

    setState(user === {});
    event.preventDefault();
  }

  return (
    <div className='d-flex justify-content-md-center align-items-center h-100'>
      <Container className='col-md-4 col-lg-3 col-xl-2'>
        <Alert
          className='border-3 border-danger text-danger'
          variant='danger'
          show={state}
        >
          {t('loginAlert')}
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>{t('loginEmailLabel')}</Form.Label>
            <Form.Control type='email' placeholder={t('loginEmailPlaceholder')} required />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formPassword'>
            <Form.Label>{t('loginPasswordLabel')}</Form.Label>
            <Form.Control type='password' placeholder={t('loginPasswordPlaceholder')} /*required*/ />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formRemember'>
            <Form.Check type='checkbox' label={t('loginRememberLabel')} />
          </Form.Group>
          <ButtonGroup className='d-flex'>
            <Button type='submit'>{t('loginButtonLabel')}</Button>
          </ButtonGroup>
        </Form>
      </Container>
    </div>
  );
}
