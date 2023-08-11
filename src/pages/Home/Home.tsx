import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Carousel } from 'react-responsive-carousel'
import './Home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import details from '../../details.js'
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
                <Row className='container width-100 flex justify-center'>
                    <Col>
                        <div className='flex flex-col align-items-center'>
                            <h1>{details.name}</h1>
                            <h2>{details.description}</h2>
                            {window.innerWidth <= 600 &&
                                <img width={'180px'} height={'140px'} src="./front-bag-main.png" alt=""></img>
                            }
                            <div className="white-divider"></div>
                        </div>

                    </Col>
                </Row>
                <Row className='container width-100 flex justify-space-evently'>
                    <Col>
                        <h2>{details.bagInfoName}</h2>
                        {details.bagInfoDetails.map((item, i) => {
                            return (
                                <div key={i}>
                                    <div className="flex align-items-center gap-5 cheked">
                                        <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/checked-radio-button.png" alt="checked-radio-button" />
                                        <h3>{item.name}</h3>
                                    </div>
                                    {item.description && (
                                        <ol>

                                            {item.description.map((item, key) => {
                                                return (<li><h5>{item}</h5></li>)
                                            })
                                            }

                                        </ol>
                                    )}

                                </div>
                            )
                        })}
                    </Col>
                    <Col>
                        <div className='img-container'>
                            {window.innerWidth > 600 &&
                                <img src="./kids-jood.png" alt=""></img>
                            }
                        </div>
                    </Col>
                </Row>
            </section>
        </React.Fragment>
    )
}
export default Home