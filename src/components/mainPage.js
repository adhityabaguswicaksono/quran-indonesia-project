import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Card, Col, Row, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from "./headerPage";
import FooterPage from "./footerPage";
import { Helmet } from "react-helmet";

const MainPage = () => {
    const [qurans, setQurans] = useState([]);
    const [searchText, setSearchText] = useState("");

    const getQurans = async () => {
        const response  = await axios.get(`https://quran-api-id.vercel.app/surahs`);
        setQurans(response.data);
    }

    useEffect(() => {
        getQurans();
    }, [])

    const searchSurah = (e) => {
        const word = e.target.value

        setSearchText(word)
    }

    const GetDataQuran = () => {
        const filteredData = [];
        const filterText = searchText.toLowerCase()

        if(filterText.length > 0) {
            qurans.map((quran) => {
                if(quran['name'].toLowerCase().includes(filterText) ||
                quran['number'] === Number(filterText) || 
                quran['translation'].toLowerCase().includes(filterText)){
                    filteredData.push(quran)
                }
            })

            if(filteredData.length > 0){
                return(
                    filteredData.map((quran) => (
                        <Col key={quran.number} className="align-items-center">
                            <Link to={`/surah/${quran.number}`}>
                                <Card key={quran.number} style={{ width: '100%', minWidth: '250px', height: '300px'}} className="position-relative p-5 overflow-hidden border-success">
                                    <div key={`content-${quran.number}`} className="text-center link-success position-absolute top-50 start-50 translate-middle text-decoration-none">
                                        <Card.Title>
                                            <h1>
                                                {quran.number}
                                            </h1>
                                            <h4>
                                                {quran.name}
                                            </h4>
                                        </Card.Title>
                                        <Card.Text>
                                                {quran.translation}
                                        </Card.Text>
                                    </div>
                                </Card>
                            </Link>
                        </Col>
                    ))
                )
            } else if (filteredData.length === 0) {
                return(
                        <Col key={0} className="align-items-center">
                            <Card key={0} style={{ width: '100%', minWidth: '250px', height: '300px'}} className="position-relative p-5 overflow-hidden border-danger">
                                <div className="text-center text-danger position-absolute top-50 start-50 translate-middle">
                                    <Card.Title>
                                        <h3>
                                            Tidak Ada Nama Surat / Nomor Surat / Terjemahan Surat yang Sesuai
                                        </h3>
                                    </Card.Title>
                                    <Card.Text>
                                            Silahkan cari menggunakan kata-kata lain
                                    </Card.Text>
                                </div>
                            </Card>
                        </Col>
                )
            }
        } else if (filterText.length === 0) {
            return(
                qurans.map((quran) => (
                    <Col key={quran.number} className="align-items-center">
                        <Link to={`/surah/${quran.number}`}>
                            <Card key={quran.number} style={{ width: '100%', minWidth: '250px', height: '300px'}} className="position-relative p-5 overflow-hidden border-success">
                                <div key={`content-${quran.number}`} className="text-center link-success position-absolute top-50 start-50 translate-middle text-decoration-none">
                                    <Card.Title>
                                        <h1>
                                            {quran.number}
                                        </h1>
                                        <h4>
                                            {quran.name}
                                        </h4>
                                    </Card.Title>
                                    <Card.Text>
                                        {quran.translation}
                                    </Card.Text>
                                </div>
                            </Card>
                        </Link>
                    </Col>
                ))
            )
        }
    }

    return(
        <>
            <Helmet>
                <title>Quran Indonesia</title>
            </Helmet>
            <Container fluid className="text-success lh-lg">
                <HeaderPage/>
                <Container className="text-center mt-4">
                    <Form.Control type="text" onChange={searchSurah} placeholder="Ketik Nama / Nomor / Terjemahan Surat..." className="p-2 w-100 rounded overlap-input"></Form.Control>
                </Container>
                <Container className="my-3 justify-content-md-center">
                    <Row className="gap-3">
                        <GetDataQuran/>
                    </Row>
                </Container>
                <FooterPage/>
            </Container>
        </>
    )
}

export default MainPage