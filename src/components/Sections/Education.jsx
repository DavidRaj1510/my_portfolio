import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../cards/EducationCard";
import EarthCanvas from "../canvas/Earth";

// Custom styles for the vertical timeline
const StyledVerticalTimeline = styled(VerticalTimeline)`
  .vertical-timeline--one-column {
    .vertical-timeline-element {
      &:before {
        background: #6a0dad; // Purple color for the timeline line
      }
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; // Fixed typo
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

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;

  // Style for the 'E' in Education
  span {
    color: purple; // Purple color for 'E'
  }

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>
          <span>E</span>ducation
        </Title>
        <Desc style={{ marginBottom: "40px" }}>
          Education has been a transformative experience for me, guiding my personal development and self-awareness. Here are the key details of my academic history.
        </Desc>

        <StyledVerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard key={`education-${index}`} education={edu} />
          ))}
        </StyledVerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
