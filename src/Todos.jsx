import React,{useState} from 'react'
import DeleteIcon from '@material-ui/icons/Delete';



const Todos = (props) => {

    const [line, setline] = useState(false)

  const Cutit=()=>{
    setline(true);
  }    

  return (
    <div className="todo_style">
        
        <span onClick={Cutit} ><DeleteIcon classNmae="deleteIcon"/></span>
        <li style={{textDecoration: line ? "line-through" : "none"}} >{props.text}</li>


    </div>
  )
}
export default Todos;


 