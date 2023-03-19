import MainFrame from "./pages/MainFrame";
import GoalDetailFrame from "./pages/GoalDetailFrame";
import LogoBar from "./widgets/LogoBar";
import content from './content/content.json';
import { Route, Routes } from "react-router-dom"
import './App.css'


const App = () => {
    return (
        <div className="app">
            <LogoBar />
            <div className="pageContent">
                <Routes>
                    <Route path="/" element={<MainFrame goals={content.goals} />} />
                    <Route path="/goal/" element={<GoalDetailFrame />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;