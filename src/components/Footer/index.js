import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Column } from '../Grid';
import { Heading, Text } from '../Typography';
import LoadingBlock from '../LoadingBlock';
import { PropertyAPI } from '../../api';
import { getRecentSearches } from '../../api/search';
import { formatAddress } from '../../utils';

const Wrapper = styled.footer`
  color: white;
  background: #21242a;
  padding: 100px;

  & a {
    margin-bottom: 12px;
    color: #a4a7ae;
    font-weight: bold;
    text-decoration: none;
    font-family: 'Nunito', sans-serif;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    padding: 50px 30px;
  }
`;

const SocialLinks = styled(Row)`
  position: relative;
  padding: 50px 0;

  & a {
    color: white;
    margin: 0;
    cursor: pointer;

    &:hover {
      color: #57c59b;
    }
  }

  & i {
    margin: 0 15px;
    font-weight: normal;
  }

  &::before,
  &::after {
    content: '';
    height: 1px;
    border-bottom: 1px solid #3b3f46;
    top: 0;
    width: 100%;
  }

  &::before {
    margin-left: -30px;
    margin-right: 25px;
  }

  &::after {
    margin-right: -30px;
    margin-left: 25px;
  }
`;

const CompanyLinks = styled(Row)`
  padding-bottom: 20px;
  display: flex;

  & a {
    color: white;
    font-weight: bold;
    margin: 4px 0;

    &:hover {
      color: ${props => props.theme.AFITO_UI.secondaryColor};
    }

    @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
      padding: 8px 16px;
    }

    @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
      padding: 8px 0px;
    }
  }

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    flex-direction: column;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    flex-direction: row;
  }
`;

const Spacer = styled(Text)`
  padding: 0 25px;

  @media (min-width: ${props => props.theme.AFITO_UI.xs}) {
    display: none;
  }

  @media (min-width: ${props => props.theme.AFITO_UI.lg}) {
    display: flex;
  }
`;

const FooterHeader = styled(Heading)`
  position: relative;
  margin-bottom: 55px;

  &:after {
    content: '';
    width: 50px;
    height: 4px;
    background: #57c59b;
    position: absolute;
    bottom: -25px;
    left: 0;
  }
`;

const Badge = styled.div`
  color: white;
  background: ${props => (props.primary ? '#253c6e' : '#57c59b')};
  border-radius: 2px;
  padding: 2px 8px;
  margin: 0 10px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
`;

function FooterContainer() {
  const [listings, setListings] = useState();
  const [searches, setSearches] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    axios
      .get('https://dev-api.afito.com/blog/page-data/index/page-data.json', {
        headers: { 'Access-Control-Allow-Origin': '*' }
      })
      .then(recentPosts => {
        setPosts(recentPosts.data.result.data.allMarkdownRemark.edges);
      })
      .catch(err => {
        console.error('Recent Posts Error: ', { err });
      });
  }, []);

  useEffect(() => {
    getRecentSearches()
      .then(searchesRes => {
        setSearches(searchesRes.data.searches.slice(0, 6));
      })
      .catch(err => {
        console.error('Recent Searches Error: ', { err });
      });
  }, []);

  useEffect(() => {
    PropertyAPI.getAll({
      params: { quantity: 4, order_by_max: 'property_id' }
    })
      .then(latestListings => {
        setListings(
          latestListings.data.map(p => {
            p.address = JSON.parse(p.address);
            p.name = JSON.parse(p.name);
            return p;
          })
        );
      })
      .catch(err => {
        console.error('Set Latest Listings Error', { err });
      });
  });

  return <Footer listings={listings} searches={searches} posts={posts} />;
}

