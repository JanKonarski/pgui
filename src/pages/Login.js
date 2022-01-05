import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

export default function Login(props) {
  const t = props.t;
  const [state, setState] = useState(false);

  const handleSubmit = (event) => {
    setState(event.target[1].value === '' ? true : false);
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
