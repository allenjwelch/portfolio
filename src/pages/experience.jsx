import React from 'react';
import { 
  Col,
  Divider,
  Row
 } from 'antd';
   
import HomeDepotLogo from '../images/THD_logo.jpg';
import EYStudiosLogo from '../images/ey_logo.png';
import TrilogyLogo from '../images/trilogy_logo.png';

import '../styles/experience.scss';

const CompanyCard = (
  {image, company, date, position, description }) => {

  return (
    <div className="company-card">
      <div className="title">
        <img src={image} alt="company-icon" />
        <div>
          <h2>{position}</h2>
          <p>{company} | {date}</p>
        </div>
      </div>
      <div className="body">
        <p>{description}</p>
      </div>
    </div>
  )
}

const Marquee = ({ direction, items }) => {
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${direction}`}>
        {/* Render items twice for seamless looping */}
        {[...items, ...items].map((item, index) => (
          <div key={index} className="marquee-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default function Experience({ mobile}) {
  return (
    <section id="experience">
      <Divider titlePlacement={mobile ? "center" : "start"} style={{ borderColor: '#aaa' }}>Experience</Divider>
      <Row justify="space-between" align="start">
        <Col sm={24} lg={16}>
          <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, enim distinctio. Nam maxime repudiandae veniam cum facere a eius amet officia excepturi accusantium molestiae debitis eveniet, laborum porro id hic?</p>
        </Col>
      </Row>
      <div class="skills">
        <Row justify="space-between" align="start">
          <Col sm={24} lg={16}>
            <div class="work-container">
              <CompanyCard 
                image={HomeDepotLogo}
                company="The Home Depot"
                date="2019 - present"
                position="Staff Software Engineer"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque. lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
              />
              <CompanyCard 
                image={EYStudiosLogo}
                company="EY Studios"
                date="2018 - 2019"
                position="Web Developer"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
              />
              <CompanyCard 
                image={TrilogyLogo}
                company="Trilogy Education"
                date="2018 - 2019"
                position="Teaching Assistant - Georgia Tech Coding Bootcamp"
                description="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eaque."
              />
            </div>
          </Col>
        </Row>
      </div>

      <div class="tech">
        {/* https://github.com/inttter/md-badges */}
        <Marquee direction='left' items={[
            <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java" />,
            <img src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white" alt="Spring Boot" />,
            <img src="https://img.shields.io/badge/GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL" />,
          
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />,
            <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />,
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />,
            <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />,
            <img src="https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white" alt="Gatsby" />,
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />,
            <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
        ]} />

        <Marquee direction='right' items={[
          <img src="https://img.shields.io/badge/CSS-563D7C?style=for-the-badge&logo=css&logoColor=white" alt="CSS" />,
          <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />,
          <img src="https://img.shields.io/badge/YAML-000000?style=for-the-badge&logo=yaml&logoColor=white" alt="YAML" />,
          <img src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white" alt="Markdown" />,

          <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker" /> ,
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" alt="Kubernetes" />,
          <img src="https://img.shields.io/badge/Google%20Cloud%20Platform-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" alt="Google Cloud Platform" />,
          <img src="https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white" alt="Terraform" />,

          <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />,
          <img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" alt="Swagger" />,
          <img src="https://img.shields.io/badge/Code%20Climate-000?style=for-the-badge&logo=codeclimate&logoColor=fff" alt="Code Climate" />
        ]} />

        <Marquee direction='left' items={[
          <img src="https://img.shields.io/badge/GitHub%20Copilot-2B7489?style=for-the-badge&logo=githubcopilot&logoColor=white" alt="GitHub Copilot" />,
          <img src="https://img.shields.io/badge/Google%20Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Google Gemini" />,
          <img src="https://custom-icon-badges.demolab.com/badge/ChatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white" alt="ChatGPT" />,

          <img src="https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" alt="GitHub Actions" />,
          <img src="https://img.shields.io/badge/Dependabot-025E8C?style=for-the-badge&logo=dependabot&logoColor=fff" alt="Dependabot" />,
          <img src="https://img.shields.io/badge/Spinnaker-FF4088?style=for-the-badge&logo=spinnaker&logoColor=white" alt="Spinnaker" />,
          <img src="https://img.shields.io/badge/TeamCity-000000?style=for-the-badge&logo=teamcity&logoColor=white" alt="TeamCity" />,

          <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" alt="Jira" />,
          <img src="https://img.shields.io/badge/Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white" alt="Confluence" />,
          <img src="https://custom-icon-badges.demolab.com/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="Slack" />,
          <img src="https://img.shields.io/badge/Miro-FF69B4?style=for-the-badge&logo=miro&logoColor=white" alt="Miro" />
        ]} />
      </div>
    </section>
  );
}