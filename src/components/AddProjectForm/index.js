import React, { useState, useEffect } from "react";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";
import Button from "../Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddProjectForm = () => {
  const history = useHistory();
  // const url = 'https://savings-back.herokuapp.com/api/'
  const url = 'http://localhost:3001/api'
  let token;
  useEffect(() => {
    token = localStorage.getItem('saving-token')
    if (!token) {
      history.push("/")
    }
  }, [])
  const [values, setValues] = useState({
    name: "",
    monthlySavingAmount: "",
    targetAmount: "",
    targetDate: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    })

  }

  let validate = () => {
    if (!values.name || !values.monthlySavingAmount || !values.targetAmount || !values.targetDate) {
      return false;
    }
    return true;
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      let formData = new FormData();
      formData.append('data', JSON.stringify(values));
      const config = {
        headers: { "Authorization": token }
      }
      axios
        .post(url + '/add-project', formData, config)
        .then((res) => {
          if (res.data.status === 200) {
            history.push("/profile")
          }
          toast(res.data.message);
        }).catch((e) => {
        });
    } else {
      toast("Please fill the valid values.");
    }
  };

  return (
    <S.AddProjectFormContainer>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <S.AddProjectFormArea>
          <S.AddProjectFormContent>
            <S.AddProjectFormHeader>
              <Heading fontSize={26} fontWeight="bold" color="#0a1f44" >Add Project Form</Heading>
            </S.AddProjectFormHeader>
            <S.AddProjectFormFields>
              <S.ProjectNameField>
                <Input
                  type="text"
                  name="name"
                  id="Project Name"
                  placeholder="Project Name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
              </S.ProjectNameField>
              <S.MonthlySavingAmount>
                <Input
                  type="number"
                  name="monthlySavingAmount"
                  id="Saving Amount"
                  placeholder="Monthly Saving Amount"
                  value={values.monthlySavingAmount || ""}
                  onChange={handleChange}
                />
              </S.MonthlySavingAmount>

              <S.TargetAmount>
                <Input
                  type="number"
                  name="targetAmount"
                  id="Target Amount"
                  placeholder="Target Amount"
                  value={values.targetAmount || ""}
                  onChange={handleChange}
                />
              </S.TargetAmount>
              <S.TargetDate>
                <Input
                  type="date"
                  name="targetDate"
                  id="Target Date"
                  placeholder="Target Date"
                  value={values.targetDate || ""}
                  onChange={handleChange}
                />
              </S.TargetDate>
              <S.LoginBtn>
                <Button type="submit">
                  Add
              </Button>
              </S.LoginBtn>
            </S.AddProjectFormFields>
          </S.AddProjectFormContent>
        </S.AddProjectFormArea>
      </form>
    </S.AddProjectFormContainer>
  );
};

export default AddProjectForm;
