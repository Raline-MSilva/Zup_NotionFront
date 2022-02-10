import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header';
const Cadastro = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDaRequisicao = {
        nome: "",
        sobrenome: "",
        email: "",
        senha: "",
        perguntaDeSeguranca: "",
        respostaDeSeguranca: ""
    }

    const register = () => {

        const url = "http://localhost:8080/usuario";
        const data = {
            nome: dadosDaRequisicao.nome,
            sobrenome: dadosDaRequisicao.sobrenome,
            email: dadosDaRequisicao.email,
            senha: dadosDaRequisicao.senha,
            perguntaDeSeguranca: dadosDaRequisicao.perguntaDeSeguranca,
            respostaDeSeguranca: dadosDaRequisicao.respostaDeSeguranca
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
            <Header/>
            {
                mensagem !== ''? (
                    <Alert color={cor} className='text-center'>{mensagem}</Alert>
                ) : ''
            }
            <Form>
                <FormGroup id='form-nome'>
                    <Input type='name' id='nome' placeholder='Nome' onChange={e => dadosDaRequisicao.nome = e.target.value}/>
                    <Input type='name' id='sobrenome' placeholder='Sobrenome' onChange={e => dadosDaRequisicao.sobrenome = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='email' id='email' placeholder='Email' onChange={e => dadosDaRequisicao.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='password' placeholder='Senha' onChange={e => dadosDaRequisicao.senha = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <select name="perguntaDeSeguranca" id="perguntaDeSeguranca" onChange={e => dadosDaRequisicao.perguntaDeSeguranca = e.target.value}>
                        <option class="form-controls" disabled selected value>Pergunta de segurança</option>
                        <option class="form-controls" value="pergunta1">Qual é a sua comida favorita?</option>
                        <option class="form-controls" value="pergunta2">Qual era o seu apelido de infância?</option>
                        <option class="form-controls" value="pergunta3">Qual é o nome do meio do seu pai?</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Input type='text' id='resposta-segurança' placeholder='Responda aqui' 
                    onChange={e => dadosDaRequisicao.respostaDeSeguranca = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={register}>Cadastre-se</Button>
                <p className='linkLogin'>Já possui conta? <a href="http://localhost:3000/" className='link'>Conecte-se</a></p>
            </Form>
        </div>
    )
} 
export default Cadastro