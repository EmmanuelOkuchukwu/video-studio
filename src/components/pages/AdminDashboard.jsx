import React, { useState, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import styled from 'styled-components';
import { UserService } from '../../services/userService';
import { useHistory } from 'react-router-dom';

export default function AdminDashboard() {
    // const [patients, setPatients] = useState([]);
    const [subscribers, setSubscribers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    useEffect(() => {
        const fetchPatients = () => {
            UserService.getAllUsers()
            .then((success) => {
                setSubscribers(success);
                setIsLoading(true);
            })
            .catch(error => console.error(error));
        }
        return fetchPatients();
    }, [])
    const addSubscribers = (evt) => {
        evt.preventDefault();
        history.push('/add-subscribers');
    }
    const Subscribers = subscribers?.length > 0 ? subscribers.map(sub => (
        <PatientsPanel key={sub.id}>
            <div className="patient-details">
                <p>{sub.first_name}{' '}{sub.last_name}</p>
                <p>{sub.email}</p>
                <p>{sub.roles}</p>
                <p>{sub.registered_date}</p>
            </div>
            <i className="fas fa-ellipsis-v" />
        </PatientsPanel>
    )): <div className="subscribers-no-show">
            <p>No subscribers have been found.</p>
        </div>
    if(!isLoading) {
        return (
            <p>Data is Loading...</p>
        )
    } else {
        return (
            <div>
                <Navbar />
                <MainContent>
                    <div className="title-section">
                        <h1>Admin Dashboard</h1>
                        <AddButton onClick={addSubscribers}>Add Subscriber</AddButton>
                    </div>
                    {Subscribers}
                </MainContent>
            </div>
        );
    }
};

const MainContent = styled.section`
  margin: 60px 0;
  h1 {
    margin: 30px 10px;
  }
  .title-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const PatientsPanel = styled.div`
  border: 1px solid #000;
  margin: 10px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 15px;
  }
  .patient-details {
    display: flex;
  }
  .fa-ellipsis-v {
    margin: 15px;
  }
`

const AddButton = styled.div`
  margin: 0 15px;
  padding: 15px;
  background-color: ${props => props.theme.MainThemeColor};
  border-radius: 50px;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #fff;
    border: 1px solid ${props => props.theme.MainThemeColor};
  }
`
