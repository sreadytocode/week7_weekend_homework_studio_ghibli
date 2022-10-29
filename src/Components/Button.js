import React from "react";

function Button({text, clickHandler, isDisabled=false}){
    return (
        <button disabled={isDisabled} onClick={clickHandler}>
            {text}
        </button>
    )
};

export default Button;