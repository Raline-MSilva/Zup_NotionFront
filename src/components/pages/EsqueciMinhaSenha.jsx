import react, {useState} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header';
const EsqueciMinhaSenha = (props) => {
    const [mensagem, setMensagem] = useState("")
    const [cor, setCor] = useState("")
    const dadosDaRequisicao = {
        email: "",
        perguntaDeSeguranca: "",
        respostaDeSeguranca: "",
        senha: ""
    }

    const register = () => {

        const url = "http://localhost:8080/usuario/esqueciSenha";
        const data = {
            email: dadosDaRequisicao.email,
            perguntaDeSeguranca: dadosDaRequisicao.perguntaDeSeguranca,
            respostaDeSeguranca: dadosDaRequisicao.respostaDeSeguranca,
            senha: dadosDaRequisicao.senha
        };
        const requestInfo = {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        console.log(dadosDaRequisicao.respostaDeSeguranca)
        fetch(url, requestInfo)
        .then(response => {
            console.log(response)
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
            <Header/>
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
                   <select name="perguntaDeSeguranca" id="perguntaDeSeguranca" onChange={e => dadosDaRequisicao.perguntaDeSeguranca = e.target.value}>
                        <option class="form-controls" disabled selected value>Pergunta de segurança</option>
                        <option class="form-controls" value="pergunta1">Qual é a sua comida favorita?</option>
                        <option class="form-controls" value="pergunta2">Qual era o seu apelido de infância?</option>
                        <option class="form-controls" value="pergunta3">Qual é o nome do meio do seu pai?</option>
                    </select>
                </FormGroup>
                <FormGroup>
                    <Input type='text' id='resposta-segurança' placeholder='Responda aqui' onChange={e => dadosDaRequisicao.respostaDeSeguranca = e.target.value}/>
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
export default EsqueciMinhaSenha