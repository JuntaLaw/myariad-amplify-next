import './NotebookHome.css';

export default function NotebookHome({ notebooks }) {
    return (
        <div className="notebook-home">
            <div className="notebooks">
                {notebooks}
            </div>
        </div>
    );
}
