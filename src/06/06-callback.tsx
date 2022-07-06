import React from "react";

export const User=()=>{
    const deletUser=()=>{
        alert('user was deleted')
    }
    return <div>Dimych
        <button onClick={deletUser}>delete</button>
        <button>save</button>
    </div>
}
