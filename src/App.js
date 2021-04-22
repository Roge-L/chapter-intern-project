import './stylesheets/App.css';
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://assets-global.website-files.com/5f765163c820ff0ee7f61d4d/600b21338ab9dd63ef26545a_chapter_logo_MVP.svg" className="App-logo" alt="logo" />
        <p>
          Search for Medicare Advantage Plan with a bid ID:
        </p>
      </header>
      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
