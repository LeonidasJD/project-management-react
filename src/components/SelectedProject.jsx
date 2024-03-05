export default function SelectedProject({singleProject,deleteProject}){
    return(
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                     <h1 className="text-3xl font-bold text-stone-600 mb-2">{singleProject.projectTitle}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={()=>deleteProject(singleProject.projectId)}>Delete</button>
                </div>
                <p className="mb-4 tex-stone-400">{singleProject.projectDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{singleProject.projectDesc}</p>
            </header>
            TASKS
        </div>
    );
}