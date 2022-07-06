import React from "react";

export const User=()=>{
    const deletUser=()=>{
        alert('user was deleted')
    }
    const saveUser=()=>{
        alert('user was saved')
    }
    return <div>Dimych
        <div onClick={deletUser}>delete</div>
        <div onClick={saveUser}>save</div>
    </div>
}
