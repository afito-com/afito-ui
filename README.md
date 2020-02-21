# afito-ui

> Components designed for Afito Apps

![Netlify](https://img.shields.io/netlify/d8cb7201-32c0-4ec3-a8a3-3eceeae52b80)
[![Build Status](https://travis-ci.com/redhair/afito-ui.svg?token=wHK4WEFUEoz3o1zVWA5Q&branch=master)](https://travis-ci.com/redhair/afito-ui)
![npm](https://img.shields.io/npm/v/afito-ui?color=blue)
![Dependencies](https://img.shields.io/david/redhair/afito-ui)
![MIT License](https://img.shields.io/github/license/redhair/afito-ui)

## Install

```bash
npm i afito-ui
```

## Usage

```jsx
import React from 'react';
import { Container, Row, Column, Heading, Text } from 'afito-ui';

export default function MyComponent() {
  return (
    <Container>
      <Row>
        <Column xs={12}>
          <Heading level={1}>Hello World</Heading>
          <Text>That was easy</Text>
        </Column>
      </Row>
    </Container>
  );
}
```
