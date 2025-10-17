import React from "react";
import './style.css';
export default function ConfirmModal({onConfirm,onCancel,confirmMessage}) {
  { 
    return(
      <div id="confirmModal" className="modal">
          <div className="modal-content">
                   
            <p id="modalText">

              {confirmMessage}
            </p>
            <div className="modal-buttons">
              <button className="confirm" onClick={onConfirm}>
                بله
              </button>
              <button className="cancel" onClick={onCancel}>
                لغو
              </button>
            </div>
          </div>
        </div>
    )
    
  }
}
