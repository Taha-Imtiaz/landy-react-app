import React, { useState } from "react";
import Heading from "../Heading";
import Input from "../Input";
import * as S from "./styles";

const AddProjectForm = () => {
  const [values, setValues] = useState({
    projectName: "",
    savingAmount: "",
    targetAmount: "",
    targetDate: "",
  });
  let handleChange  = (e) => {
    let {name, value} = e.target;
    setValues({
      ...values,
      [name]: value,
    })

  }
  return (
    <S.AddProjectFormContainer>
      <form>
        <S.AddProjectFormArea>
          <S.AddProjectFormContent>
            <S.AddProjectFormHeader>
              <Heading fontSize = {26} fontWeight = "bold" color = "#0a1f44" >Add Project Form</Heading>
            </S.AddProjectFormHeader>

            <S.AddProjectFormFields>
              <S.ProjectNameField>
                <Input
                  type="text"
                  name="projectName"
                  id="Project Name"
                  placeholder="Project Name"
                  value={values.projectName || ""}
                  onChange={handleChange}
                />
              </S.ProjectNameField>
              <S.MonthlySavingAmount>
                <Input
                  type="number"
                  name="savingAmount"
                  id="Saving Amount"
                  placeholder="Saving Amount"
                  value={values.savingAmount || ""}
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
            </S.AddProjectFormFields>
          </S.AddProjectFormContent>
        </S.AddProjectFormArea>
      </form>
    </S.AddProjectFormContainer>
  );
};

export default AddProjectForm;
