import React from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import Section from '../components/Section';
import Triangle from '../components/Triangle';
import FontAwesome from 'react-fontawesome';
import { Link } from 'rebass';

const A = styled.a`
  text-decoration: none;
`;
const Background = () => (
  <div>
    <Triangle
      color="backgroundDark"
      height={['35vh', '80vh']}
      width={['95vw', '60vw']}
    />

    <Triangle
      color="secondary"
      height={['38vh', '80vh']}
      width={['50vw', '35vw']}
    />

    <Triangle
      color="primaryDark"
      height={['25vh', '35vh']}
      width={['75vw', '60vw']}
      invertX
    />

    <Triangle
      color="backgroundDark"
      height={['20vh', '20vh']}
      width={['100vw', '100vw']}
      invertX
      invertY
    />
  </div>
);
const IconLink = styled(Link)`
  transition: color 0.5s;
  color: ${props => props.theme.colors.primary};

  &:hover {
    color: ${props => props.theme.colors.primaryLight};
  }
`;

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <Section.Header name="Contact" label="contact" />
    <Box mx={3} fontSize={[4, 4, 4]}>
      <IconLink>
        <FontAwesome name="envelope" />
        <A href="mailto:danielstarling4@gmail.com" target="_blank">
          {' '}
          danielstarling4@gmail.com
        </A>
      </IconLink>
    </Box>
    <Box mx={3} fontSize={[4, 4, 4]}>
      <IconLink>
        <FontAwesome name="twitter" />
        <A href="https://twitter.com/Dstar3248"> @dstar3248</A>
      </IconLink>
    </Box>
    <Box mx={3} fontSize={[4, 4, 4]}>
      <IconLink>
        <FontAwesome name="linkedin" />
        <A href="https://www.linkedin.com/in/dstarling/"> dstarling</A>
      </IconLink>
    </Box>
  </Section.Container>
);

export default Contact;
