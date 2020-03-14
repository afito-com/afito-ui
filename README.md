# afito-ui

> Components designed for Afito Apps

[![Build Status](https://travis-ci.com/afito-com/afito-ui.svg?token=wHK4WEFUEoz3o1zVWA5Q&branch=master)](https://travis-ci.com/afito-com/afito-ui)
[![Codecov](https://img.shields.io/codecov/c/github/afito-com/afito-ui)](https://codecov.io/gh/afito-com/afito-ui)
![Dependencies](https://img.shields.io/david/afito-com/afito-ui)

## Install

```bash
npm i afito-ui
```

## Usage with create-react-app

```jsx
// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { ThemeProvider } from 'afito-ui';
import { unregister } from './registerServiceWorker';

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('dashboard_root')
);
unregister();
```

```jsx
// MyComponent.js
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

## Component Reference

### <AddPropertyWizard />

#### Props

- `createProperty`
- `onCompleted`
- `onPropertyCreated`
- `user_id`

### <Alert />

### <AreaCard />

### <Button />

### <Card />

### <Checkbox />

### <CheckoutForm />

### <Dropzone />

### <FloorplanEditor />

### <Footer />

### <FormButton />

### Grid

#### <Container />

#### <Row />

#### <Column />

### <Header />

### <ImageGallery />

### <Input />

### <InputNew />

### <Lightbox />

### <LoadingBlock />

### <LoginModal />

### <Map />

### <ModalProvider />

### <NewImageGallery />

### <NewMap />

### <PremiumPropertyCard />

### <PremiumUpsell />

### <PropertyCard />

### <RadioGroup />

### <Range />

### <Searchbox />

### <SearchboxField />

### <Section />

### <Select />

### <SelectField />

### <SelectNew />

### <SignInForm />

### <SignUpWizard />

### <Switch />

### <SwitchField />

### <Tab />

### <TabGroup />

### <Table />

### <Textarea />

### <TextareaField />

### <TextareaNew />

### <ThemeProvider />

### Typography

#### <Heading />

#### <Text />
