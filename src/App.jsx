import MainFrame from "./MainFrame";
import NavBar from "./NavBar";
import content from '/src/content/content.json';
import { Route, Routes } from "react-router-dom"


const App = () => {
    return (
        <div className="app">
            <NavBar />
            <div className="pageContent">
                <Routes>
                    <Route path="/" element={<MainFrame goals={content.goals} />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;