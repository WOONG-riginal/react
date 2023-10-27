import Movie from './components/Movie';
import { list } from './moviesList';

function App() {
  return (
    <div>
      <div className='app-container'>
        {
          list.results.map( (item) => {
            return (
              <Movie 
                title={item.title}
                poster_path={item.poster_path}
                release_date={item.release_date}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
