import React from "react"

const Button = ({theHandleClick, myTextButton}) => {
    console.log({theHandleClick, myTextButton})
    return <button onClick={theHandleClick}>{myTextButton}</button>
}

export default Button
