import logo from './logo.svg';
import './App.css';
import Developer from './components/developers';

function App() {
  const dados = [{name: "Gabriel",age:19,country:"Brasil"},
                {name: "Felipe", age:28,country:"Brasil"},
                {name: "Mariana",age: 24, country:"Itália"}]
  return (
    <div className="App">
      <header className="App-header">         
      {dados.map((e)=> <Developer name={e.name} age={e.age} country={e.country}/>)}
      </header>
    </div>
  );
}

export default App;
