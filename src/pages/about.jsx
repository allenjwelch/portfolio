import React from 'react';
import {
  HomeOutlined,
  LaptopOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Col, Divider, Row } from 'antd';

import '../styles/about.scss';


const calculateYearsFrom = (pastDate) => {
  const today = new Date();
  const birthDate = new Date(pastDate);
  let years = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  
  // Adjust if the current month/day is before the past date's month/day
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    years--;
  }
  return years;
}

export default function About({ mobile }) {
  return (
    <section id="about">
      <Divider titlePlacement={mobile ? "center" : "start"} style={{ borderColor: '#aaa' }}>About</Divider>
      <Row justify="space-between" align="start">
        <Col sm={24} lg={16}>
          <p className="description">
            Full Stack Software Engineer with a background in research and education, specializing in frontend and backend development, system architecture, and <b>scalable</b> application design. Dedicated to leading <b>collaborative</b> development teams and building secure, <b>reliable</b>, and high-quality solutions from concept to deployment.
          </p>
          <p>
            <LaptopOutlined /> {calculateYearsFrom('2018-08-01')}+ years experience in software development
          </p>
          <p>
            <HomeOutlined /> Based in Atlanta, Georgia
          </p>
          <p>
            <MailOutlined /> allenjwelch@gmail.com
          </p>
        </Col>
      </Row>
    </section>
  );
}