import React from "react";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/horizontal-logo.png";
import { Link } from "react-router-dom";

const HeaderPage = () => {
    return(
        <Container fluid className="py-5 text-center bg-success text-white rounded-bottom">
            <Link to={"/"}>
                <img src={logo} style={{width: '100%', maxWidth: '300px'}} alt="Logo Quran Indonesia Horizontal"/>
            </Link>
            <h5>Dekatkan Al-Quran, Tambahkan Pahala</h5>
        </Container>
    )
}

export default HeaderPage