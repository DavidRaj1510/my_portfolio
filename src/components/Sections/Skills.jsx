import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 52px;
  font-weight: 600;
  color: black;
  text-align: center;
  margin-top: 20px;
  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
  }
`;

const TitlePurple = styled.span`
  color: purple;
`;

const Desc = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: black;
  text-align: center;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  max-width: 800px;
`;

const CircleIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
  }
`;

const IconImage = styled.img`
  width: 40px;
  height: 40px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>
          <TitlePurple>S</TitlePurple>kills
        </Title>
        <Desc>
          Here are some skills I've been actively developing to enhance my career.
        </Desc>
        <CircleContainer>
          {skills.map((category) =>
            category.skills.map((skill, index) => (
              <CircleIcon key={`circle-icon-${index}`} title={skill.name}>
                <IconImage src={skill.image} alt={skill.name} />
              </CircleIcon>
            ))
          )}
        </CircleContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
