import styled from "styled-components";
import { useField } from "formik";

const Control = styled.div`
    maring-bottom: 40px;
`

const Label = styled.label`
    color: #000;
    display: block;
    margin-bottom: 5px;
    font-family: sans-serif;
`

const MyInput = styled.input`
    outline: none;
    padding: 8px;
    border: solid 1px #aaa;
    border-radius: 4px;
    width: 100%;
    margin-bottom: 5px;
`

const ErrorMessage = styled.div`
    display: inline-block;
    background-color: #f00;
    border: 1px solid #fff;
    color: #fff;
    padding: 2px 3px;
    border-radius: 4px;
    margin-bottom: 20px;
`

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props)

    return (
        <Control>
            <Label>{label}</Label>
            <MyInput {...field} {...props}/>
            {meta.touched && meta.error ? (
                <ErrorMessage>{meta.error}</ErrorMessage>
            ): null}
        </Control>
    )
}

export default Input