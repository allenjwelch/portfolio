import React from 'react';
import { Col, Divider, Row } from 'antd';

import GeorgiaTechLogo from '../images/education/gt_logo.png';
import GeorgiaStateLogo from '../images/education/gsu_logo.png';
import KennesawStateLogo from '../images/education/ksu_logo.png';

import '../styles/education.scss';

const EducationCard = ({ image, degree, institution, year, description }) => (
  <div className="education-card" style={{ marginBottom: 16 }}>
    <div className="title">
      <img src={image} alt="company-icon" />
      <div>
        <h2>{institution}</h2>
        <p>{degree} | {year}</p>
      </div>
    </div>
    <div className="body">
      <p>{description}</p>
    </div>
  </div>
);

export default function Education({ mobile}) {
  return (
    <section id="education">
      <Divider titlePlacement={mobile ? "center" : "start"} style={{ borderColor: '#aaa' }}>Education</Divider>
        <Row justify="space-between" align="start">
          <Col sm={24} lg={16}>
            <EducationCard
                image={GeorgiaTechLogo}
                institution="Georgia Institute of Technology"
                degree="Certificate in Full Stack Flex Web Development, Web Development and Design"
                year="2018"
                description="Developed multiple applications and responsive websites using various languages such as HTML, CSS, JavaScript, jQuery, Node.js, ReactJS, AngularJS, MySQL, and the Firebase API."
            />
            <EducationCard
                image={GeorgiaStateLogo}
                institution="Georgia State University"
                degree="Master’s Degree, History"
                year="2015"
                description="Concentrated in World History with a focus on the Atlantic World, British Imperialism, and British West Africa. Completed thesis research paper titled 'Women's Resistance Movements and the Retention of Traditional Political Activism in British West Africa: 1885-1954.'"
            />
            <EducationCard
                image={KennesawStateLogo}
                institution="Kennesaw State University"
                degree="Bachelor’s Degree, History Education"
                year="2009"
                description="Graduated with a B.A. in History Education. Minored in Anthropology. Completed one semester of student teaching at Wheeler High School in Marietta, GA."
            />
          </Col>
        </Row>
    </section>
  );
}