import React, { useState } from "react";
import "./recordkeep.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Fields from "./Fields";
const RecordKeep = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data,setData] = useState([]);
  const addData = ()=>{
    if(name && email){
        setData([...data,{name,email}])
        setName("");
        setEmail("");
    }
  }
  const DeleteItem = (id)=>{
    console.log("deleted")
    setData((oldData)=>{
        return oldData.filter((arrEle,index)=>{
            return index!==id
        })
    })
  }
//by pressing enter we can also add data
  const handlePress = (event)=>{
    if(event.key === "Enter"){
      addData();
    }

  }
  return (
    <div className="main">
      <Stack spacing={2} direction="row">
        <TextField
          onKeyPress={(e)=> handlePress(e)}
          id="outlined-basic"
          value={name}
          onChange={(event) => setName(event.target.value)}
          label="Name"
          variant="outlined"
        />
        <TextField
          onKeyPress={(e)=> handlePress(e)}
          id="outlined-basic"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          label="Email"
          variant="outlined"
        />
        <Button variant="contained"
         onClick={addData}>
          <AddIcon />
        </Button>
      </Stack>
      <div className="data">
        {
            data.map((element,index)=>{
                return (
                    <Fields name={element.name} email={element.email} id={index} key={index} onSelect = {DeleteItem}/>
                )
            })
        }
       
      </div>
    </div>
  );
};

export default RecordKeep;
