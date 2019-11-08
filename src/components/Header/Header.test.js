import React from 'react';
import ReactDOM from 'react-dom';
import Header from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={true}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={false}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={true}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: 'Tom',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
          account_type: 'landlord'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={true}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: 'Tom',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
          account_type: 'student'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={false}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: 'Tom',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
          account_type: 'landlord'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={false}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: 'Tom',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
          account_type: 'student'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={false}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: '',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: 'https://s3.us-east-2.amazonaws.com/afito-development-bucket/utilities/BlankUser.png',
          account_type: 'student'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Header
        dark={false}
        user={{
          phone_number: '555-555-5555',
          description: 'my bio',
          name: {
            first: '',
            last: 'Bonanni'
          },
          address: {
            line1: '948 alexander road',
            line2: 'apt a',
            city: 'Princeton Junction',
            state: 'NJ'
          },
          active: true,
          profile_image: '',
          account_type: 'student'
        }}
        createUser={() => console.log('create user')}
        signIn={() => console.log('sign in')}
        signOut={() => console.log('sign out')}
        saveToken={() => console.log('save token')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
