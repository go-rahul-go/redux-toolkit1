import day from "../assets/day.svg"
import night from "../assets/night.svg"
import { useDispatch,useSelector } from "react-redux"
import { changeTheme } from "../store/counterSlice"
const Header = () => {
  const dispatch=useDispatch();
  const counter=useSelector(state=>state.counter)

  const toggleTheme=()=>{
    console.log(counter.theme)

    if(counter.theme==="light")
    {
      dispatch(changeTheme("dark"))
    }
    else{
      dispatch(changeTheme("light"))
    }
  }
  return (
    <div className={counter.theme==="light"?"header header-light":"header header-dark "}>
      <h1 className={counter.theme==="light"?"text-black text-2xl":"text-white text-2xl"}>Redux toolkit counter</h1>
        <div className="w-[30px] h-[30px] absolute right-4 cursor-pointer" onClick={toggleTheme}>
            <img src={counter.theme==="light"?day:night} alt="" className="w-full h-full object-contain"/>
        </div>

    </div>
  )
}

export default Header;