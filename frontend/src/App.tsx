import React, { useEffect } from 'react'
import { MdDelete } from 'react-icons/md';
import axios from 'axios';
const App = () => {
  const [data, setData] = React.useState([]);
  const [task,setTask] = React.useState("");
  const getTask = async () => {
    const data = await (await axios.get("http://localhost:5000/task")).data;
    setData(data.data);
    console.log(data);
  }

  useEffect(() => {
    getTask();
  }, []);

  const handleAdd = async(todo:string) => {
    const data = await axios.post("http://localhost:5000/task", { todo });
    console.log(data);
    setTask("");
    getTask();  
  }

  const handleDelete = async(id:string) => {
    const data = await axios.delete(`http://localhost:5000/task/${id}`)
    console.log(data);
    getTask();
  }
  return (
    <div className='container mx-auto bg-blue-200 h-screen text-center'>

      <input type="text" className='p-4 rounded-lg outline-none mt-20 text-lg font-sans' placeholder='Enter your task' value={task} onChange={(e:any)=>setTask(e.target.value)} />

      <button
        className='m-3 px-6 py-4 text-lg bg-blue-600 text-white rounded-xl '
        onClick={()=>handleAdd(task)}
      >Add</button>
      <div className='mt-5 overflow-auto h-90 flex flex-col gap-4'>
        {data.map((ele: any) => {
          return (
            <div className='bg-blue-800 h-15 w-150 mx-auto rounded-xl flex justify-center items-center flex-row relative' key={ele.id}>
  
              <h1
                className='text-4xl font-bold m-5 text-white'
              >{ele.task}</h1>
              <button
                onClick={() => handleDelete(ele.id)}
              className="bg-red-300 p-2 rounded-lg text-white"
              ><MdDelete style={{width:"40px",fontSize:"20px"}}/></button>
            </div>
          )
        })
        }
      </div>

    </div>
  )
}

export default App