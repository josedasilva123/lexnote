/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import { UserContext } from "../../contexts/UserContext";
import { Container } from "../../style/global";
import DashboardForm from "./DashboardForm";
import NoteList from "./NoteList";
import { StyledMain } from "./style";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
     if(!user){
      navigate('/')
     }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <StyledMain>
          <DashboardForm />
          <NoteList user={user} />
        </StyledMain>
      </Container>
    </>
  );
};

export default Dashboard;
