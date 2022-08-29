import React from 'react';
import { Link } from "react-router-dom";
import { Container } from './styles';

export const NavBar: React.FC = () => {
  return (
    <Container>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/employees">Employees</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
    </Container>
  );
}