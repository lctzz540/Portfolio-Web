import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          LE CONG THANG's <br /> Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi, My name is Thang (2001) <br /> I am software developer/AI developer freelance
        </SectionText>
        <Button onClick={props.handleClick}>My Portfolio</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
