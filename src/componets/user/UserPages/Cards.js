import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { FaUserTie, FaLaptopCode, FaChartLine } from "react-icons/fa";


const Cards = () => {
  const cards = [
    {
      icon: <FaUserTie size={40} />,
      title: "Professional Growth",
      text: "Upgrade your skills and grow your career with top resources.",
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Tech Opportunities",
      text: "Explore tech jobs and freelance gigs tailored for you.",
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Track Your Progress",
      text: "Get insights and analytics to measure your job performance.",
    },
  ];

  return (
    <div className="three-card-wrapper container py-5">
      <Row className="g-4">
        {cards.map((card, idx) => (
          <Col md={4} key={idx}>
            <Card className="card-custom text-center p-4">
              <div className="card-icon mb-3 text-primary">{card.icon}</div>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.text}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cards;
