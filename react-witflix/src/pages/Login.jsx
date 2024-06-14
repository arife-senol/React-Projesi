/*
tanımlamamız gerek state'ler: formData, errors, isValid
tanımlamamız gereken initial değerler: initialFormData, errorMessages
fonksiyonlar: changeHandler, submit
isValid: butonu disable et, tüm form elemanlarını kontrol et(useEffect).
form yapısını
*/

import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  padding: 1.5rem;
  width: 30%;
  min-width: 400px;
  max-width: 500px;
  margin: auto;
`;

const Label = styled.label`
  font-size: 1.1rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  margin-top: 0.5rem;

  &.inline-input {
    display: inline;
    margin-right: 1rem;
    width: initial;
  }
`;

const Button = styled.button`
  width: 100%;
  background: red;
  color: white;
  padding: 1rem;
  text-align: center;
  border-radius: 0.5rem;
`;

const Row = styled.div`
  margin-bottom: 1rem;
`;

const Step = styled.p`
  font-size: 0.8em;
`;

const Description = styled(Step)`
  font-size: 1.1em;
`;

const Title = styled(Step)`
  font-size: 2rem;
  margin: 0.5rem 0;
`;

const ErrorMessage = styled.p`
  padding: 0.5rem;
  color: red;
  background: #ff8f8f;
  border-radius: 0.3rem;
`;

const initialFormData = {
  email: "",
  password: "",
  terms: false,
};

const errorMessages = {
  email: "Geçerli bir email adresi giriniz!",
  password: "Password alanına strong password giriniz!",
  terms: "Devam etmeden önce anlaşma şartlarını kabul ediniz!",
};

export default function Login() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
    terms: false,
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const { email, password, terms } = formData;
    if (
      validateEmail(email) &&
      validatePassword(password) &&
      validateTerms(terms)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;

    const URL = "https://reqres.in/api/users";
    axios.post(URL, formData).then((response) => {
      setFormData(initialFormData);
      console.log(response.data);
      //cache'e aktar
      history.push("/welcome");
    });
  }

  function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }

  function validatePassword(password) {
    let regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    return regex.test(password);
  }

  function validateTerms(terms) {
    return terms;
  }

  function handleChange(event) {
    let { name, value, type, checked } = event.target;
    value = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: value });
    //validasyonlara göre errors kontrolü
    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "password") {
      if (validatePassword(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "terms") {
      if (validateTerms(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  }

  return (
    //Formun onSubmitine handleSubmit fonksiyonunu gönderiyoruz böylece formdaki buton tıklanınca bu fonksiyon tetikleniyor
    <Form onSubmit={handleSubmit}>
      <Step>STEP 1 OF 3</Step>
      <Title>Please login to continue</Title>
      <Description>Bir iki ufak adım sonra hazırız.</Description>
      <Row>
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email adresinizi giriniz"
          value={formData.email}
          data-cy="input-email"
        />
        {errors.email && (
          <ErrorMessage data-cy="errors">{errorMessages.email}</ErrorMessage>
        )}
      </Row>
      <Row>
        <Label htmlFor="password">Password:</Label>
        <Input
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Şifrenizi giriniz"
          value={formData.password}
          data-cy="input-password"
        />
        {errors.password && (
          <ErrorMessage data-cy="errors">{errorMessages.password}</ErrorMessage>
        )}
      </Row>
      <Row>
        <Input
          id="terms"
          name="terms"
          onChange={handleChange}
          type="checkbox"
          className="inline-input"
          checked={formData.terms}
          data-cy="input-terms"
        />
        <Label htmlFor="terms">Anlaşma şartlarını kabul ediyorum.</Label>
        {errors.terms && (
          <ErrorMessage data-cy="errors">{errorMessages.terms}</ErrorMessage>
        )}
      </Row>
      <Row>
        <Button disabled={!isValid} data-cy="submit-login-form">
          Login
        </Button>
      </Row>
    </Form>
  );
}
