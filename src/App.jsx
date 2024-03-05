import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import {useState} from 'react';

function App() {
const [inputsShow,setInputsShow] = useState(false);
const [projectStates,setProjectStates] = useState([
  {Title:'',
  Description:'',
  Due_Date:'',
  Id:''},
]);
const [selectProject,setSelectProject] = useState(false);
const [choosenProject,setChoosenProject] = useState({
  projectTitle:'',
  projectDesc:'',
  projectDate:'',
  projectId:''
});



function showInputs(){//funckija koja prikazuje input polja za kreiranje projekta
  if(inputsShow){
    setInputsShow(false);
    setSelectProject(false);
  }else{
    setInputsShow(true);
  }
 
}

function onHandleAddProject(projecData){ //automatski kada sacuvamo projekat izvrsava se ova funckija koja prihvata objekat podataka iz inputa i kreira novo stanje koje cuva objekat podataka projekta
  const newProject = {
    ...projecData,
    Id:Math.random()
  };

  // setInputsShow(false);//gasimo inpute nakon sto sacuvamo nov projekat
  setProjectStates(prevState =>[...prevState,newProject]);
  setInputsShow(false);
  setSelectProject(false);

  
}

function onSelectProject(projectId){// kada kliknemo na neki od projekata izvrsava se funkcija koja prihvata id projekta
  const selectedProject = projectStates.find(project => project.Id === projectId);// u stanju koje cuva niz projekata pretrazujemo projekat sa onim id projekta koji kliknemo
 

  setChoosenProject({//kao stanje koje cuva pojedinacni projekat postavljamo objekat projekta koji smo izabrali
    projectTitle:selectedProject.Title,
    projectDesc:selectedProject.Description,
    projectDate:selectedProject.Due_Date,
    projectId:selectedProject.Id
  });
setSelectProject(true);//stanje koje odredjuje da li ce se pojaviti komponenta SelectedProject ili
setInputsShow(true);




}

function onHandleDeleteProject(projectId){//izvrsava se kada kliknemo na delete single projekta

setProjectStates(prevState=> prevState.filter(project=> project.Id !== projectId)); //u stanju koje cuva niz projekata koristimo prethodno stanje tj aktuelno stanje filtriramo ga i zapravo ostavljamo sve projekte koje nemaju id kakav je nas tj brisemo projekat koji smo izabrali
setInputsShow(false);
setSelectProject(false);
}




  return (
    <>
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelect={onSelectProject} myProjects={projectStates} onStartAddProject={()=>showInputs()}/>
      {inputsShow && selectProject ? <SelectedProject deleteProject={onHandleDeleteProject} singleProject={choosenProject}/> : null}
      {inputsShow && !selectProject ? <NewProject onCancel={showInputs} onAdd={onHandleAddProject}/> : null}
      {!inputsShow && !selectProject ? <NoProjectSelected onStartAddProject={()=>showInputs()}/> : null}

      

    </main>
    
    </>
  );
}

export default App;
