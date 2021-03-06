// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import GrommetLogo from 'grommet/components/icons/Grommet';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import AccessAccessibilityIcon from
  'grommet/components/icons/base/AccessAccessibility';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import Hands from './img/Hands.js';
import ThemeMenu from './components/ThemeMenu';

const HomeSection = (props) => (
  <Section
    appCentered={true} justify='center' align='center'
    pad={{vertical: 'large'}} {...props}>
    {props.children}
  </Section>
);


const WhyGrommetItem = (props) => (
  <Box basis='1/4' pad={{ between: 'small', 'vertical': 'small' }}>
    <Header direction='column' pad={{ between: 'medium' }}>
      {props.icon}
      <Heading tag='h3' strong={true}>{props.heading}</Heading>
    </Header>
    {props.children}
  </Box>
);

export default class Home extends Component {

  constructor () {
    super();
    this._onScroll = this._onScroll.bind(this);
    this.state = { mobileOffset: 0, showCodePen: false };
  }

  componentDidMount () {
    this._app = document.querySelector('.grommetux-app');
    this._app.addEventListener('scroll', this._onScroll);
    // delay showing the codepen to avoid interfering with logo animation
    this.timeout = setTimeout(() => this.setState({ showCodePen: true }), 2000);
    if (document) {
      document.title = 'Grommet';
    }
  }

  componentWillUnmount () {
    this._app.removeEventListener('scroll', this._onScroll);
    clearTimeout(this.timeout);
  }

  _onScroll (event) {
    const elem = findDOMNode(this._mobileRef);
    const rect = elem.getBoundingClientRect();
    if (rect.top < 0) {
      this.setState({ mobileOffset: Math.abs(rect.top) / 12 });
    }
  }

