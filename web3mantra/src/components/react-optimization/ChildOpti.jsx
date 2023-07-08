import React from 'react'

const ChildOpti = (prop) => {
  console.log("re-rendered");
  return (
    <div>
    {
      prop.heading
    }
    </div>
  )
}
//if we pass ChildOpt inside React.memo() fn then child componet will not re-render , it will re-render only when prop value will change
export default React.memo(ChildOpti);