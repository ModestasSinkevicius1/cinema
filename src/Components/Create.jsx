import { useContext } from 'react';
import { useState } from 'react';
import DataContext from '../Context/DataContext.jsx';
import genres from '../Data/genres.js'

function Create(){

    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('0');
    const [year, setYear] = useState('');
    
    const {setCreateData} = useContext(DataContext);

    const add = () => {
        setCreateData({
            title,
            genre: parseInt(genre),
            year,
        });
        setTitle('');
        setGenre('0');
        setYear('');
    }

    return(
        <div className="create card m-4">
            <h5 className="card-header">New Movie</h5>
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
                <button type="button" className="btn btn-outline-primary" onClick={add}>Add</button>
            </div>
        </div>
    )
}

export default Create;