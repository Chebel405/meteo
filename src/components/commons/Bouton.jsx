import React from 'react'

export const Bouton = (props) => {
    const style = {
        height: "2em",
    }
    return (
        <button style={style} onClick={props.onClick}>
            {props.children}
        </button>
    )
}
