import react, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import Header from '../Header';

export default class Login extends Component {

    render() {
        return(
            <div>
                <Header title='ZupNotion'/>
                <Form>
                    <FormGroup>
                        <Input type='text' id='email' placeholder='Email'/>
                    </FormGroup>
                    <FormGroup>
                        <Input type='password' id='password' placeholder='Senha'/>
                    </FormGroup>
                    <Button color='primary'>Entrar</Button>
                    <a href="https://www.google.com/" className='link' id='linkSenha'>Esqueceu a senha?</a>
                    <p className='linkCadastro'>Não tem conta? <a href="https://www.google.com/" className='link'>Cadastre-se</a></p>
                </Form>
            </div>
        )
    }
}