import { useState } from "react"
import axios from 'axios'
const Login =()=>{

    const initialValue = {
        UserName:"",
        Password:""
    }
    const [data, setData]=useState(initialValue)

    const[edit ,setEdit]=useState(false)


    const handleChange=(event)=>{
            const {name,value} = event.target

            setData({...data, [name]:value})
    }

    const postData = async()=>{
        try {
            await axios.post("http://localhost:4000/postData", data).
            then(()=>{
                console.log("data saved in db");
            })
        } catch (error) {
            console.log("data save error",error);
        }
    }

    const getData = async()=>{
        try {
            await axios.get()
        } catch (error) {
            
        }
    }
    const handleClick = ()=>{
        postData()
        setData(initialValue)

    }
    return(
        <div className="flex flex-col gap-5 items-center justify-center h-screen">
            <div className="p-5 flex flex-col gap-5 items-center bg-sky-300">
                <div className="flex flex-row gap-3"> 
                    <label htmlFor="">UserName</label>
                    <input type="text" name='UserName' className="border border-black"value={initialValue.UserName}  onChange={handleChange}/>
                </div>
                <div className="flex flex-row gap-3">
                    <label htmlFor="" className="">Password</label>
                    <input type="text" name='Password' className="border border-black" value={initialValue.Password} onChange={handleChange}/>
                </div>
                <div className="flex flex-row gap-4">
                <button className="border border-black px-4 py-2 bg-slate-500" onClick={handleClick}>Save</button>
                    <button className="border border-black px-4 py-2 bg-slate-500">Edit</button>
                </div>
            </div>

        </div>
    )
}

export default Login