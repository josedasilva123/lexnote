/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { Container } from "../../style/global";

import Header from "../../components/Header";
import DashboardForm from "./DashboardForm";
import NoteList from "./NoteList";

import { StyledMain } from "./style";


const Dashboard = () => {
  return (
    <>
      <Header />
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
