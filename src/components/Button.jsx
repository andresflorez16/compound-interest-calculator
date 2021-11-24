import styled from "styled-components";


const Button = styled.button.attrs({
    type: 'submit'
})`
    background: #113f67;
    color: #fff;
    font-size: 1em;
    padding: 0.25em 1em;
    border: 1px solid #53a8b6;
    border-radius: 3px;
    cursor: pointer;
    transition: background .5s ease;

    &:hover {
        background: #303a5a;
    }

`

export default Button