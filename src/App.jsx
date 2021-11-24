import styled from "styled-components"
import * as Yup from "yup"
import { useState } from "react"
import { Formik, Form } from "formik"
import Input from "./components/Input"
import Button from "./components/Button"
import Container from "./components/Container"
import Section from "./components/Section"
import { Control, CheckBoxWrapper, CheckBoxLabel, Toogle, Theme } from "./components/Theme"
import Balance from "./components/Balance"
import Title from "./components/Title"



const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for(let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

function App() {
  const [mode, setMode] = useState('ligth')

  const myMode = () => {
    if(mode === 'dark') setMode('ligth')
    else setMode('dark')
  }

  const toogleModes = () => {
    if(mode === 'dark') return '#222'
    return '#eee'
  }

  const toogleSection = () => {
    if(mode === 'dark') return '#5585b5'
    return '#79c2d0'
  }

  const toogleIcon = () => {
    if(mode === 'dark') return 'fas fa-sun'
    return 'fas fa-moon'
  }

  const [balance, setBalance] = useState('')

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }



  return (
    <Container color={toogleModes()}>
      <Section color={toogleSection()} >
        <Control>
          <Theme>
            <i className={toogleIcon()} ></i>
            <CheckBoxWrapper>
              <Toogle id="checkbox" onChange={() => myMode()} ></Toogle>
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </Theme>
        </Control>
        <hr />
        <Title>Calculadora de interés compuesto</Title>
        <Formik
          initialValues={{
            deposit: '',
            contribution: '',
            years: '',
            rate: ''
          }}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup.number().required('Obligatorio').typeError('Debe ser un número'),
            contribution: Yup.number().required('Obligatorio').typeError('Debe ser un número'),
            years: Yup.number().required('Obligatorio').typeError('Debe ser un número'),
            rate: Yup
              .number()
              .required('Obligatorio')
              .typeError('Debe ser un número')
              .min(0, 'El valor mínimo es de 0')
              .max(1, 'El valor máximo es de 1')
          })}
        >
          <Form>
            <Input name="deposit" label="Depósito inicial" ></Input>
            <Input name="contribution" label="Contribución anual" ></Input>
            <Input name="years" label="Años" ></Input>
            <Input name="rate" label="Interés estimado" ></Input>
            <Button>Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App
