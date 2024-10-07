import { Col, Row } from "antd";
import MeetingCard from "../components/dashboard/MeetingCard";
import AttendanceCard from "../components/dashboard/AttendanceCard";
import WeatherCard from "../components/dashboard/WeatherCard";

import GoogleMap from "../components/dashboard/GoogleMap";
import ParticipantOverview from "../components/dashboard/ParticipantOverview";
import Container from "../components/common/Container";
import Participants from "../components/dashboard/Participants";
import { useState } from "react";

const Dashboard = () => {
  const [participantsExpandView, setparticipantsExpandView] = useState(false);
  return (
    <Container>
      {/* 1st section */}
      <Row
        gutter={[16, 16]}
        className={participantsExpandView ? "hidden" : "flex items-stretch"}
      >
        <Col xl={14} md={24} sm={24}>
          <MeetingCard />
        </Col>
        <Col xl={5} md={12} sm={24} xs={24}>
          <AttendanceCard />
        </Col>
        <Col xl={5} md={12} sm={24} xs={24}>
          <WeatherCard />
        </Col>
      </Row>
      {/* GOOGLE MAP AND PARTICIPANT OVERVIEW RADIAL BAR */}
      <Row
        className={`my-6 ${participantsExpandView ? "hidden" : "flex"}`}
        gutter={[16, 16]}
      >
        <Col xl={14} md={24} sm={24} xs={24}>
          <GoogleMap />
        </Col>
        <Col xl={10} md={24} sm={24} xs={24}>
          <ParticipantOverview />
        </Col>
      </Row>
      {/* TABLE AND CARD VIEW  */}
      <Row
        className={`my-6 ${participantsExpandView ? "h-screen" : ""}`}
        gutter={[16, 16]}
      >
        <Col
          xl={24}
          md={24}
          sm={24}
          className={
            participantsExpandView ? "h-full overflow-hidden" : "h-auto"
          }
          xs={24}
        >
          <Participants
            participantsExpandView={participantsExpandView}
            setparticipantsExpandView={setparticipantsExpandView}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
