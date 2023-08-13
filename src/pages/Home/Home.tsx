import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Carousel } from 'react-responsive-carousel'
import './Home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import details from '../../details.js'
import Box3D from '../../3d/Three'
import ThreeScene from '../../3d/Temps.tsx'
// import ReactPlayer from 'react-player'
// import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'
// // @ts-ignore
// import Spinner from '../../layouts/Spinner/Spinner.tsx'
// // @ts-ignore
// import ScrollToTop from '../../utils/ScrollToTop.tsx'
// // @ts-ignore
// import Main from '../Main/Main.tsx'


export interface OwnProps {
}

const Home = (props: OwnProps) => {
    const isMobile = window.innerWidth <= 600
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 10)
    })


    const header = () => {
        return (
            <div className='headedr'>
                {/* <img width='64' height='64' src='https://img.icons8.com/fluency/48/boy.png' alt='external-hackathon-computer-science-flaticons-flat-flat-icons' />
                <h1>حقيبة جود</h1> */}
            </div>
        )
    }

    return (
        <React.Fragment>
            <section id='home'>
                <Row className='container flex justify-center'>
                    <Col>
                        <div className='flex flex-col align-items-center'>
                            <h1>{details.name}</h1>
                            <h2>{details.description}</h2>
                            {window.innerWidth <= 600 &&
                                <img width="250" height="180" src="./jood-bag-withoutBG-removebg-preview.png" alt=""></img>
                                // <Box3D />
                            }
                            <div className="white-divider"></div>
                        </div>
                        {/* <img width={'180px'} height={'140px'} src="./front-bag-main.png" alt=""></img> */}
                    </Col>
                </Row>
                <Row className='card container width-100 flex justify-space-evently'>
                    <Col>
                        <h2>{details.bagInfoName}</h2>
                        {details.bagInfoDetails.map((item, i) => {
                            return (
                                <div key={i} className=''>
                                    <div className="flex align-items-center gap-5 cheked">
                                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/checked-radio-button.png" alt="checked-radio-button" />
                                        <h3>{item.name}</h3>
                                    </div>
                                    <h4>{item.description}</h4>
                                    <div className="flex justify-center gap-10 flex-wrap">
                                        {item.url && (

                                            item.url.map((entity, i) => {
                                                return (<img className="card" width={item.width} height={item.height} src={entity
                                                } alt="" ></img>)
                                            })


                                        )
                                        }
                                    </div>

                                </div>
                            )
                        })}
                    </Col>
                    {/* <Col>
                        <div className='img-container'>
                            {window.innerWidth > 600 &&
                                // <img src="./kids-jood.png" alt=""></img>
                                <Box3D />
                            }
                        </div>
                    </Col> */}
                </Row>
            </section>
        </React.Fragment >
    )
}
export default Home