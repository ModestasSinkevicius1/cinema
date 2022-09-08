import { useContext } from "react";
import DataContext from "../Context/DataContext";

function Delete() {
    
    const { setModalDelData, modalDelData, setDeleteData} = useContext(DataContext);

    const yes = () => {
      setDeleteData(modalDelData);
      setModalDelData(null);
    }

    if(null === modalDelData){
        return null;
    }
    
  return (
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Are you sure want to delete?</h5>
            <button type="button" class="btn-close" onClick={() => setModalDelData(null)}></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" onClick={() => setModalDelData(null)}>No</button>
            <button type="button" class="btn btn-primary" onClick={yes}>
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete;
