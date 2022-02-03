import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header';
const Cadastro = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDaRequisicao = {
        email: "",
        senha: ""
    }

    const register = () => {

        const url = "http://localhost:8080/usuario/esqueciSenha";
        const data = {
            email: dadosDaRequisicao.email,
            senha: dadosDaRequisicao.senha,
        };
        const requestInfo = {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };

        fetch(url, requestInfo)
        .then(response => {
            if (!response.ok) {
                throw new Error("Dados inválidos")
            }
            setMensagem('A alteração foi feita com sucesso!')
            setCor('success')
        })
        .catch( e => {
            console.log(e)
            setMensagem('Dados inválidos')
            setCor('danger')
        });
    }

    return(
        <div className='Content'>
            <Header title='ZupNotion'/>
            {
                mensagem !== ''? (
                    <Alert color={cor} className='text-center'>{mensagem}</Alert>
                ) : ''
            }
            <Form>
                <FormGroup>
                    <Input type='text' id='email' placeholder='Email' onChange={e => dadosDaRequisicao.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='password' placeholder='Nova Senha' onChange={e => dadosDaRequisicao.senha = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={register}>Alterar senha</Button>
                <a className='link' id='linkVoltarLogin' href="http://localhost:3000/">Voltar ao login</a>
            </Form>
        </div>
    )
} 
export default Cadastro