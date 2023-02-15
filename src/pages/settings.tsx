import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

export default function Settings() {
  type FormData = {
    //mainAccountId: string;
    mainApiToken: string;
  };

  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    defaultValues: {
      mainAccountId: '',
      mainApiToken: '',
    }
  })

  //const watchMainAccountId = watch('mainAccountId')
  const watchMainApiToken = watch('mainApiToken')

  const [disabled, setDisabled] = useState<boolean>(true)
  
  function onSubmit({/*mainAccountId, */mainApiToken}:FormData) {
    //localStorage.setItem('mainAccountId', mainAccountId)
    localStorage.setItem('mainApiToken', mainApiToken)
  }

  useEffect(() => {
    setDisabled(true)

    if (/*watchMainAccountId &&*/ watchMainApiToken)
      setDisabled(false)

  }, [/*watchMainAccountId,*/ watchMainApiToken])

  useEffect(() => {
    const getLocalMainAccountId = localStorage.getItem('mainAccountId')
    const getLocalMainApiToken = localStorage.getItem('mainApiToken')
    
    reset({
      //mainAccountId: getLocalMainAccountId || '',
      mainApiToken: getLocalMainApiToken || ''
    })

  }, [])

  return (
    <div className="d-grid" style={{height: '100vh', placeContent: 'center'}}>
      <Card style={{ width: '100%', minWidth: '32rem' }}>
        <Card.Body>
          <Card.Title as={'h1'}>
            Configurações
          </Card.Title>
          <hr />
          <Card.Title as={'h4'}>
            Conta principal
          </Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack gap={3}>
              {/* <Form.Group>
                <Form.Label>Account ID</Form.Label>
                <Form.Control type='text' {...register("mainAccountId")} placeholder='Insira o Account ID' disabled />
              </Form.Group> */}
              <Form.Group>
                <Form.Label>API Token</Form.Label>
                <Form.Control type='text' {...register("mainApiToken")} placeholder='Insira o API token' />
              </Form.Group>
              <Button variant="primary" type='submit' style={{maxWidth: 'fit-content'}} disabled={disabled}>
                Salvar
              </Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}