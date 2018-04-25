import React from 'react';

export default class Campos extends React.Component {

    buscar(){
        
        

    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <label>Cidade: </label>
                        <input type="text" />
                    </div>
                    <div className="col-md-4">
                        <label>Estado: </label>
                        <input type="text" />
                    </div>
                    <div className="col-md-4">
                        <button onClick={() => this.buscar()} > Buscar </button>
                    </div>
                </div>
                <div style={{ clear: "both" }}></div>
            </div>
        )
    }

}