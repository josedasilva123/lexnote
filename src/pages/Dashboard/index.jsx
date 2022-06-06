import React from "react";
import Header from "../../components/Header";
import { Container } from "../../style/global";
import DashboardForm from "./DashboardForm";
import NoteList from "./NoteList";
import { StyledMain } from "./style";

const Dashboard = ({ addNotes, setLogin }) => {
  return (
    <>
      <Header setLogin={setLogin} />
      <Container>
        <StyledMain>
          <DashboardForm />
          <NoteList />
        </StyledMain>
      </Container>
    </>
  );
};

export default Dashboard;
