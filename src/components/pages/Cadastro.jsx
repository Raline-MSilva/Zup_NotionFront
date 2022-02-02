import react, {Component} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header';
export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    }   

    signIn = () => {
        const url = "http://localhost:8080/cadastro";
        const data = {
            nome: this.nome,
            email: this.email,
            senha: this.senha,
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
            console.log(response)
            this.setState({message: 'O cadastro foi realizado com sucesso!'})
        }).catch( e => {
            console.log(e)
            console.log('erro no cadastro')
        });
    }

    render() {
        return(
            <div className='Content'>
                <Header title='ZupNotion'/>
                {
                    this.state.message !== ''? (
                        <Alert color='success' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Input type='name' id='nome' placeholder='Nome' onChange={e => this.nome = e.target.value}/>
                    </FormGroup>
                    <FormGroup>
                       <Input type='text' id='email' placeholder='Email' onChange={e => this.email = e.target.value}/>
                   </FormGroup>
                   <FormGroup>
                       <Input type='password' id='password' placeholder='Senha' onChange={e => this.senha = e.target.value}/>
                   </FormGroup>
                    <Button color='primary' onClick={this.signIn}>Cadastre-se</Button>
                </Form>
            </div>
        )
    }
}