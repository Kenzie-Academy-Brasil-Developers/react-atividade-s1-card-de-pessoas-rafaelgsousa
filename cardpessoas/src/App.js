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
      {dados.map((e)=> <Developer name={e.name} age={e.age} country={e.country}/>)}
      </header>
    </div>
  );
}

export default App;
