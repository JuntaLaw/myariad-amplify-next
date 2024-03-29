import './NotebookHome.css';

export default function NotebookHome({ children }) {
    return (
        <div className="notebook-home">
        <div className="notebooks">
            {children}
        </div>
        </div>
    );
}