import React ,{memo} from 'react'

const ChildComponent = ({todo,addTodo}) => {
    console.log("child componet");
  return (
    <div>
       <ul>
        { 
            todo.map((itemVal)=>{
                return <li>{itemVal}</li>
            })
        }
       </ul>
       <button onClick={addTodo}>AddTodo</button>
    </div>
  )
}

export default memo(ChildComponent);