function Footer({ listings = [], searches = [], posts = [] }) {
  return (
    <Wrapper>
      <Container>
        <Row canWrap={true} align="flex-start" style={{ marginBottom: '50px' }}>
          <Column xs={12} sm={12} lg={3} align="flex-start" style={{ marginBottom: '50px' }}>
            <a href="/">
              <img
                width="150"
                src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_darkbg.png"
                alt="Afito Logo"
              />
            </a>
            <FooterHeader level={4} style={{ marginTop: '15px' }}>
              A better place for students.
            </FooterHeader>
            <a
              style={{
                color: '#81848b',
                fontWeight: 'normal',
                marginBottom: '20px'
              }}
              href="mailto:support@afito.com"
            >
              <i style={{ marginRight: '20px' }} className="fas fa-envelope-open-text"></i>
              &nbsp;support@afito.com
            </a>
            <a style={{ color: '#81848b', fontWeight: 'normal', marginBottom: '20px' }} href="tel:(855) 512-3486">
              <i style={{ marginRight: '20px' }} className="fas fa-phone"></i>
              &nbsp;(855) 512-3486
            </a>
            <a
              style={{ color: '#81848b', fontWeight: 'normal' }}
              href="https://afito.com/blog"
              aria-label="Read About the latest in college housing on Afito's Blog"
            >
              <i style={{ marginRight: '20px' }} className="fas fa-rss"></i>
              &nbsp;Blog
            </a>
          </Column>
          <Column xs={0} sm={4} lg={3} align="flex-start">
            <FooterHeader level={4}>Latest Listings</FooterHeader>
            {listings.length > 0 ? (
              listings.map(l => {
                return (
                  <a
                    style={{ maxWidth: '100%' }}
                    key={l.property_id}
                    href={`/off-campus-housing/${l.area_slug}/${l.property_slug}`}
                  >
                    <Row align="center">
                      <Text
                        style={{
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          maxWidth: '220px'
                        }}
                      >
                        {l.property_name ? l.property_name : formatAddress(l.address)}
                      </Text>
                      <Badge secondary>New</Badge>
                    </Row>
                    <Row>
                      <Text
                        style={{
                          fontSize: '12px',
                          lineHeight: '18px',
                          fontWeight: 'normal'
                        }}
                      >
                        {l.address.city},&nbsp;{l.address.state}
                      </Text>
                    </Row>
                  </a>
                );
              })
            ) : (
              <LoadingBlock quiet color="white" />
            )}
          </Column>
          <Column xs={0} sm={4} lg={3} align="flex-start">
            <FooterHeader level={4}>Recent Searches</FooterHeader>
            {searches.length > 0 ? (
              searches.map(s => {
                return (
                  <a key={s.slug} href={`/off-campus-housing/${s.slug}`}>
                    <Text>{s.name}</Text>
                    {s.top_search && <Badge primary>Top Search</Badge>}
                  </a>
                );
              })
            ) : (
              <LoadingBlock quiet color="white" />
            )}
          </Column>
          <Column xs={0} sm={4} lg={3} align="flex-start">
            <FooterHeader level={4}>Recent Blog Posts</FooterHeader>
            {posts.length > 0 ? (
              posts.slice(0, 6).map((p, i) => {
                const { title } = p.node.frontmatter;
                const { slug } = p.node.fields;

                return (
                  <a
                    key={slug}
                    href={`/blog${slug}`}
                    style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '100%' }}
                  >
                    <Text
                      style={{
                        whiteSpace: 'nowrap',
                        maxWidth: '250px',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        display: 'inline-block'
                      }}
                    >
                      {title}
                    </Text>
                    {i === 0 && <Badge secondary>New</Badge>}
                  </a>
                );
              })
            ) : (
              <LoadingBlock quiet color="white" />
            )}
          </Column>
        </Row>
      </Container>
      <SocialLinks justify="center">
        <a rel="noopener" href="https://facebook.com/RentAfito" aria-label="Like us on Afito's Facebook Page">
          <i className="fab fa-lg fa-facebook-f"></i>
        </a>
        <a rel="noopener" href="https://instagram.com/rent_afito" aria-label="Follow Afito on Instragram">
          <i className="fab fa-lg fa-instagram"></i>
        </a>
        <a rel="noopener" href="https://twitter.com/RentAfito" aria-label="Follow Afito on Twitter">
          <i className="fab fa-lg fa-twitter"></i>
        </a>
        <a
          rel="noopener"
          href="https://www.linkedin.com/company/afito/about/"
          aria-label="Connect with Aftio on Linkedin"
        >
          <i className="fab fa-lg fa-linkedin-in"></i>
        </a>
      </SocialLinks>
      <CompanyLinks justify="center">
        <a href="/about">
          <Text>About the Company</Text>
        </a>
        <Spacer>&nbsp;|&nbsp;</Spacer>
        <a href="/privacy">
          <Text>Privacy Policy</Text>
        </a>
        <Spacer>&nbsp;|&nbsp;</Spacer>
        <a href="/terms">
          <Text>Terms</Text>
        </a>
      </CompanyLinks>
      <Row justify="center">
        <Text>&copy; {new Date().getFullYear()} Afito</Text>
      </Row>
    </Wrapper>
  );
}

Footer.propTypes = {
  listings: PropTypes.array,
  searches: PropTypes.array,
  posts: PropTypes.array
};

export default FooterContainer;
