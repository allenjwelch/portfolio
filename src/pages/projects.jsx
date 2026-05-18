import React from 'react';
import {
  DesktopOutlined,
  GithubOutlined,
} from '@ant-design/icons';
import { 
  Card,
  Col,
  Divider,
  Row 
} from 'antd';
   
import RiverWatchLogo from '../images/projects/riverwatch_logo.png';
import FatCatLogo from '../images/projects/fatcat_logo.png';
import PortfolioBBLogo from '../images/projects/bsb_portfolio.png';
import PortfolioAWLogo from '../images/projects/aw_portfolio.png';
import ComingSoonLogo from '../images/projects/coming_soon.png';

import '../styles/projects.scss';

const { Meta } = Card;

const ProjectCard = ({ title, description, githubLink, deployedLink, image }) => {
  const actions = [];
  if (githubLink) actions.push(
    <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
      <GithubOutlined />
    </a>);
  if (deployedLink) actions.push(
    <a href={deployedLink} target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}>
      <DesktopOutlined />
    </a>
  );

  return (
    <Col>
      <Card
        cover={
          <img
            alt="project logo"
            src={image}
          />
        }
        actions={actions}
      >
        <Meta
          title={title}
          description={description}
        />
      </Card>
    </Col>
  );
}


export default function Projects({ mobile}) {
  return (
    <section id="projects">
      <Divider titlePlacement={mobile ? "center" : "start"} style={{ borderColor: '#aaa' }}>Personal Projects</Divider>
        <Row justify="space-between" align="start">
          <Col sm={24} lg={16}>
            <p className="description">
              My personal collection of full-stack and frontend projects built with a range of <b>modern</b> web technologies. These applications showcase <b>responsive</b> design, API integration, IoT automation, and custom <b>user-focused</b> experiences across personal and client projects.
            </p>
          </Col>
        </Row>

      <div class="project-container">
        <Row gutter={[16, 24]} justify="space-evenly">
          <ProjectCard
            title="River Watch"
            description="A React frontend application hosted on Heroku that provides real-time river and weather conditions using multiple APIs, displayed through a user-friendly interface."
            githubLink="https://github.com/allenjwelch/river_watch"
            deployedLink="http://river-watch.herokuapp.com/"
            image={RiverWatchLogo}
          />
          <ProjectCard
            title="Fat Cat"
            description="A full-stack application built with React and Node.js, hosted on a Tessel 2 device, that schedules and controls an automated cat food dispenser using fixed servos over a local network."
            githubLink="https://github.com/allenjwelch/fat_cat_TESSEL"
            deployedLink=""
            image={FatCatLogo}
            />
          <ProjectCard
            title="Client Portfolio"
            description="A portfolio website built with React, Gatsby, and GitHub Pages featuring a custom multi-page, responsive design to showcase the client’s projects and artwork."
            githubLink="https://github.com/brianabrock/portfolio"
            deployedLink="https://brianabrock.github.io/portfolio/"
            image={PortfolioBBLogo}
          />
          <ProjectCard
            title="Personal Portfolio"
            description="My portfolio website built with React, Gatsby, and GitHub Pages featuring a single-page responsive design that showcases my software development projects and experience."
            githubLink="https://github.com/allenjwelch/portfolio"
            deployedLink="https://allenjwelch.github.io/portfolio/"
            image={PortfolioAWLogo}
          />
        </Row>
      </div>
    </section>
  );
}