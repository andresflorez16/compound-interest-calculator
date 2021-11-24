import styled from "styled-components";

const Control = styled.div`
    height: 10px;
    margin-bottom: 20px
`

const CheckBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 10px
`
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #000;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const Toogle = styled.input.attrs({
  type: 'checkbox'
})`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 20px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`

const Theme = styled.div`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
`

export { Theme, CheckBoxWrapper, CheckBoxLabel, Toogle, Control }