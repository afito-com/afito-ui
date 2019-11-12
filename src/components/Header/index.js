import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row } from '../Grid';
import { Text } from '../Typography';
import Button from '../Button';
import { ModalContext, Modal } from '../ModalProvider';
import LoginModal from '../LoginModal';

const Wrapper = styled.header`
  ${props =>
    props.isFixed &&
    `
    position: fixed;
    left: 0;
    width: 100%;
    top: 0;
    z-index: 10;
    box-sizing: border-box;
  `};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  height: 90px;
  box-shadow: ${props => (props.dark ? 'none' : '0px 16px 7px -10px rgba(200, 203, 216, 0.26)')};
  border-bottom: 2px solid #eceef4;
  align-items: center;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    background: white;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    background: ${props => (props.dark ? 'transparent' : 'white')};
  }
`;

const Nav = styled.nav`
  display: inline-flex;
  align-items: center;
  align-self: stretch;

  & span {
    font-size: 18px;
  }

  & a {
    width: 60px;
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: ${props => (props.dark ? 'white' : '#334150')};
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 40px;
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }
  }

  & a + a {
    margin-left: 0;
  }

  @media (max-width: ${props => props.theme.AFITO_UI.md}) {
    display: none;
  }
`;

const MobileWrapper = styled.div`
  position: relative;
  margin-top: 7px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    display: none;
  }
`;

const MobileNav = styled(Row)`
  display: flex;
  flex-wrap: wrap;

  & a {
    white-space: nowrap;
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: ${props => (props.dark ? 'white' : '#334150')};
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    margin: 20px;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 92px;
  box-sizing: border-box;
  box-shadow: 0px 3px 49px 0px rgba(24, 38, 107, 0.16);
  left: 0;
  background: white;
  padding: 20px;
  width: 100%;
  z-index: 10;
`;

const Hamburger = styled.div`
  display: none;
  width: 25px;
  height: 3px;
  background-color: #bbbcdd;
  background-clip: padding-box;
  border-bottom: 7px solid transparent;
  cursor: pointer;

  &:before {
    width: 25px;
    height: 3px;
    top: -7px;
    content: ' ';
    position: absolute;
    background-color: #bbbcdd;
    background-clip: padding-box;
    border-bottom: 7px solid transparent;
  }

  &:after {
    width: 25px;
    height: 3px;
    top: 7px;
    content: ' ';
    position: absolute;
    background-color: #bbbcdd;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xl}) {
    display: none;
  }
`;

const Avatar = styled.img`
  width: 40px;
  border-radius: 100%;
  margin-left: 10px;
`;

const AuthenticatedNav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: white;
`;

const Menu = styled.div`
  position: absolute;
  background: white;
  left: -132px;
  top: 50px;
  width: auto;
  padding: 20px;
  border-radius: 8px;
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 3px 49px 0px rgba(24, 38, 107, 0.16);
  z-index: 10000;

  &:before {
    content: '';
    position: absolute;
    left: 78%;
    top: -14px;
    width: 0;
    height: 0;
    border-color: transparent transparent white;
    border-style: solid;
    border-width: 0 14px 14px;
    margin: 0 0 0 -14px;
  }

  & a {
    width: auto;
    white-space: nowrap;
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    color: ${props => (props.dark ? 'white' : '#334150')};
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    margin: 10px !important;
    text-transform: uppercase;
    font-size: 18px;
    text-decoration: none;
    border-bottom: 4px solid transparent;

    &:hover {
      border-color: ${props => props.theme.AFITO_UI.secondaryColor};
    }
  }
`;

const DesktopHeaderWrapper = styled.div`
  width: 100%;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: none;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: flex;
  }
`;

const MobileHeaderWrapper = styled(Row)`
  z-index: 100;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: flex;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: none;
  }
