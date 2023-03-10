import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Form, ToggleButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderPage from "./headerPage";
import FooterPage from "./footerPage";
import '../style/arabicFont.css';
import { Helmet } from "react-helmet";
import '../style/style.css';

const SurahPage = () => {
    const [oneSurah, getOneSurah] = useState();
    const [isWithTranslate, getIsWithTranslate] = useState(false);
    const [isWithTafseer, getIsWithTafseer] = useState(false);
    const [selectTafseer, getSelectTafseer] = useState('');
    const [isWithMurottal, getIsWithMurottal] = useState(false);
    const [selectMurottal, getSelectMurottal] = useState('');
    const {surah_id} = useParams();

    const getOneSurahData = async () => {
        try {
            const response = await axios.get(`https://quran-api-id.vercel.app/surahs/${surah_id}`);
            getOneSurah(response.data);
        } catch(err) {
            console.error(err);
        }
    }
    
    const clickTranslate = () => {
        getIsWithTranslate(!isWithTranslate)
    }
    
    const clickTafseer = () => {
        if (!isWithTafseer) {
            getIsWithTafseer(!isWithTafseer)
            getSelectTafseer('0')
        } else {
            getIsWithTafseer(!isWithTafseer)
            getSelectTafseer('')
        }
    }
    
    const clickMurottal = () => {
        if (!isWithMurottal) {
            getIsWithMurottal(!isWithMurottal)
            getSelectMurottal('0')
        } else {
            getIsWithMurottal(!isWithMurottal)
            getSelectMurottal('')
        }
    }
    
    const generateTafseer = (element, index) => {
        if(selectTafseer === "0") {
            return(
                <div key={`tafsir-${index}-${selectTafseer}`} style={{ textAlign: 'justify' }}>
                    <p><b>Tafsir Kemenag</b></p>
                    <p>{element['tafsir']['kemenag']['long']}</p>
                </div>
            )
        } else if(selectTafseer === "1") {
            return(
                <div key={`tafsir-${index}-${selectTafseer}`} style={{ textAlign: 'justify' }}>
                    <p><b>Tafsir Quraish</b></p>
                    <p>{element['tafsir']['quraish']}</p>
                </div>
            )
        } else if(selectTafseer === "2") {
            return(
                <div key={`tafsir-${index}-${selectTafseer}`} style={{ textAlign: 'justify' }}>
                    <p><b>Tafsir Jalalain</b></p>
                    <p>{element['tafsir']['jalalayn']}</p>
                </div>
            )
        }
    }

    const generatePartialMurottal = (element, idSurah) => {
        const numberAyahPre = String(element['number']['inSurah'])
        let numberSurah = ''
        let numberAyah = ''
    
        if(idSurah.length === 1){
            numberSurah = `00${idSurah}`
        } else if (idSurah.length === 2){
            numberSurah = `0${idSurah}`
        } else if(idSurah.length === 3){
            numberSurah = `${idSurah}`
        }
    
        if(numberAyahPre.length === 1){
            numberAyah = `00${numberAyahPre}`
        } else if (numberAyahPre.length === 2){
            numberAyah = `0${numberAyahPre}`
        } else if(numberAyahPre.length === 3){
            numberAyah = `${numberAyahPre}`
        }
    
        if(selectMurottal === "0") {
            return(
                <audio controls key={`murottal-partial-${selectMurottal}-${numberAyah}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-partial/Abdullah-Al-Juhany/${numberSurah}${numberAyah}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "1") {
            return(
                <audio controls key={`murottal-partial-${selectMurottal}-${numberAyah}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-partial/Abdul-Muhsin-Al-Qasim/${numberSurah}${numberAyah}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "2") {
            return(
                <audio controls key={`murottal-partial-${selectMurottal}-${numberAyah}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-partial/Abdurrahman-as-Sudais/${numberSurah}${numberAyah}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "3") {
            return(
                <audio controls key={`murottal-partial-${selectMurottal}-${numberAyah}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-partial/Ibrahim-Al-Dossari/${numberSurah}${numberAyah}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "4") {
            return(
                <audio controls key={`murottal-partial-${selectMurottal}-${numberAyah}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-partial/Misyari-Rasyid-Al-Afasi/${numberSurah}${numberAyah}.mp3`} type="audio/mp3"/>
                </audio>
            )
        }
    }
    
    const generateFullMurottal = (idSurah) => {
        let number = ''
    
        if(idSurah.length === 1){
            number = `00${idSurah}`
        } else if (idSurah.length === 2){
            number = `0${idSurah}`
        } else if(idSurah.length === 3){
            number = `${idSurah}`
        }
    
        if(selectMurottal === "0") {
            return(
                <audio controls key={`murottal-full-${selectMurottal}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-full/Abdullah-Al-Juhany/${number}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "1") {
            return(
                <audio controls key={`murottal-full-${selectMurottal}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-full/Abdul-Muhsin-Al-Qasim/${number}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "2") {
            return(
                <audio controls key={`murottal-full-${selectMurottal}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-full/Abdurrahman-as-Sudais/${number}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "3") {
            return(
                <audio controls key={`murottal-full-${selectMurottal}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-full/Ibrahim-Al-Dossari/${number}.mp3`} type="audio/mp3"/>
                </audio>
            )
        } else if(selectMurottal === "4") {
            return(
                <audio controls key={`murottal-full-${selectMurottal}`} className="w-100">
                    <source src={`https://equran.nos.wjv-1.neo.id/audio-full/Misyari-Rasyid-Al-Afasi/${number}.mp3`} type="audio/mp3"/>
                </audio>
            )
        }
    }
    
    const checkJuz = (index) => {
        if(index === 0){
            return(
                <div key={`juz-${oneSurah['ayahs'][index]['meta']['juz']}`} className="text-center">
                    <h2>&#10629; Juz {oneSurah['ayahs'][index]['meta']['juz']} &#10630;</h2>
                    <hr/>
                </div>
            )
        } else if(oneSurah['ayahs'][index]['meta']['juz'] !== oneSurah['ayahs'][index-1]['meta']['juz']){
            return(
                <div key={`juz-${oneSurah['ayahs'][index]['meta']['juz']}`} className="text-center">
                    <h2>&#10629; Juz {oneSurah['ayahs'][index]['meta']['juz']} &#10630;</h2>
                    <hr/>
                </div>
            )
        }
    }
    
    const ConvertToArabicNumbers = (num) => {
        const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
        return String(num).replace(/[0123456789]/g, (d) => {return arabicNumbers[d]});
    }

    useEffect(() => {
        getOneSurahData();
    }, [])

    return(
            (typeof oneSurah !== 'undefined') &&
            <>
                <Helmet>
                    <title>Surah {oneSurah['name']} - Quran Indonesia</title>
                </Helmet>
                <Container fluid className="text-success lh-lg">
                    <HeaderPage/>
                    <Container className="py-5 text-center">
                        <h1 className="mb-3">
                            {oneSurah['name']} ({oneSurah['translation']})
                        </h1>
                        <h4 className="mb-3">
                            Surat ke-{oneSurah['number']} ({oneSurah['numberOfAyahs']} Ayat)
                        </h4>
                        <p>
                            {oneSurah['description']}
                        </p>
                        {
                            generateFullMurottal(surah_id)
                        }
                    </Container>
                    <Container>
                        <Row className="gap-3">
                            <Col className="text-center w-100 align-self-center" style={{minWidth: '250px'}}>
                                <ToggleButton
                                    id="checkTranslate"
                                    type="checkbox"
                                    variant="outline-success"
                                    onChange={clickTranslate}
                                    checked={isWithTranslate}
                                    className="w-100 mb-2">
                                    {isWithTranslate ? "Dengan Terjemahan" : "Tanpa Terjemahan" }
                                </ToggleButton>
                            </Col>
                            <Col className="text-center w-100 align-self-center" style={{minWidth: '250px'}}>
                                    <ToggleButton
                                        id="checkTafseer"
                                        type="checkbox"
                                        variant="outline-success"
                                        onChange={clickTafseer}
                                        checked={isWithTafseer}
                                        className="w-100 mb-2">
                                        {isWithTafseer ? "Dengan Tafsir" : "Tanpa Tafsir" }
                                    </ToggleButton>
                                    {isWithTafseer === true && (
                                        <Form.Select name="tafsir" onChange={(e) => getSelectTafseer(e.target.value)} defaultValue={selectTafseer} className="text-success border-success overlap-input">
                                            <option value="0">Tafsir Kemenag</option>
                                            <option value="1">Tafsir Quraish</option>
                                            <option value="2">Tafsir Jalalain</option>
                                        </Form.Select>
                                        )
                                    }
                            </Col>
                            <Col className="text-center w-100 align-self-center" style={{minWidth: '250px'}}>
                                    <ToggleButton
                                        id="checkMurottal"
                                        type="checkbox"
                                        variant="outline-success"
                                        onChange={clickMurottal}
                                        checked={isWithMurottal}
                                        className="w-100 mb-2">
                                        {isWithMurottal ? "Dengan Audio" : "Tanpa Audio" }
                                    </ToggleButton>
                                    <br/>
                                    {isWithMurottal === true && (
                                        <Form.Select name="murottal" onChange={(e) => getSelectMurottal(e.target.value)} defaultValue={selectMurottal} className="text-success border-success overlap-input">
                                            <option value="0">Syekh Abdullah al-Juhany</option>
                                            <option value="1">Syekh Abdul Muhsin al-Qasim</option>
                                            <option value="2">Syekh Abdurrahman as-Sudais</option>
                                            <option value="3">Syekh Ibrahim al-Dossari</option>
                                            <option value="4">Syekh Misyari Rasyid al-Afasi</option>
                                        </Form.Select>
                                        )
                                    }
                            </Col>
                        </Row>
                        <hr/>
                    </Container>
                    <Container>
                        {
                            (oneSurah['number'] !== 1 && oneSurah['number'] !== 9) && 
                            <div key={"bismillah"} className="text-center lh-lg">
                                <h3 className="p-2 arabic-font">{oneSurah['bismillah']['arab']}</h3>
                                {isWithTranslate === true &&
                                    <p className="p-2">{oneSurah['bismillah']['translation']}</p>
                                }
                                <hr/>
                            </div>
                        }
                    </Container>
                    <Container>
                        {oneSurah['ayahs'].map((element, index) => (
                            <>
                            {
                                checkJuz(index)
                            }
                            <div key={`ayat-${index}`}>
                                <h3 dir="rtl" className="lh-lg arabic-font" >{element['arab']} <span className="arabic-number">{ConvertToArabicNumbers(element['number']['inSurah'])}</span></h3>
                                {isWithTranslate === true &&
                                    <div>
                                        <p><b>Terjemahan</b></p>
                                        <p style={{textAlign: 'justify'}}>{element['translation']}</p>
                                    </div>
                                }
                                {
                                    generateTafseer(element, index)
                                }
                                {
                                    generatePartialMurottal(element, surah_id)
                                }
                                <hr/>
                            </div>
                            </>
                        ))}
                    </Container>

                    <FooterPage/>
                </Container>
            </>
    )
}

export default SurahPage;