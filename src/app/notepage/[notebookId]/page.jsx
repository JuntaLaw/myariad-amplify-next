import React from 'react'; 
import NavigationBar2 from '../../../components/navi/NavigationBar2'; 

const NotePage = ({params}) => {
const { notebookId } = params;

    return (
        <main className="min-h-screen w-screen" > 
        <div>
            <NavigationBar2 /> 
        </div>
        <div>
      <h1>Notepage for Notebook {notebookId}</h1>
      {/* ここにノートの一覧や追加ボタンなどのコンポーネントを配置 */}
    </div>
    </main>
    );
};

export default NotePage;
