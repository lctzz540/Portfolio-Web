import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillFacebook} from 'react-icons/ai';
import { GiSnake } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <GiSnake size="3rem" /> <span>LCT</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/lctzz540">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.facebook.com/eternal.lct/">
          <AiFillFacebook size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/lctdiary/?hl=en">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
