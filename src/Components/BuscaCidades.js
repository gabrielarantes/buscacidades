import React from 'react';
import axios from 'axios';

import sweetalert from 'sweetalert';

export default class PersonList extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get("http://wsteste.devedp.com.br/Master/CidadeServico.svc/rest/BuscaTodasCidades")
            .then(res => {
                //console.log(res);
                this.setState({ persons: res.data });
            });
    }

    pontos(cidade, estado) {
        //buscando os pontos da cidade selecionada
        //let data = {"Nome" : "cidade", "Estado" : "estado"};
        //console.log(data);

        axios.post("http://wsteste.devedp.com.br/Master/CidadeServico.svc/rest/BuscaPontos", JSON.stringify({"Nome" : cidade, "Estado" : estado}) )
        .then(res => {
            //console.log(res);
            sweetalert('Ok','A pontuação da cidade '+cidade+' é '+ res.data,'success');
        });
        
        //sweetalert('Ok','A póntuação da cidade '+cidade+' é '+ res.data,'success');
    }

    render() {
        return (

            <table id="dados">
                <thead>
                    <tr>
                        <td>Estado</td>
                        <td>Cidade</td>
                        <td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                    {this.state.persons.map(person =>
                        <tr className="registros" data-cidade={person.Nome} data-estado={person.Estado}>
                            <td>{person.Estado}</td>
                            <td>{person.Nome}</td>
                            <td> <button onClick={() => this.pontos(person.Nome, person.Estado)}>Ver Pontução</button> </td>
                        </tr>
                    )}
                </tbody>
            </table>

        )
    }

}

