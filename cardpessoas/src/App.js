import logo from './logo.svg';
import './App.css';
import Developer from './components/developers';

function App() {
  const dados = [{name: "Rafael",age:31,country:"Brasil"},
                {name: "Lara", age:28,country:"Brasil"},
                {name: "Luara",age: 2, country:"Japão"}]
  return (
    <div className="App">
      <header className="App-header">         
        <Developer name={dados[0].name} age={dados[0].age} country={dados[0].country}/>
        <Developer name={dados[1].name} age={dados[1].age} country={dados[1].country}/>
        <Developer name={dados[2].name} age={dados[2].age} country={dados[2].country}/>
      </header>
    </div>
  );
}

export default App;
