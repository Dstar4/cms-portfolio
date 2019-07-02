import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Textimport, Image, Text, Flex, Box } from 'rebass';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import Section from '../components/Section';
import { CardContainer, Card } from '../components/Card';
import Triangle from '../components/Triangle';

import ImageSubtitle from '../components/ImageSubtitle';
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
const CARD_HEIGHT = '200px';

const Contact = () => (
  <Section.Container id="contact" Background={Background}>
    <Section.Header name="Contact" label="contact" />
    <CardContainer minWidth="300px">
      <Flex style={{ height: CARD_HEIGHT }}>
        <Card>
          <a href="mailto:danielstarling4@gmail.com">
            Email: danielstarling4@gmail.com
          </a>
          <h4>Twitter: @dstar3248</h4>
          <h4>LinkedIn: dstarling</h4>
        </Card>
      </Flex>
    </CardContainer>
  </Section.Container>
);

export default Contact;
