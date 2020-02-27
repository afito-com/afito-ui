# afito-ui

> Components designed for Afito Apps

[![Build Status](https://travis-ci.com/afito-com/afito-ui.svg?token=wHK4WEFUEoz3o1zVWA5Q&branch=master)](https://travis-ci.com/afito-com/afito-ui)
[![Codecov](https://img.shields.io/codecov/c/github/afito-com/afito-ui)](https://codecov.io/gh/afito-com/afito-ui)
![Dependencies](https://img.shields.io/david/afito-com/afito-ui)

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
