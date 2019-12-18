import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from '.';
import { ModalProvider } from '../ModalProvider';

const landlordNav = [
  { name: 'Profile', href: '/dashboard' },
  { name: 'Properties', href: '/dashboard/properties' },
  { name: 'Premium Listings', href: '/dashboard/premium-listings' },
  { name: 'Billing', href: '/dashboard/billing' },
  { name: 'Favorites', href: '/dashboard/favorites' }
];

const studentNav = [{ name: 'Profile', href: '/dashboard' }, { name: 'Favorites', href: '/dashboard/favorites' }];

storiesOf('Composites|Header', module)
  .add('logged out', () => {
    return (
      <ModalProvider>
        <Header
          dark={false}
          createUser={() => console.log('create user')}
          signIn={() => console.log('sign in')}
          signOut={() => console.log('sign out')}
          saveToken={() => console.log('save token')}
        />
      </ModalProvider>
    );
  })
  .add('logged in as a landlord', () => {
    return (
      <ModalProvider>
        <Header
          dark={false}
          nav={landlordNav}
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
      </ModalProvider>
    );
  })
  .add('logged in as a student', () => {
    return (
      <ModalProvider>
        <Header
          dark={false}
          nav={studentNav}
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
      </ModalProvider>
    );
  })
  .add('logged out [dark]', () => {
    return (
      <ModalProvider>
        <Header
          dark={true}
          nav={[]}
          createUser={() => console.log('create user')}
          signIn={() => console.log('sign in')}
          signOut={() => console.log('sign out')}
          saveToken={() => console.log('save token')}
        />
      </ModalProvider>
    );
  })
  .add('logged in as a landlord [dark]', () => {
    return (
      <ModalProvider>
        <Header
          dark={true}
          nav={landlordNav}
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
      </ModalProvider>
    );
  })
  .add('logged in as a student [dark]', () => {
    return (
      <ModalProvider>
        <Header
          dark={true}
          nav={studentNav}
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
      </ModalProvider>
    );
  })
  .add('logged in as a student [fixed]', () => {
    return (
      <ModalProvider>
        <Header
          isFixed={true}
          dark={false}
          nav={studentNav}
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
        <div
          style={{
            background: 'aliceblue',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Scroll Down</h1>
        </div>
        <div style={{ background: 'mediumspringgreen', height: '100vh' }}></div>
        <div style={{ background: 'salmon', height: '100vh' }}></div>
      </ModalProvider>
    );
  });
