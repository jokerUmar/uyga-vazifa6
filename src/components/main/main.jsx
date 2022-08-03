import {useState , useRef} from 'react'
import "./main.css"

function Main() {

const [isName, setIsName] = useState("");
const [number, setNumber] = useState("");

const [data, setData] = useState(
[

]
);

const addElement = () => {
    
const item = {
id: Math.floor(Math.random()*100000000000),
isName : isName,
number : number
}

setData([...data , item])

}

console.log(data);

return (
<main className='main'>
    <div className="container">
        <h1>your data</h1>

        <div className="box">

            <form>
                <input type="text" placeholder='your name' value={isName} onChange={(e)=> setIsName(e.target.value)}
                />
                <br />
                <br />
                <input type="text" placeholder='your phone number' value={number} onChange={(e)=>
                setNumber(e.target.value)}
                />
                <br />
                <br />
                <button className='add' onClick={()=>addElement()}>add</button>
            </form>

            <div className='result-box'>

                <div className="head card">

                    <div className='id'>
                        <h3>ID</h3>

                    </div>

                    <div className="name">
                        <h3>Name</h3>
                    </div>

                    <div className="number">
                        <h3>Phone number</h3>
                    </div>

                    <div className="control">
                        <h3>Control</h3>
                    </div>
                </div>

                <hr />


                {   data.map((i , idx) =>{
                    return <div key={i.id} className="body card">
                    
                    <div className='id'>
                        <h3>{idx+1}</h3>
                    </div>

                    <div className="name">
                        <h3>{i.isName}</h3>
                    </div>

                    <div className="number">
                        <h3>{i.number}</h3>
                    </div>

                    <div className="control">
                        <button>delete</button>
                    </div>

                </div>
                })

                }





            </div>


        </div>



    </div>
</main>
)
}

export default Main