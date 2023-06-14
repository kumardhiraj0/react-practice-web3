import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
const Fields = (props) => {
  return (
    <div className="data_item">
    <h4>{props.name}</h4>
    <h4>{props.email}</h4>
    <Button variant="outlined" color="error" onClick={()=>{props.onSelect(props.id)}}>
        <DeleteIcon/>
      </Button>
    </div>
  )
}

export default Fields