import MainFrame from "./pages/MainFrame";
import GoalDetailFrame from "./pages/GoalDetailFrame";
import DetailFrame from "./pages/DetailFrame";
import LogoBar from "./widgets/LogoBar";
import content from './content/content.json';    // dev version
// import content from './content/content_public.json';    // build version
import { Route, Routes } from "react-router-dom"
import './App.css'


const App = () => {
    return (
        <div className="app">
            <LogoBar />
            <div className="pageContent">
                <Routes>
                    <Route path="/" element={<MainFrame goals={content.goals} title={content.title} />} />
                    <Route path="/goal/" element={<GoalDetailFrame />} />
                    <Route path="/goal/detail/" element={<DetailFrame />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;