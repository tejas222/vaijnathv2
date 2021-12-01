import React from "react";
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./Navbars/PrivateRoute";
const Admin = () => {
  return (
    <Container className="m-auto d-flex justify-content-center flex-column align-items-center container">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Container>
  );
};

export default Admin;
