import Sidebar from "@/components/navi/Sidebar"; 
import NotebookHome from "@/components/ui/NotePage/NotebookHome";


export default function Home() {
  return (
    <main 
    className="flex min-h-screen flex-row"
    > 
    <Sidebar/>
    <NotebookHome/>

    </main>
  );
}
