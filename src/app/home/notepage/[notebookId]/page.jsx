"use client";
import NoteNavBar from '../../../../components/navi/NoteNavBar';
import useNotebookStore from '../../../../store/notebookStore';

export default function NotePage({ params }) {
    // URLパラメータからnotebookIdを取得
    const { notebookId } = params;

    // notebookIdに基づいてnotebookを取得
    const notebook = useNotebookStore(state => state.notebooks.find(notebook => notebook.id === notebookId));

    return (
        <main className="min-h-screen w-screen">
        <div>
            <NoteNavBar />
        </div>
        <div>
            {/* notebookのタイトルを表示。タイトルがない場合は'Untitled'を表示 */}
            <h1 className='ml-8 mt-2 drop-shadow-xl'>{notebook?.title || 'Untitled'}</h1>
            {/* ここにノートの一覧や追加ボタンなどのコンポーネントを配置 */}
        </div>
        </main>
    );
}