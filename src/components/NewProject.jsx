import {useRef, useState} from 'react';
import Input from "./Input";
import Modal from './Modal';

export default function NewProject({onAdd,onCancel}){
    

   

    const cancelStyle= "text-stone-800 hover:text-stone-950";
    const saveStle = "px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950";

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
   

    function onHandleSave(){//izvrsava se kada sacuvamo projekat
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        //validacija ako je bar jedno polje prazno prikazuje se modal sa greskom
        if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
             modal.current.showModal();
             return;//ovo return sluzi da se dalje kod ne izvrsava ako je uslov ispunjen tj ako neko polje ostane prazno dalji kod se ne izvrsava
        }

        
        onAdd({Title:enteredTitle,//prop fukncija kojoj kao parametar dodeljujemo objekat vrednosti iz inputa koja ce se pozvati u App komponenti
            Description:enteredDescription,
            Due_Date:enteredDueDate});
    }
    
    
    
    return(
       
         <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
            <li><button className={cancelStyle} onClick={()=>onCancel()}>Cancel</button></li>
            <li><button className={saveStle} onClick={()=>onHandleSave()}>Save</button></li>
        </menu>
        <div>
           <Input ref={title} label={"Title"}/>
           <Input ref={description} label={"Description"} textarea={true}/>
           <Input type="date" ref={dueDate} label={"Due Date"}/>
        </div>
        <div>
            <Modal ref={modal}>
               <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
               <p className="text-stone-400 mb-4">Ooops...looks like you forgot to enter a value</p>
               <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every filed!</p>
               
            </Modal>
        </div>
        
        
    </div>
        
        
    );
}