`;

export default function Header({ dark, isFixed, user, createUser, signIn, signOut, saveToken }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);
  const nav = [];
  if (user) {
    if (user.account_type === 'landlord') {
      nav.push(
        { name: 'Profile', href: '/dashboard' },
        { name: 'Properties', href: '/dashboard/properties' },
        { name: 'Premium Listings', href: '/dashboard/premium-listings' },
        { name: 'Billing', href: '/dashboard/billing' },
        { name: 'Favorites', href: '/dashboard/favorites' }
      );
    } else {
      nav.push({ name: 'Profile', href: '/dashboard' }, { name: 'Favorites', href: '/dashboard/favorites' });
    }
  }

  function handleOpenModal(activeIndex) {
    setModalContent(
      <LoginModal
        activeIndex={activeIndex}
        onSignIn={({ email, password }, callback) => {
          return signIn({ email, password })
            .then(res => {
              saveToken(res.data.token);
              callback(res);
              window.location.reload();
            })
            .catch(err => {
              console.error('Header sign in error: ', { err });
              callback(err.response);
            });
        }}
        onSignUp={({ email, password, first, last, account_type }, callback) => {
          return createUser({ email, password, first, last, account_type })
            .then(res => {
              saveToken(res.data.token);
              callback(res);
            })
            .catch(err => {
              console.error('Header sign up error: ', { err });
              callback(err);
            });
        }}
      />
    );
    showModal();
  }

  function toggleMobileNav() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function toggleOptions() {
    setMenuOpen(!menuOpen);
  }

  function UnauthenticatedNav() {
    return (
      <>
        <a href="#login" onClick={() => handleOpenModal(0)}>
          Login
        </a>
        <a href="#join" onClick={() => handleOpenModal(1)}>
          Join
        </a>

        <Button onClick={() => handleOpenModal(1)} level="secondary">
          List a property
        </Button>
      </>
    );
  }

  function DesktopHeader({ dark, user }) {
    return (
      <DesktopHeaderWrapper>
        <a href="/">
          {dark ? (
            <img
              height="65"
              src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_darkbg.png"
              alt="Afito Logo"
            />
          ) : (
            <img
              height="65"
              src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
              alt="Afito Logo"
            />
          )}
        </a>

        <Nav dark={dark}>
          {nav.length > 1 ? (
            <AuthenticatedNav onClick={toggleOptions}>
              <Text style={{ fontWeight: '900', color: dark ? 'white' : 'black' }}>Hi, {user.name.first}!</Text>
              <Avatar src={user.profile_image} alt="Profile Avatar" />

              <Menu open={menuOpen} onClick={e => e.stopPropagation()}>
                {nav.map(l => {
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
            <UnauthenticatedNav />
          )}
        </Nav>
      </DesktopHeaderWrapper>
    );
  }

  function MobileHeader() {
    return (
      <MobileHeaderWrapper justify="space-between" align="center">
        <a href="/">
          <img
            height="50"
            src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
            alt="Afito Logo"
          />
        </a>

        <MobileWrapper>
          <Hamburger onClick={toggleMobileNav} />
        </MobileWrapper>
        <MobileMenu open={mobileMenuOpen}>
          <MobileNav>
            {nav.length > 1 ? (
              <>
                {nav.map(l => {
                  return (
                    <a key={l.href} href={l.href}>
                      {l.name}
                    </a>
                  );
                })}
                <a href="#" onClick={signOut}>
                  Logout
                </a>
              </>
            ) : (
              <UnauthenticatedNav />
            )}
          </MobileNav>
        </MobileMenu>
      </MobileHeaderWrapper>
    );
  }

  return (
    <Wrapper isFixed={isFixed}>
      {modalContent && <Modal>{modalContent}</Modal>}
      <DesktopHeader user={user} dark={dark} />
      <MobileHeader user={user} />
    </Wrapper>
  );
}

Header.propTypes = {
  user: PropTypes.object,
  dark: PropTypes.bool.isRequired,
  isFixed: PropTypes.bool,
  createUser: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  saveToken: PropTypes.func.isRequired
};
