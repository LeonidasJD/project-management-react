import { createPortal } from "react-dom";
import { forwardRef } from "react";
import {styled} from 'styled-components'

export const ModalButton = styled.button`
color:white;
background-color:gray;
padding:10px 20px 10px 20px;
border-radius:6px;
`;


 const Modal = forwardRef(function Modal({children},ref){
    return createPortal(
        <dialog ref={ref} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form method='dialog' className="mt-4 text-right ">
                <ModalButton>Okay</ModalButton>
               </form>
        </dialog>, document.getElementById('modal-root')
    );
}) ;


export default Modal;