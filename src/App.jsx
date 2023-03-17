import MainFrame from "./MainFrame";
import NavBar from "./NavBar";
import content from '/src/content/content.json';


const App = () => {
    return (
        <div className="app">
            <NavBar />
            <MainFrame goals={ content.goals }/>
        </div>
    )
}

export default App;