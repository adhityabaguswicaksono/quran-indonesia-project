import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../assets/horizontal-logo.png";

const FooterPage = () => {
    return(
        <Container fluid className="mt-5 py-5 text-center bg-success text-white rounded-top">
            <Container className="row-gap-3">
                <Row>
                    <Col style={{ width: '100%', minWidth: '250px'}} className="text-start pb-3">
                        <Link to={"/"}>
                            <img src={logo} style={{width: '100%', maxWidth: '200px'}} alt="Logo Quran Indonesia Vertical"/>
                        </Link>
                        <h6>Dekatkan Al-Quran, Tambahkan Pahala</h6>
                    </Col>
                    <Col style={{ width: '100%', minWidth: '250px'}} className="text-end pt-2">
                        <h5 className="mb-3">Peta Web</h5>
                        <Link to={'/'} className="link-light text-decoration-none">
                            <p>Beranda</p>
                        </Link>
                        <Link to={'/tentang-kami'} className="link-light text-decoration-none">
                            <p>Tentang Kami</p>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <hr className="border border-2"/>
            <Container>
                <p>Dibuat pada Tahun 2023</p>
            </Container>
        </Container>
    )
}

export default FooterPage