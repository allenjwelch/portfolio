import React from 'react';
import { 
  Card,
  Col,
  Flex, 
} from 'antd';

const cardStyle = {
  padding: 16,
  boxShadow: '0 2px 8px #A7AAE1',
  border: 'none',
  marginBottom: 36,
};

const ReferenceCard = ({ name, date, position, message }) => {
  return (
    <div style={{ root: { color: "#333" } }}>
      <Flex align="center" justify="center">
        <Col span={20}>
          <Card
            title={
                <div>
                  <h3 style={{ margin: 0}}>{name}</h3>
                  <p style={{ margin: "0 0 10px", color: "#666", fontStyle: "italic" }}>{position}</p>
                </div>
            }
            extra={<div><span>{date}</span></div>}
            variant="outlined"
            style={cardStyle}
          >
            {message}
          </Card>
        </Col>
      </Flex>
    </div>
  )
}

export default function References() {
  return (
    <section id="references">
      <h2>References</h2>
      <div style={{ padding: '24px 0' }}>
        <ReferenceCard 
          name="Eric Yonge"
          date="June 9, 2019"
          position="President & Creative Director - EYStudios"
          message="I sincerely enjoyed working with Allen. He is an affable team player that is very dedicated to his craft. Allen is able to dive in to a project and really deliver in a detailed manner. He loves big challenges and has the confidence and drive to beat whatever mountain is in front of him. Very proud of the work he did at my company, and he'll continue to be a valuable asset to any future team he's part of. " 
        />
        <ReferenceCard 
          name="Susan Davenport"
          date="August 2, 2018"
          position="Full Stack Web Developer"
          message="I collaborated with Allen on several projects while we studied together at Georgia Tech's Full Stack program.  Allen demonstrates a true passion for coding and is a fantastic team member. His attention to detail and creativity in problem-solving cannot be overstated. Allen's skills as a teacher and a leader are reflected in his calm, determined demeanor, and helpfulness towards others. He would be an absolute asset to any company that's lucky enough to hire him. " 
        />
        <ReferenceCard 
          name="Eddie Rodriguez"
          date="July 14, 2018"
          position="Analytics Leader"
          message="I worked with Allen during a 6 month Georgia Tech Coding Bootcamp. He was diligent, thorough, organized and always went above and beyond. While others on projects specialized on different aspects of development Allen is good at everything. He's incredible at javascript, html, css, and back-end tech.  I would recommend him as a group member and for any developer position." 
        />
      </div>
    </section>
  );
}