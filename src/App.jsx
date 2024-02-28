import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import {useState} from 'react';

function App() {
const [inputsShow,setInputsShow] = useState(false);


function showInputs(){
  setInputsShow(true);
  
}

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={()=>showInputs()}/>
      {inputsShow ? <NewProject /> : <NoProjectSelected onStartAddProject={()=>showInputs()}/>}
      
      

    </main>
  );
}

export default App;
