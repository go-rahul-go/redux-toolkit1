import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../store/counterSlice'
import up from "../assets/up-sm-svgrepo-com.svg"
import down from "../assets/down-sm-svgrepo-com.svg"











const Display = () => {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    const [countname, changeCountname] = useState("")

    return (
        <div className={counter.theme === "light" ?
            "flex justify-center items-center w-[95%] h-[50vh]  mx-auto md:w-[70%] lg:w-[60%] lg:h-[60vh] my-4 text-black gap-2" :
            "flex justify-center items-center w-[95%] h-[50vh]  mx-auto md:w-[70%] lg:w-[60%] lg:h-[60vh] my-4  text-gray-100 gap-2 "
        }>
            <div className="w-[75%] h-[50%] grid place-items-center text-[7.5rem]">
                <p className='font-bold'>{counter.count}</p>
            </div>
            <div className=' flex flex-col gap-4 p-2'>
                <button onClick={() => dispatch(increase("increase"))} className='px-4 h-[50px] rounded-xl text-xl buttons text-gray-100 grid place-items-center uppercase font-semibold'>
                   increase
                </button>

                <button onClick={() => dispatch(decrease("decrease"))} className='px-4 h-[50px] rounded-xl buttons text-gray-100 grid place-items-center text-xl uppercase font-semibold'>
                    decrease
                </button>
            </div>
        </div>
    )
}

export default Display