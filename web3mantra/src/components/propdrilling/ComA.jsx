import React from 'react'
import ComB from './ComB';

const ComA = ({data}) => {
  return (
    <div className='coma'>
        ComA
        <ComB data={data}/>
    </div>
  )
}

export default ComA;