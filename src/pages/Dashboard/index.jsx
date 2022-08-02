/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { Container } from "../../style/global";

import Header from "../../components/Header";
import DashboardForm from "./DashboardForm";
import NoteList from "./NoteList";

import { StyledMain } from "./style";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";


const Dashboard = ({ userLogout}) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user){
      navigate('/');
    }
  }, [])
  
  return (
    <>
      {user && (
        <>
        <Header userLogout={userLogout} />
        <Container>
          <StyledMain>
            <DashboardForm />
            <NoteList />
          </StyledMain>
        </Container>
        </>
      )}
    </>
  );
};

export default Dashboard;
