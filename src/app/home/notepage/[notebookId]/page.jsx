import NoteNavBar from '../../../../components/navi/NoteNavBar'; 

export default function NotePage({params}) { 
    const { notebookId } = params; 

    return (
        <main className="min-h-screen w-screen" > 
        <div>
            <NoteNavBar /> 
        </div>
        <div>
            <h1> {notebookId}</h1>
      {/* ここにノートの一覧や追加ボタンなどのコンポーネントを配置 */}
        </div>
    </main>
    ); 
}; 

