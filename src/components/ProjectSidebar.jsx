export default function ProjectSidebar({onStartAddProject}){

    const asideStyle = "w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl";
    const headStyle = "mb-8 font-bold uppercase md:text-xl text-stone-50 ";
    const buttonStyle= "px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
    return(
        <aside className={asideStyle}>
            <h2 className={headStyle}>Your Projects</h2>
            <button onClick={onStartAddProject} className={buttonStyle}>+ Add Project</button>
            <ul>
                <li>Test project 1</li>
                <li>Test project 2</li>
            </ul>
        </aside>
    );
}