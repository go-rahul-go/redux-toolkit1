import Display from "./components/Display"
import Header from "./components/Header"
import { useSelector } from "react-redux"

function App() {
    const counter=useSelector(state=>state.counter)
    return (
        <section className={counter.theme==="light"?"bg-slate-100 main":"bg-black main"}>
            <Header />
            <Display/>
        </section>
    )
}

export default App
