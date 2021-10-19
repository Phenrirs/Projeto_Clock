import './App.css';
import React from 'react';

function DataFormatada(props) {
  return <h2> Horário atual : {props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.thick()
    }, 1000)
    console.log('Eu sou o relogio ' + this.timeID);
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  thick(){
    this.setState({
      date: new Date()
    })
  }

  ParaRelogio(){
    console.log(`Relógio ${this.timeID} pausado`);
    clearInterval(this.timeID);
  }

  RetomaRelogio(){
    console.log(`Relógio retomado!`);
    this.timeID = setInterval(() => {
      this.thick()
    }, 1000);
    console.log(`Agora eu sou o relógio y` + this.timeID)
  }

  render()
  {
    return(
      <div>
        <h1>Relogio  {this.timeID}</h1>
        <DataFormatada date={this.state.date} />
        <button className="botaoPausa" onClick={() => { this.ParaRelogio() }}>Pausar</button>
        <button className="botaoRetoma" onClick={() => { this.RetomaRelogio() }}>Retomar</button>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Clock />
        <Clock />
      </header>
    </div>
  );
}

export default App;
