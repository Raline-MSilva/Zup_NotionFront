import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header';
const Cadastro = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDaRequisicao = {
        nome: "",
        email: "",
        senha: ""
    }

    const register = () => {

        const url = "http://localhost:8080/usuario";
        const data = {
            nome: dadosDaRequisicao.nome,
            email: dadosDaRequisicao.email,
            senha: dadosDaRequisicao.senha,
        };
        const requestInfo = {
            method: 'POST',
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
            setMensagem('O cadastro foi realizado com sucesso!')
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
                    <Input type='name' id='nome' placeholder='Nome' onChange={e => dadosDaRequisicao.nome = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='text' id='email' placeholder='Email' onChange={e => dadosDaRequisicao.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='password' placeholder='Senha' onChange={e => dadosDaRequisicao.senha = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={register}>Cadastre-se</Button>
                <p className='linkLogin'>Já possui conta? <a href="http://localhost:3000/" className='link'>Conecte-se</a></p>
            </Form>
        </div>
    )
} 
export default Cadastro