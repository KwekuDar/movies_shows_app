import './App.css';
import SearchBar from './components/SearchBar';
import ListOfMedia from './components/ListOfMedia';

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className="App">
      <SearchBar search={searchTerm} setSearch={setSearchTerm}/>
      <ListOfMedia search={searchTerm}/>
    </div>
  );
}

export default App;
