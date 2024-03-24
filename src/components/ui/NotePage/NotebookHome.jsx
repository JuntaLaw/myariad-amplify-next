import Notebook from "../Card/Notebook"
import CardNote from "../Card/CardNote";

const NotebookHome = () => {
    return (
        <div className="h-full">
            <div className="ml-10 mt-10 flex gap-10">
                <Notebook /> 
                <CardNote />
            </div>
        </div>
    );
};
export default NotebookHome;