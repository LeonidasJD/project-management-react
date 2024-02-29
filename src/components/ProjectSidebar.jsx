export default function ProjectSidebar({onStartAddProject,myProjects}){

    const asideStyle = "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
    const headStyle = "mb-8 font-bold uppercase md:text-xl text-stone-50 ";
    const buttonStyle= "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
    const projectBtn = "w-full text-left px-2 py-1 rounded my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"

    let projects = myProjects;//varijabla koja prikazuje preko propa niz objekata jer je prop zapravo azurirano stanje koje cuva objekte projekata
    console.log(projects);

    return(
        <aside className={asideStyle}>
            <h2 className={headStyle}>Your Projects</h2>
            <button onClick={onStartAddProject} className={buttonStyle}>+ Add Project</button>
            <ul className="mt-2"> 
                {myProjects.map((project)=>(
                    <li key={project.Id}><button className={projectBtn}>{project.Title}</button></li>//prosli smo kroz niz objekata i ispisali naslove projekata u listu
                ))}
            </ul>
        </aside>
    );
}