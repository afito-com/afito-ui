import React from 'react';
import PropTypes from 'prop-types';
import UnauthenticatedNav from '../UnauthenticatedNav';
import MobileHeaderWrapper from './MobileHeaderWrapper';
import Hamburger from './Hamburger';
import MobileMenu from './MobileMenu';
import MobileWrapper from './MobileWrapper';
import MobileNav from './MobileNav';

MobileHeader.propTypes = {
  user: PropTypes.object,
  nav: PropTypes.array.isRequired,
  toggleMobileNav: PropTypes.func.isRequired,
  mobileMenuOpen: PropTypes.bool.isRequired,
  signOut: PropTypes.func.isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

function MobileHeader({ nav, user, toggleMobileNav, mobileMenuOpen, signOut, handleOpenModal }) {
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
