import { Container } from "react-bootstrap"
import FooterPage from "./footerPage";
import HeaderPage from "./headerPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
    return(
        <>
            <Helmet>
                <title>Halaman Tidak Ditemukan - Quran Indonesia</title>
            </Helmet>
            <Container className="text-success lh-lg text-center">
                <HeaderPage/>
                <Container className="my-5">
                    <h1>
                        Halaman Tidak Ditemukan!
                    </h1>
                    <p>
                        Silahkan kembali ke <a href="./" className="text-decoration-none">halaman utama</a>...
                    </p>
                </Container>
                <FooterPage/>
            </Container>
        </>
    )
}

export default NotFoundPage;