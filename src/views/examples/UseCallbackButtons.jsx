import React from 'react'

const UseCallbackButtons = (props) => {
  return (
    <div>
        <buttton className="btn" onClick={() => props.inc(6)}>+6</buttton>
        <buttton className="btn" onClick={() => props.inc(12)}>+12</buttton>
        <buttton className="btn" onClick={() => props.inc(18)}>+18</buttton>
    </div>
  )
}

export default React.memo(UseCallbackButtons)
