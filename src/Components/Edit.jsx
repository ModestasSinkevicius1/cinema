import { useContext } from "react";
import DataContext from "../Context/DataContext";
import { useState } from 'react';
import genres from '../Data/genres.js'
import { useEffect } from "react";


function Edit() {

    const {modalData, setModalData, setEditData} = useContext(DataContext);


    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('0');
    const [year, setYear] = useState('');

    useEffect(()=>{
        if(null === modalData){
            return;
        }

        setTitle(modalData.title);
        setGenre(modalData.genre);
        setYear(modalData.year);
    },[modalData])

    const save = () =>{
        setEditData({
            title,
            genre: parseInt(genre),
            year,
            id: modalData.id,
        })
        setModalData(null);
    }

    if(null === modalData){
        return;
    }
  return (
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Edit movie</h5>
            <button type="button" class="btn-close" onClick={() => setModalData(null)}></button>
          </div>
          <div class="modal-body">
            
            
            <div className="create card m-4">
                <div className="card-body">
                    <div className="mb-3">
                        <label className="form-label">Movie Title</label>
                        <input type="text" className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Genre</label>
                        <select className="form-select" value={genre} onChange={(e)=> setGenre(e.target.value)}>
                            <option value={0} disabled>Choose from list</option>
                            {
                                genres.map(g => <option key={g.id} value={g.id}>{g.type}</option>)
                            }
                        </select>
                        
                    </div>
                    <div className="mb-3">
                            <label className="form-label">Movie Year</label>
                            <input type="text" className="form-control" value={year} onChange={(e)=> setYear(e.target.value)}/>
                    </div>
                </div>
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={() => setModalData(null)}>Close</button>
            <button type="button" class="btn btn-primary" onClick={save}>
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
