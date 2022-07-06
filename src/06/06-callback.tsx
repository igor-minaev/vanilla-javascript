import React, {ChangeEvent, MouseEvent} from "react";


export const User = () => {
    const search = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name
        )
    }
    // const saveUser = () => {
    //     alert('user was saved')
    // }
    const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) => {

        console.log('age changed: ' + e.currentTarget.value)
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
        <input onChange={onAgeChanged} type='number'/>
        <button name='delete' onClick={search}>x</button>
        {/*<button name='save' onClick={deletUser}>x</button>*/}
    </div>
}
