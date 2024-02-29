import { createPortal } from "react-dom";
import { forwardRef } from "react";

 const Modal = forwardRef(function Modal({children},ref){
    return createPortal(
        <dialog ref={ref}>
            {children}
            <form method='dialog'>
                <button>Okay</button>
               </form>
        </dialog>, document.getElementById('modal-root')
    );
}) ;


export default Modal;