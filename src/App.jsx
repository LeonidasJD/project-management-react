import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import {useState} from 'react';

function App() {
const [inputsShow,setInputsShow] = useState(false);
const [projectStates,setProjectStates] = useState([
  {Title:'',
  Description:'',
  Due_Date:'',
  Id:''},
]);


function showInputs(){
  setInputsShow(true);
}

function onHandleAddProject(projecData){ //automatski kada sacuvamo projekat izvrsava se ova funckija koja prihvata objekat podataka iz inputa i kreira novo stanje koje cuva objekat podataka projekta
  const newProject = {
    ...projecData,
    Id:Math.random()
  };

  // setInputsShow(false);//gasimo inpute nakon sto sacuvamo nov projekat
  setProjectStates(prevState =>[...prevState,newProject]);
  
}

console.log(projectStates);

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar myProjects={projectStates} onStartAddProject={()=>showInputs()}/>
      {inputsShow ? <NewProject onAdd={onHandleAddProject}/> : <NoProjectSelected onStartAddProject={()=>showInputs()}/>}
      
      

    </main>
  );
}

export default App;
