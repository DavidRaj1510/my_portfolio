import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import ExperienceCard from "../cards/ExperienceCard";

// Styled components for the container and wrapper
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 50px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

// Title component with separate styles for "E" and "xperience"
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: black; // Default color for the xperience part
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const TitlePurple = styled.span`
  color: purple; // "E" is purple
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: black; // Changed to black color for description
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Override the vertical timeline's line color
const CustomVerticalTimeline = styled(VerticalTimeline)`
  .vertical-timeline-element--vertical {
    border: 3px solid purple; // Changed line color to purple
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>
          <TitlePurple>E</TitlePurple>xperience
        </Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          I have hands-on experience in various roles, contributing to diverse projects that enhance my skills and expertise.
        </Desc>

        <CustomVerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </CustomVerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
