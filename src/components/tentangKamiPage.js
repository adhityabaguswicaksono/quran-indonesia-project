import { Container } from "react-bootstrap"
import FooterPage from "./footerPage";
import HeaderPage from "./headerPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import '../style/arabicFont.css';

const TentangKamiPage = () => {
    return(
        <>
            <Helmet>
                <title>Tentang Kami - Quran Indonesia</title>
            </Helmet>
            <Container className="text-success lh-lg">
                <HeaderPage/>
                <Container className="my-5">
                    <div className="text-center mb-5">
                        <h1>Tentang Kami</h1>
                    </div>
                    <div className="text-center">
                        <h4 dir="rtl" className="arabic-font mb-3">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h4>
                        <p>Perkenalkan, saya <a href="https://github.com/adhityabaguswicaksono" className="text-decoration-none">Adhitya Bagus Wicaksono</a> sebagai pembuat web Quran Indonesia.
                            Web ini diperuntukan bagi setiap umat Islam yang ingin membaca al-Quran dan terjemahannya, membaca tafsir al-Quran, serta mendengarkan pembacaan ayat suci al-Quran.
                            Sumber yang saya gunakan untuk mendapatkan ayat al-Quran dalam web ini menggunakan sebuah aset yang berasal 
                            dari <a href="https://github.com/renomureza/quran-api-id/" className="text-decoration-none">Quran API ID</a> oleh <a href="https://github.com/renomureza" className="text-decoration-none">Renova M. Reza</a> berdasarkan 
                            terjemahan dari web resmi <a href="https://quran.kemenag.go.id/" className="text-decoration-none">Quran Kementerian Agama Republik Indonesia</a>.
                            Web ini dibuat menggunakan <i>framework</i> CSS <a href="https://getbootstrap.com/" className="text-decoration-none">Bootstrap</a> dan <i>framework</i> JavaScript <a href="https://reactjs.org/" className="text-decoration-none">React JS</a> selama 7 hari.
                        </p>
                        <p>
                            Semoga dengan adanya web ini, pengguna dapat mudah untuk membaca dan memahami kandungan makna dari al-Quran yang penuh dengan hikmah.
                        </p>
                        <p>
                            Sekian dari saya. Terima kasih telah mempercayakan web ini sebagai sarana untuk menuntut ilmu dan mendapatkan pahala oleh setiap pengguna.
                        </p>
                        <h4 dir="rtl" className="arabic-font mt-3">السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ</h4>
                    </div>
                </Container>
                <FooterPage/>
            </Container>
        </>
    )
}

export default TentangKamiPage;
