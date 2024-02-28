import noProjectImg from "../assets/no-projects.png"

export default function NoProjectSelected({onStartAddProject}){

    const buttonStyle= "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
    return(
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 h-16 object-contain mx-auto" src={noProjectImg} alt="book image" />
            <h2 className="text-xl font-bold text-stone-500 my-4">Select a project or get started with a new one</h2>
            <p className="text-stone-400 mb-4">
                <p className="mt-8">
                <button onClick={onStartAddProject} className={buttonStyle}>Create new project</button>
                </p>
                
            </p>
        </div>
    );
}