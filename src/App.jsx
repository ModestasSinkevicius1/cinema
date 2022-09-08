import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create.jsx';
import Edit from './Components/Edit';
import List from './Components/List';
import Messages from './Components/Messages';
import DataContext from './Context/DataContext';
import { create, erase, read, update } from './Functions/localStorage';
import { v4 as uuidv4 } from 'uuid';

const key = 'movies';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [movie, setMovie] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [msgs, setMsgs] = useState([]);

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
    setLastUpdate(Date.now());
    makeMsg('Check this out!');
  }, [createData]);

  //DELETE
  useEffect(()=>{
    if(deleteData === null){
      return;
    }
    
    erase(key, deleteData.id);
    setLastUpdate(Date.now());
    makeMsg('Gone!');
  }, [deleteData]);

  //EDIT
  useEffect(()=>{
    if(editData === null){
      return;
    }
    
    update(key, editData, editData.id);
    
    setLastUpdate(Date.now());
  }, [editData]);

  const makeMsg = text => {
    const msg = {
      id: uuidv4(),
      text
    }
    setMsgs(m => [...m, msg]);
    setTimeout(() => {
      setMsgs(m => m.filter(mes => mes.id !== msg.id));
    }, 6000)
    
  }

  return (
    <DataContext.Provider value={{
      setCreateData,
      movie,
      setDeleteData,
      setModalData,
      modalData,
      setEditData,
      setMsgs,
      msgs,
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
      <Edit />
      <Messages />
    </DataContext.Provider>
  );
}

export default App;
