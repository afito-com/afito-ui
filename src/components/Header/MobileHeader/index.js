import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UnauthenticatedNav from '../UnauthenticatedNav';
import MobileHeaderWrapper from './MobileHeaderWrapper';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import MobileWrapper from './MobileWrapper';
import MobileNav from './MobileNav';

MobileHeader.propTypes = {
  nextImg: PropTypes.func,
  user: PropTypes.object,
  nav: PropTypes.array.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

const Image = styled.img``;

function MobileHeader({ nextImg, nav, user, toggleMobileNav, mobileMenuOpen, signOut, handleOpenModal }) {
  return (
    <MobileHeaderWrapper justify="space-between" align="center">
      <a href="/">
        {nextImg ? (
          <Image
            as={nextImg}
            height="50"
            width="113"
            priority={true}
            src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
            alt="Afito Logo"
          />
        ) : (
          <Image
            height="50"
            width="113"
            src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
            alt="Afito Logo"
          />
        )}
      </a>

      <MobileWrapper>
        <Hamburger onClick={toggleMobileNav} />
      </MobileWrapper>
      <MobileMenu open={mobileMenuOpen}>
        <MobileNav justify="center">
          {user ? (
            <>
              {nav.length > 0 &&
                nav.map(l => {
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
            <UnauthenticatedNav handleOpenModal={handleOpenModal} />
          )}
        </MobileNav>
      </MobileMenu>
    </MobileHeaderWrapper>
  );
}

export default MobileHeader;