  render () {
    const mobileStyle = {
      backgroundPosition: `50% ${50 - this.state.mobileOffset}%`
    };

    let codePen;
    if (this.state.showCodePen) {
      codePen = (
        <iframe height='268' scrolling='no'
          src={'//codepen.io/grommet/embed/gaEGPY/?' +
            'height=268&theme-id=0&default-tab=js'}
          frameBorder='no' allowTransparency='true' allowFullScreen='true'
          style={{width: '100%'}}>See the Pen
          <a href='http://codepen.io/grommet/pen/gaEGPY/'>
            Grommet Hello World</a>
          by Grommet UX (<a href='http://codepen.io/grommet'>@grommet</a>) on
          <a href='http://codepen.io'>CodePen</a>.
        </iframe>
      );
    } else {
      codePen = <div style={{ height: 268 }} />;
    }

    return (
      <Article className='home'>
        <HomeSection pad='none'>
          <Header fixed={false} appCentered={true} justify='center'>
            <Menu direction='row' responsive={false} dropAlign={{left: 'left'}}>
              <Anchor path='/docs/get-started'>Start</Anchor>
              {/*}
              <Anchor path='/docs/learn'>Learn</Anchor>
              {*/}
              <Anchor path='/docs'>Docs</Anchor>
            </Menu>
          </Header>
          <Box primary={true} pad={{vertical: 'large'}} direction='column'
            align='center' flex={false}>
            <GrommetLogo size='xlarge' a11yTitle='Grommet Logo'
              a11yTitleId='hero_logo' />
            <Heading tag='h2' margin='medium'>grommet</Heading>
            <Paragraph size='large' align='center'>
              focus on the essential experience
            </Paragraph>
          </Box>
          <Footer appCentered={true} justify='center'>
            <Menu inline={true} responsive={false} direction='row'>
              <Anchor href='http://slackin.grommet.io'
                icon={<SlackIcon a11yTitle='Grommet Slack' />}/>
              <Anchor href='https://github.com/grommet/grommet'
                icon={<GithubIcon a11yTitle='Grommet Github' />}/>
              <Anchor href='https://twitter.com/grommetux'
                icon={<TwitterIcon colorIndex='grey-4'
                a11yTitle='Grommet Twitter' />}/>
            </Menu>
          </Footer>
        </HomeSection>

        <HomeSection ref={(ref) => this._mobileRef = ref}
          backgroundImage={'url(/img/mobile_first.jpg)'} justify='start'
          colorIndex='dark' style={mobileStyle}>
          <Box className='home__mobile' align='center'>
            <Heading tag='h2' align='center'>
              Mobile-first ready for business
            </Heading>
            <Paragraph align='center'>Think small. Starting with mobile-first
              design allows for easy app scalability to larger
              devices.</Paragraph>
            {/*}
            <Button path='/docs/learn' label='Learn' />
            {*/}
          </Box>
        </HomeSection>

        <HomeSection colorIndex='brand'>
          <Heading tag='h2'>Why Grommet?</Heading>
          <Box direction='row' wrap={true}
            pad={{
              between: 'large', vertical: 'medium', horizontal: 'medium'
            }}>
            <WhyGrommetItem icon={<ResourcesIcon size='xlarge' />}
              heading='Comprehensive'>
              <Paragraph align='center'>
                A curated design and development platform that is more than
                just a ReactJS widget library. Grommet offers the tools
                to create amazing experiences.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon size='xlarge' />}
              heading='Flexible'>
              <Paragraph align='center'>
                Responsive web without the hassle of grid management and
                modular components loaded on-demand. Themes allow your
                brand to shine.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<AccessAccessibilityIcon size='xlarge' />}
              heading='Accessible'>
              <Box flex={true}>
                <Paragraph align='center'>
                  All users matter. Grommet provides a robust foundation
                  of accessibility features to meet web standards.
                </Paragraph>
              </Box>
              <Footer justify='center' align='center'>
                <Anchor primary={true} target='_blank'
                  href='https://vimeo.com/187068246'>Watch this</Anchor>
              </Footer>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon size='xlarge' />}
              heading='Active'>
              <Paragraph align='center'>
                Our community is open and engaged. Design resources, development
                tools, and online training provide a seamless on-boarding
                experience.
              </Paragraph>
            </WhyGrommetItem>
          </Box>
        </HomeSection>

        <HomeSection>
          <Heading tag='h2'>Start making now</Heading>
          <Paragraph align='center'>The easiest way to learn a new tool is
            to have it done
            for you and then make it yours!</Paragraph>
          {codePen}
          <Paragraph>Need more details. We’ve got a page for that.</Paragraph>
          <Button path='/docs' label='Docs' />
        </HomeSection>

        <HomeSection colorIndex='light-2'>
          <Box direction='row'>
            <Box align='center'>
              <Heading tag='h2'>Together is better</Heading>
              <Paragraph align='center'>Grommet is structured to foster
                active communication
                between designers and developers in hopes of creating better
                user experience. </Paragraph>
              <Button path='/docs/about' label='About' />
            </Box>
            <Hands />
          </Box>
        </HomeSection>

        <Footer primary={true} direction='column' pad='medium'>
          <Box direction='row' justify='between' align='start'
            pad={{ between: 'medium' }}>
            <Box direction='row' align='center' responsive={false}
              pad={{ between: 'small'}}>
              <GrommetLogo /> <strong>grommet</strong>
            </Box>
            <Box direction='row' pad={{ between: 'large' }}>
              <Box direction='column'>
                <Anchor path='/docs/get-started'>Start</Anchor>
                {/*}
                <Anchor path='/docs/learn'>Learn</Anchor>
                {*/}
                <Anchor path='/docs'>Docs</Anchor>
              </Box>
              <Box direction='column'>
                <Anchor href='https://blog.grommet.io'>Blog</Anchor>
                <Anchor href='https://vimeo.com/grommetux'>Training</Anchor>
                <Anchor path='/docs/about'>About</Anchor>
              </Box>
              <Box direction='column'>
                <Anchor href=''>Podcast</Anchor>
                <Anchor href='http://slackin.grommet.io'>Slack</Anchor>
                <Anchor href='https://github.com/grommet/grommet'>
                  Github
                </Anchor>
              </Box>
              <Box direction='column'>
                <Anchor href='https://www.facebook.com/grommetux'>
                  Facebook
                </Anchor>
                <Anchor href='https://twitter.com/grommetux'>Twitter</Anchor>
                <ThemeMenu size='small' align='right' />
              </Box>
            </Box>
          </Box>
          <Box direction='row' justify='between'>
            <span>
              Documentation licensed under <Anchor
                href='http://creativecommons.org/licenses/by/4.0/legalcode'>
                CC BY 4.0
              </Anchor>
            </span>
            <span>
              © 2016 Hewlett Packard Enterprise Development LP.
            </span>
          </Box>
        </Footer>

      </Article>
    );
  }

};
