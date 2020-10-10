import React, { Fragment } from 'react';
import './Modal.css';

const modal = (props) => {
    return (
        <Fragment>
            <div className={props.stackIndex > 0 ? "modal-container" : "modal-wrapper"}
                style={{
                    transform: props.show ? 'translate(-50%, -50%);' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0',
                    zIndex: props.stackIndex > 0 ? props.stackIndex : 0,
                    width: props.stackIndex > 0 ? `${props.width / props.stackIndex}vw` : `${props.width}%`,
                    height: props.stackIndex > 0 ? `${props.height / props.stackIndex}vh` : `${props.height}%`
                }}>
                <div className="modal-header">
                    <h3>Modal Header</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                    <p>
                        {props.children}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn-cancel" onClick={props.close}>CLOSE</button>
                    <button className="btn-continue" onClick={props.open}>OPEN MODAL</button>
                </div>
            </div>
        </Fragment>
    )
}

export default modal;
