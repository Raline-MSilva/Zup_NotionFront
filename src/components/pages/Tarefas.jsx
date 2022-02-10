import { useState, useEffect } from 'react';
import Header from '../Header'
import * as Icon from 'react-bootstrap-icons';
import {Button} from 'reactstrap';

const Tarefas = () => {

    const [tarefas, setTarefas] = useState([""])
    const [count, setCount] = useState(0)

    useEffect(() => {
        obterListaDeTarefas()
    }, [count])

    const obterListaDeTarefas = async () => {
    
        const url = `http://localhost:8080/tarefas?page=${count}`;

        const requestInfo = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            })
        };

        const response = await fetch(url, requestInfo)
        const reponseJson = await response.json()
        setTarefas(reponseJson)
    }

    function proximaPagina() {
//        if(count < ){
            let page = count + 1
            setCount(page)
//        }
    }

    function paginaAnterior() {
        if(count > 0) {
            let page = count - 1
            setCount(page)
        }
    }

    const logout = () => {
        localStorage.removeItem('token')
    }

    return (
        <div className='container-tarefas'>
            <div className='content-tarefas'>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Descrição</th>
                            <th scope="col">Prioridade</th>
                            <th scope="col">Estimativa em horas</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tarefas?.content?.map(tarefa => (
                            <tr key={tarefa.id}>
                                <th scope="row">{tarefa.id}</th>
                                <th scope="row">{tarefa.titulo}</th>
                                <th scope="row">{tarefa.descricao}</th>
                                <th scope="row">{tarefa.prioridade}</th>
                                <th scope="row">{tarefa.estimativaEmHoras}</th>
                                <th scope="row" id='status'>{tarefa.status}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='botoesPage'>
                    <Button className='botaoPage' color='light' onClick={paginaAnterior}><Icon.ChevronLeft/></Button>
                    <Button className='botaoPage' color='light' onClick={proximaPagina}><Icon.ChevronRight/></Button>
                </div>
                <a id='sair' href='http://localhost:3000' onClick={logout}>Sair</a>
            </div>
        </div>
    )
}
export default Tarefas