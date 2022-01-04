import React from 'react'
import styled, {css} from "styled-components"

const Button = styled.button`
    background: light-grey;
    border-radius: 5px;
    border: 2px solid black;
    cursor: pointer;
    font-family: ariel;
`

export default function MyButton(props) {
    return (
        <div>
            <Button>{props.children}</Button>
        </div>
    )
}
