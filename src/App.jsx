import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create.jsx';
import List from './Components/List';
import DataContext from './Context/DataContext';
import { create, read } from './Functions/localStorage';

const key = 'movies';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [movie, setMovie] = useState(null);
  const [createData, setCreateData] = useState(null);

  // READ
  useEffect(()=>{
    setMovie(read(key));
  }, [lastUpdate]);

  // CREATE
  useEffect(()=>{
    if(null === createData){
      return;
    }
    create(key, createData);
    setLastUpdate(Date.now())
  }, [createData]);

  return (
    <DataContext.Provider value={{
      setCreateData,
      movie,
    }}>
      <div class="container">
        <div class="row">
          <div class="col-5">
            <Create />
          </div>
          <div class="col-7">
            <List />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
