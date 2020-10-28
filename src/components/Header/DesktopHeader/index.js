import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../Typography';
import DesktopHeaderWrapper from './DesktopHeaderWrapper';
import Avatar from './Avatar';
import Menu from './Menu';
import Nav from './Nav';
import AuthenticatedNav from './AuthenticatedNav';
import UnauthenticatedNav from '../UnauthenticatedNav';

DesktopHeader.propTypes = {
  dark: PropTypes.bool.isRequired,
  user: PropTypes.object,
  nav: PropTypes.array.isRequired,
  toggleOptions: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

function DesktopHeader({ dark, user, nav, toggleOptions, menuOpen, signOut, handleOpenModal }) {
  return (
    <DesktopHeaderWrapper>
      <a href="/">
        {dark ? (
          <img
            height="65"
            width="147"
            src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_darkbg.png"
            alt="Afito Logo"
          />
        ) : (
          <img
            height="65"
            width="147"
            src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
            alt="Afito Logo"
          />
        )}
      </a>

      <Nav dark={dark}>
        {user ? (
          <AuthenticatedNav onClick={toggleOptions}>
            <Text style={{ fontWeight: '900', color: dark ? 'white' : 'black' }}>Hi, {user.name.first}!</Text>
            <Avatar width="40" height="40" src={user.profile_image} alt="Profile Avatar" />

            <Menu open={menuOpen} dark={dark} onClick={e => e.stopPropagation()}>
              {nav.length > 0 &&
                nav.map(l => {
                  return (
                    <a key={l.name} href={l.href}>
                      {l.name}
                    </a>
                  );
                })}
              <a href="#" onClick={signOut}>
                Logout
              </a>
            </Menu>
          </AuthenticatedNav>
        ) : (
          <UnauthenticatedNav handleOpenModal={handleOpenModal} />
        )}
      </Nav>
    </DesktopHeaderWrapper>
  );
}

export default DesktopHeader;
