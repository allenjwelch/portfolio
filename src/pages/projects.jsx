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
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim distinctio. Nam maxime repudiandae veniam cum facere a eius amet officia excepturi accusantium molestiae debitis eveniet, laborum porro id hic?</p>
          </Col>
        </Row>

      <div class="project-container">
        <Row gutter={[16, 24]} justify="space-evenly">
          <ProjectCard
            title="River Watch"
            description="Application to check the current river conditions"
            githubLink="https://github.com/allenjwelch/river_watch"
            deployedLink="http://river-watch.herokuapp.com/"
            image={RiverWatchLogo}
          />
          <ProjectCard
            title="Fat Cat"
            description="Application to schedule and trigger an in-home cat food dispenser built with React and Tessel2"
            githubLink="https://github.com/allenjwelch/fat_cat_TESSEL"
            deployedLink=""
            image={FatCatLogo}
            />
          <ProjectCard
            title="Client Portfolio"
            description="A client portfolio website built with React and hosted on GitHub Pages. Showcases my projects, skills, and experience in software development."
            githubLink="https://github.com/brianabrock/portfolio"
            deployedLink="https://brianabrock.github.io/portfolio/"
            image={PortfolioBBLogo}
          />
          <ProjectCard
            title="Personal Portfolio"
            description="A personal portfolio website built with React and hosted on GitHub Pages. Showcases my projects, skills, and experience in software development."
            githubLink="https://github.com/allenjwelch/portfolio"
            deployedLink="https://allenjwelch.github.io/portfolio/"
            image={PortfolioAWLogo}
          />
        </Row>
      </div>
    </section>
  );
}