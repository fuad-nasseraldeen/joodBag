import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel'
import './Home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import RevealScroll from '../../Utils/RevealScroll.tsx'
import Modal from '../../Utils/Modal/Modal.tsx'
import details from '../../details.js'
import Box3D from '../../3d/Three'
// import ThreeScene from '../../3d/Temps.tsx'
import ReactPlayer from 'react-player'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
// @ts-ignore
import Spinner from '../../Utils/Spinner/Spinner.tsx'
// // @ts-ignore
// import ScrollToTop from '../../utils/ScrollToTop.tsx'
// // @ts-ignore 
// import Main from '../Main/Main.tsx'


export interface OwnProps {
}

const Home = (props: OwnProps) => {
    const isMobile = window.innerWidth <= 450
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    const [professionalName, setProfessionalName] = useState('')
    const [indexOfTheBook, setIndexOfTheBook] = useState(0)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1600)
    })


    const prepareModal = (name, index) => {
        if (name === 'book') {
            setIsOpen(!isOpen)
            setProfessionalName(name)
            setIndexOfTheBook(index)
        }

    }
    const setIsOpenAndIndex = () => {
        setIsOpen(false)
        setIndexOfTheBook(0)
    }
    function ImageCarousel({ images, width }) {

        return (
            <div dir='ltr'>
                <Carousel>
                    {images.map((img, index) => (
                        <div key={index}>
                            <img src={img} className='flex justify-center width-100' id='thumbnail' loading='lazy' alt='book' />
                        </div>
                    ))}
                </Carousel>
            </div>
        );
    }

    function ImageComponent({ images, width }) {
        if (images.length > 1) {
            return <ImageCarousel images={images} width={width} />;
        } else {
            return <img src={images[0]} className='img-center width-100' id='thumbnail' loading='lazy' alt='book' />;
        }
    }
    const modal = () => {
        const width = window.innerWidth - (window.innerWidth * 0.0)
        const headerContent = details.bagInfoDetails.find(item => item.professionalName === 'book')?.nameOfTheBooks?.[indexOfTheBook - 1]
        const description = details.bagInfoDetails.find(item => item.professionalName === 'book')?.description
        const bookVideo = `./book/details/book${indexOfTheBook}.mp4`

        const modalBody = (
            <div className='flex flex-col items-center padding'>
                <span>المحتويات</span>
                <div>
                    {description?.map((images, index) => (
                        indexOfTheBook - 1 === index && <ImageComponent key={index} images={images} width={width} />
                    ))}
                </div>
                <div className="padding"></div>
                <span>الشرح</span>
                <Col xs={12} sm={12} md={12} className='flex justify-center'>
                    <ReactPlayer key='unique-key' url={bookVideo} playing={false} controls />
                    {/* <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vR0MXv32W_pBzaAnQRs7A88Ix-Xp9DsMxPyp1xMcmTa8syFnflJ7m506SZfElcs8w/embed?start=true&loop=true&delayms=2000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe> */}
                </Col>
            </div>
        )
        return (
            <div className='row z-index-999'>
                {isOpen &&
                    <Modal
                        setIsOpen={setIsOpenAndIndex}
                        headerContent={headerContent}
                        width={width + 'px'}
                    >
                        {modalBody}</Modal>}
            </div>
        )
    }

    return (
        <React.Fragment>
            {isLoading ? (<Spinner size='medium'></Spinner>) : (
                <section id='home'>
                    {modal()}
                    <RevealScroll>
                        <Row className='container flex justify-center reveal fade-left'>
                            <Col>
                                <div className='flex flex-col align-items-center'>
                                    <h1>{details.name}</h1>
                                    <h2>{details.description}</h2>
                                    {window.innerWidth <= 600 &&
                                        <div className='flex' style={{ position: 'relative' }}>
                                            <img width="250" height="180" src="./jood-bag-withoutBG-removebg-preview.png" alt=""></img>
                                            <img
                                                width="120px"
                                                height="120px"
                                                src="./money.png"
                                                alt=""
                                                style={{
                                                    position: 'absolute',
                                                    top: '-20px',
                                                    left: '240px'
                                                }}
                                            ></img>
                                        </div>
                                        // <Box3D />
                                    }
                                    <div className="flex  shekel">

                                        {/* <span>سعر الحقيبة: 220 </span> */}
                                        {/* <img width="20" height="20" src="https://img.icons8.com/material-outlined/24/shekel.png" alt="shekel" /> */}
                                    </div>
                                    {/* <div className="white-divider"></div> */}
                                </div>
                                {/* <img width={'180px'} height={'140px'} src="./front-bag-main.png" alt=""></img> */}
                            </Col>
                        </Row>
                    </RevealScroll>
                    <Row className='container width-100 flex justify-space-evently'>
                        <Col>
                            <h2>{details.bagInfoName}</h2>
                            {details.bagInfoDetails.map((item, i) => {
                                return (
                                    <div key={i} className=''>
                                        <div className="flex align-items-center gap-5 cheked">
                                            <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/checked-radio-button.png" alt="checked-radio-button" />
                                            <h3>{item.name}</h3>
                                            <img
                                                src={item.icon}
                                                width={'40px'}
                                                alt=''
                                            ></img>
                                        </div>
                                        <div className="flex justify-center gap-10 flex-wrap">
                                            {item.url && (

                                                item.url.map((entity, i) => {
                                                    return (
                                                        <div className={`tooltip ${item.fade} reveal card`} onClick={() => prepareModal(item.professionalName, i + 1
                                                        )}>
                                                            <RevealScroll>
                                                                {item.professionalName === 'book' && <span className="tooltiptext">اضغط لعرض التفاصيل</span>}
                                                                <img
                                                                    width={isMobile ? (parseInt(item.width) * item.mobileDemention) + 'px' : item.width + 'px'}
                                                                    height={isMobile ? (parseInt(item.height) * item.mobileDemention) + 'px' : item.height + 'px'}
                                                                    src={entity} alt="" >

                                                                </img>
                                                            </RevealScroll>
                                                        </div>
                                                    )
                                                })
                                            )
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                    </Row>
                    <div className="white-divider"></div>
                    <div className="flex justify-center align-items-center">
                        <span className='span-book'>محتويات الحقيبة</span>
                        <img
                            src='./box-of-book.png'
                            width={'60px'}
                            alt=''
                        ></img>
                    </div>
                    <Col xs={12} sm={12} md={12} className='flex justify-center'>
                        <div className="border-radius"><ReactPlayer style={{ borderRadius: '16px' }} key='unique-key' width={'100%'} height={'75%'} url={'./jood-bag-details.mp4'} playing={false} controls /></div>
                    </Col>

                    <div className="note">
                        <ol>
                            <img
                                className='margin-top-70'
                                src='./note4.png'
                                width={'100px'}
                                alt=''
                            ></img>
                            <li>
                                <div className="wts flex align-items-center">
                                    <span>للتواصل معنا عبر الواتس اب الرجاء الضغط على الرابط ادناه</span>
                                    <a
                                        href={details.whatsapp.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className=''
                                    >
                                        <img src={details.whatsapp.img} width={28} className='margin-whatsapp' alt='whatsapp' />
                                    </a>
                                </div>
                            </li>

                            <span className='bold'> طرق الدفع المتوفرة :</span>
                            <li>Bit</li>
                            <li>نقدي لمندوب التوصيل</li>
                            <li>تحويل بنكي</li>
                        </ol>
                    </div>
                </section>
            )}
        </React.Fragment >
    )
}
export default Home