import React from 'react'
import Paragraph from '../Paragraph'
import ProjectList from '../ProjectList'
import * as S from './styles'

const ProjectContainer = () => {
    return (
       <S.ProjectContainerArea>
           <S.ProjectContainerUpperContent>
               <Paragraph fontSize = {12}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatibus itaque odit at necessitatibus! Amet, accusantium! Pariatur, porro molestiae illo fugiat doloremque corporis laboriosam consequuntur aliquam velit nostrum repellat numquam!
                  Delectus odio, quas ducimus inventore ipsum reprehenderit laudantium odit nemo possimus iste dolores temporibus eligendi assumenda veniam fugiat minus quo obcaecati dolor blanditiis itaque eaque corrupti. Repudiandae aspernatur distinctio doloribus.
                  Recusandae, iure. Distinctio inventore, at nesciunt laboriosam recusandae neque officia officiis eligendi, excepturi quidem accusamus nam minima tempora dolores et ipsum modi facere. Optio unde modi labore eos dicta numquam.
               </Paragraph>
           </S.ProjectContainerUpperContent>
           <S.ProjectListContent>
                <ProjectList/> 
           </S.ProjectListContent>
       </S.ProjectContainerArea>
    )
}

export default ProjectContainer
