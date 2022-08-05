import {useState} from 'react'
import "./main.css" 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Main() {


const [dark, setDark] = useState(false);

console.log(dark);

const [isName, setIsName] = useState("");
const [number, setNumber] = useState("");
const [data, setData] = useState(
[

]
);

const check = {
name : isName.trim().length === 0 ,
number : number.trim().length === 0
}
 
const addElement = () => {


if (check.name || check.number) {

toast.error("iltimos to'ldiring")

} else{

let item = {
id:Date.now() ,
isName : isName ,
number : number
}

setData([...data , item ])

setIsName("")
setNumber("")

toast.success("muvofaqqiyatli qo'shildi ")
}
}

 
const deleteItem = (item) =>{
    const filterItem = data.filter((obj) => {
        return obj.id !== item
    })  
    setData(filterItem)



}

const main = {
    backgroundColor : "white"
}
const darkMain = {
    backgroundColor : "rgba(24, 19, 19, 0.829)"
}

const darkColor = {
    color : "white"
}
const lihghtColor = {
    color : "black"
}
const ligthBorder = {
    border : "solid 1px black"
}
const darkBorder = {
    border : "solid 1px white"
}



return (
    <>  
    <ToastContainer />

<main className='main' style={(dark) ? darkMain : main}>
      
        <div className={`${(dark) ? "dark" : "header"}`}>
        <div className="container">
        <h1>Your data</h1>
        <button className={`${(dark) ? "dark-btn1" : "dark-btn"}`} onClick={(e) => {setDark((e)=> !e)}} >{`${(dark) ? "dark" : "light"}`}</button>
        </div>
        </div>


    <div className="container">

        <div className="box">

            <div className='form'>
                <input type="text" placeholder='your name' value={isName} onChange={(e)=> setIsName(e.target.value)}
                />
                <br />
                <br />
                <input type="text" placeholder='your phone number' value={number} onChange={(e)=>
                setNumber(e.target.value)}
                />
                <br />
                <br />
                <button className='add' onClick={()=> addElement()}>add</button>
            </div>

            <div className='result-box' style={(dark) ? darkBorder : ligthBorder}>

                <div className="head card">

                    <div className='id' >
                        <h3 style={(dark) ? darkColor : lihghtColor}>ID</h3>

                    </div>

                    <div className="name">
                        <h3 style={(dark) ? darkColor : lihghtColor}>Name</h3>
                    </div>

                    <div className="number">
                        <h3 style={(dark) ? darkColor : lihghtColor}>Phone number</h3>
                    </div>

                    <div className="control">
                        <h3 style={(dark) ? darkColor : lihghtColor}>Control</h3>
                    </div>
                </div>

            
                {
                 
                 (data.length === 0) ? <div className="alert">
                    <h1 className=''>NOT FOUND</h1>
                 </div>
                
                :

                data.map((item , idx) => {
                return <div className="body card" key={idx}>

                    <div className='id'>
                        <h3>{idx+1}</h3>
                    </div>

                    <div className="name">
                        <h3>{item.isName}</h3>
                    </div>

                    <div className="number">
                        <h3>{item.number}</h3>
                    </div>

                    <div className="control">
                        <button onClick={() => deleteItem(item.id)}>delete</button>
                    </div>
                </div>

                })

                }

            </div>
        </div>
    </div>
</main>
</>
)
}

export default Main