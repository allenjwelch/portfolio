import React, { useState, useEffect } from 'react';

import { 
  FilePdfOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { 
  Anchor, Flex, Layout
 } from 'antd';
import About from './about';
import Experience from './experience';
import Projects from './projects';  
import Education from './education';  
import References from './references';

import HeroImage from '../images/hero_image.png';
import LogoImage from '../images/icon.png';

import ResumePdf from '../files/AllenWelch_Resume.pdf';


import '../styles/index.scss';

const { Header, Content, Footer } = Layout;

const anchorItems = [
  {
    key: 'about',
    href: '#about',
    title: 'About',
  },
  {
    key: 'experience',
    href: '#experience',
    title: 'Experience',
  },
  {
    key: 'projects',
    href: '#projects',
    title: 'Projects',
  },
  {
    key: 'education',
    href: '#education',
    title: 'Education',
  }
];

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

const TopScrollButton = ({ fade }) => {
    return (
      <div className={`top-scroll-button`}>
        <img 
          className={`top-scroll-icon ${fade ? 'visible' : ''}`}
          src={LogoImage} 
          alt="custom" 
          onClick={scrollToTop}
        />
      </div>
    )
  }

const IndexPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);


  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleVisibility = () => {
    const width = window.innerWidth;
    // console.log(width);
    const scrollTarget = width > 1000 ? 400 : 150;
    
    if (window.scrollY > scrollTarget) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <Layout id="index"style={{ minHeight: '100vh' }}>
      <TopScrollButton fade={isVisible}/>
      <Header style={{ padding: 0 }}>
        <Anchor 
          direction="horizontal"
          items={anchorItems}
          style={{ 
            padding: '20px',
            background: '#fff'
          }}
        />
        
      </Header>
      <Content className={`${isVisible ? 'background-contain' : ''}`}>
        <div>
          <section id="hero">
            <div className="image-container">
              {/* <img src={HeroImage} alt="Allen Welch" /> */}
              <div className={`hero-text ${isLoaded ? 'visible' : ''}`}>
                <h1>Allen</h1>
                <h1 className="last-name">Welch</h1>
              </div>
            </div>
          </section>
          <About />
          <Experience />
          <Projects />
          <Education />
          {/* <References /> */}
        </div>
      </Content>
      <Footer style={{ textAlign: 'left', padding: 10, marginTop: 5 }}>
        <Flex justify='space-between'>
          <p style={{ margin: 0 }}>©2026 Created by Allen Welch</p>
          <Flex justify='space-between' align='center'>
            <a href="https://www.linkedin.com/in/allen-welch-659320b2/" target="_blank" rel="noreferrer">
              <LinkedinOutlined style={{ fontSize: 20, padding: '0 5px' }} />
            </a>
            <a href="https://github.com/allenjwelch" target="_blank" rel="noreferrer">
              <GithubOutlined style={{ fontSize: 20, padding: '0 5px' }} />
            </a>
            <a href={ResumePdf} download>
              <FilePdfOutlined style={{ fontSize: 20, padding: '0 5px' }} />
            </a>
          </Flex>
        </Flex>
      </Footer>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Allen Welch</title>
