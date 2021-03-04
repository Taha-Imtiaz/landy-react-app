import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Button from '../Button'
import Input from '../Input'
import * as S from "./styles"

const ProjectInfoCard = ({data}) => {
    console.log(data)
    const [values, setValues] = useState({
      name:data.name,
      targetAmount:  data.targetAmount,
      actualAmount:  data.actualAmount,
      monthlySavingAmount: data.monthlySavingAmount,
      targetDate:  data.targetDate,
      achievedPercentage: data.achievedPercentage,
      status: data.status,
      image: data.image

        
    })
    // useEffect(() => {
    //     var {name, targetAmount, actualAmount, monthlySavingAmount, targetDate,achievedPercentage,status}=data;
       
    //         setValues({
                
    //             name: name,
    //             targetAmount: targetAmount,
    //             actualAmount: actualAmount,
    //             monthlySavingAmount: monthlySavingAmount,
    //             targetDate: targetDate,
    //             achievedPercentage: achievedPercentage,
    //             status: status
    //         })
        
    // },[])
    const handleChange = (e) => {
        let {name, value} = e.target;
        setValues({
            ...values,
            [name]: value,
        })
    }
    console.log(values)
    return (
        <S.ProjectInfoCardArea>
            {values &&
            <form>

            <S.ProjectInfoCardContentArea>
            <S.ProjectImageArea>
                    <S.ProjectImg src={values.image}></S.ProjectImg>
                </S.ProjectImageArea>
                <S.ProjectInfoCardContentAreaInput>
                <Input
                 type="text"
                 name="name"
                 id="Name"
                 placeholder="Project Name"
                 value={values.name}
                 onChange={handleChange}

                />
                <Input 
                 type="number"
                 name="targetAmount"
                 id="Target Amount"
                 placeholder="Target Amount"
                 value={values.targetAmount}
                 onChange={handleChange}

                />
                <Input 
                 type="number"
                 name="actualAmount"
                 id="Actual Amount"
                 placeholder="Actual Amount"
                 value={values.actualAmount}
                 onChange={handleChange}

                />
                <Input 
                 type="number"
                 name="monthlySavingAmount"
                 id="Monthly Saving Amount"
                 placeholder="Monthly Saving Amount"
                 value={values.monthlySavingAmount}
                 onChange={handleChange}

                />
                <Input 
                 type="date"
                 name="targetDate"
                 id="Target Date"
                 placeholder="Target Date"
                 value={values.targetDate}
                 onChange={handleChange}
                 />
                <Input 
                 type="number"
                 name="achievedPercentage"
                 id="Achieved Percentage"
                 placeholder="Achieved Percentage"
                 value={values.achievedPercentage}
                 onChange={handleChange}
                 />
                <Input 
                 type="text"
                 name="status"
                 id="Status"
                 placeholder="Project Status"
                 value={values.status}
                 onChange={handleChange}
                 />
                </S.ProjectInfoCardContentAreaInput>
                <S.ProjectInfoCardEditBtn>
                 <Button width = "100%">Edit</Button>   
                </S.ProjectInfoCardEditBtn>


            </S.ProjectInfoCardContentArea>
            </form>
}
        </S.ProjectInfoCardArea>
    )
}

export default ProjectInfoCard
