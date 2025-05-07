import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import POS from "./pages/POS/POS";

const App = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-12 shrink-0">
                <Topbar />
            </div>
            <div className="flex-1"><POS /></div>
            <div className="h-16 shrink-0"><Navbar /></div>
        </div>
    );
};
export default App;
