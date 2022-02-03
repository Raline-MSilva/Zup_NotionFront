import react, {Component} from 'react';
import Header from '../Header'

export default class Tarefas extends Component{
    render(){
        return(
            <div className='container-tarefas'>
                <Header title='Zupnotion'/>
                <h2>Você foi logado com sucesso!</h2>
                <a className='linkSair' href='http://localhost:3000/'>Sair</a>
            </div>
        )
    }
}