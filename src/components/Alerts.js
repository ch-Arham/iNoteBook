import React from "react";
import { useContext } from "react";
import NoteContext from "../context/notes/noteContext";

const Alerts = () => {
  const { alert } = useContext(NoteContext);

  const capitalize = (word)=>{
    if(word === 'danger'){
      word='error';
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
  return (
    <div style={{height: '50px'}}>
    {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
       <strong>{capitalize(alert.type)}</strong>: {alert.msg} 
    </div>}
    </div>
  );
};

export default Alerts;


