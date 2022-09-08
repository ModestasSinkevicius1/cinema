import { useContext } from "react";
import DataContext from "../Context/DataContext";

function Messages() {
  const { msgs, setMsgs } = useContext(DataContext);

  if (msgs.length === 0) {
    return null;
  }

  const closeMsg = id =>{
    setMsgs(m => m.filter(mes => mes.id !== id));
  }

  return (
    <div className="msg-bin">
      {
        msgs.map((m) => (
            <div className="toast show" role="alert">
                <div className="toast-header">
                    <strong className="me-auto">Movie news</strong>
                    <button type="button" className="btn-close" onClick={() => closeMsg(m.id)}></button>
                </div>
                <div className="toast-body">
                    {m.text}
                </div>
            </div>
      ))}
    </div>
  );
}

export default Messages;
