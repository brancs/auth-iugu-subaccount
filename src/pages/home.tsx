import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { ChevronRight } from "react-bootstrap-icons";
import useFetchIugu from "../hooks/useFetchIugu";

export default function Home() {
  //const [localMainAccountId, setLocalMainAccountId] = useState<string | null>()
  const [localMainApiToken, setLocalMainApiToken] = useState<string | null>()
  const [finalResult, setFinalResult] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [canFetch, setCanFetch] = useState<boolean>(false)
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { 
    getAccount, 
    confirmAccount, 
    updateAccount 
  } = useFetchIugu()

  type FormData = {
    accountId: string;
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      accountId: '',
      cents: '',
      creditCardPercent: '',
      pixPercent: '',
      bankSlipCents: '',
    }
  })

  const watchAccountId = watch('accountId')

  async function onSubmit({ accountId }:FormData) {
    //TODO fetch IUGU APIs with accountId

    try {
      const { tokens } = await getAccount(accountId)

      if (!tokens)
        throw new Error('Não foi possível recuperar os dados da subconta')
        
      const { success: successConfirmSubaccount } = await confirmAccount(tokens)

      if (!successConfirmSubaccount)
        throw new Error('Não foi possível confirmar a subconta')

      const { success: successUpdateSubaccount } = await updateAccount(tokens)

      if (!successUpdateSubaccount)
        throw new Error('Não foi possível confirmar a subconta')

      console.log(tokens);
    } catch (error) {
      console.error(error)
    }

    /*const accountId = '0028D34B1A04474193AF5B9381C6DD2C'
    const liveToken = '6b48314cd1b0b49c5a4a026187029860'
    const userToken = '3a0954b21e960cd376b33f77f5d61caa'

    const result = {
      'account_id': accountId,
      'api_token': liveToken,
      'user_token': userToken,
    }*/

    //setFinalResult(JSON.stringify(result, null, 2))
  }

  useEffect(() => {
    setDisabled(true)

    if (watchAccountId && canFetch)
      setDisabled(false)

  }, [watchAccountId])

  useEffect(() => {
    //const getLocalMainAccountId = localStorage.getItem('mainAccountId')
    const getLocalMainApiToken = localStorage.getItem('mainApiToken')
    
    if (/*!getLocalMainAccountId || */!getLocalMainApiToken) {
      setCanFetch(false)
      handleShow()
      return
    }
    
    setCanFetch(true)
    //setLocalMainAccountId(getLocalMainAccountId)
    setLocalMainApiToken(getLocalMainApiToken)

  }, [])


  return (
    <>
      <div className="d-grid" style={{height: '100vh', placeContent: 'center'}}>
        <Card style={{ width: '100%', minWidth: '32rem' }}>
          <Card.Body>
            <Card.Title as={'h1'}>
              Configurar
            </Card.Title>
            <hr />
            <Card.Title as={'h4'}>
              Subconta
            </Card.Title>
            <Stack gap={3}>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Stack gap={3}>
                  <Form.Group>
                    <Form.Label>Account ID</Form.Label>
                    <Form.Control type='text' {...register("accountId")} placeholder='Insira o Account ID' />
                  </Form.Group>

                  <hr />
                  
                  <div>
                    <Card.Title as={'h4'}>
                      Taxas
                    </Card.Title>
                    <Stack gap={3}>
                      <Stack direction="horizontal" gap={3}>
                        <Form.Group className="w-100">
                          <Form.Label>
                            Centavos
                          </Form.Label>
                          <Form.Control type='text' {...register("cents")} placeholder='Valor em centavos' />
                          <Form.Text className="text-muted">
                            (Cents)
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="w-100">
                          <Form.Label>
                            Centavos por Boleto
                          </Form.Label>
                          <Form.Control type='text' {...register("bankSlipCents")} placeholder='Valor em centavos' />
                          <Form.Text className="text-muted">
                            (Bank Slip Cents)
                          </Form.Text>
                        </Form.Group>
                      </Stack>
                      <Stack direction="horizontal" gap={3}>
                        <Form.Group className="w-100">
                          <Form.Label>
                            Percentual Pix
                          </Form.Label>
                          <Form.Control type='text' {...register("pixPercent")} placeholder='Informe a porcentagem' />
                          <Form.Text className="text-muted">
                            (Pix Percent)
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="w-100">
                          <Form.Label>
                            Percentual Cartão de Crédito 
                          </Form.Label>
                          <Form.Control type='text' {...register("creditCardPercent")} placeholder='Informe a porcentagem' />
                          <Form.Text className="text-muted">
                            (Credit Card Percent)
                          </Form.Text>
                        </Form.Group>
                      </Stack>
                    </Stack>
                  </div>

                  <Button variant="primary" type='submit' style={{maxWidth: 'fit-content'}} disabled={disabled}>
                    Configurar
                  </Button>
                </Stack>
              </Form>
              <hr />
              <Card.Title as={'h4'}>
                Resultado:
              </Card.Title>
              <pre><code>{finalResult}</code></pre>
            </Stack>
          </Card.Body>
        </Card>
      </div>
      <Modal 
        show={show} 
        onHide={handleClose} 
        backdrop="static"
        keyboard={false}>
        <Modal.Header>
          <Modal.Title>Ops! Configuração principal não encontrada 🫥</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Por favor configure algumas informações em "Configurações" para iniciar 😉
        </Modal.Body>
        <Modal.Footer>
          <Link to={'/settings'}>
            <Button variant="primary" className="d-flex align-items-center">
              Ir para Configurações <ChevronRight className="ms-1"/>
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>
    </>
  )
}