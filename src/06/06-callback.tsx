import React from "react";
import {logDOM} from "@testing-library/react";

export const User = () => {
    const deletUser = () => {
        alert('user was deleted')
    }
    const saveUser = () => {
        alert('user was saved')
    }
    const onNameChanged = () => {
        console.log('name changed')
    }
    const focusLostHandler = () => {
        console.log('focus lost')
    }
    return <div><textarea
        onChange={onNameChanged}
        onBlur={focusLostHandler}
    >Dimych</textarea>
        <input/>
        <div onClick={deletUser}>delete</div>
        <div onClick={saveUser}>save</div>
    </div>
}
