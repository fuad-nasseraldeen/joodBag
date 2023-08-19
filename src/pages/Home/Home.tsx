import React, { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
// import { Carousel } from 'react-responsive-carousel'
import './Home.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import RevealScroll from '../../Utils/RevealScroll.tsx'
import Modal from '../../Utils/Modal/Modal.tsx'
import details from '../../details.js'
import Box3D from '../../3d/Three'
// import ThreeScene from '../../3d/Temps.tsx'
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
    const isMobile = window.innerWidth <= 450
    const [isLoading, setIsLoading] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
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
    const modal = () => {
        const headerContent = 'hackathon Idea'
        const modalBody = (
            <div className='flex flex-col items-center'>
                <div>
                    Our main objective is to provide agents with an efficient and seamless way to serve their customers, ensuring they receive the exceptional service they deserve. To achieve this, our system incorporates various features and widgets that enhance the overall customer experience.

                    By leveraging user-friendly widgets, we enable agents to navigate the system effortlessly and access important tools and information with ease. This saves time and improves their productivity, allowing them to focus on delivering top-notch assistance to customers.
                </div>
                <div className='thumbnail-container'>
                    <img src={'images/hackathon-memories/csr-homepage.png'} className='item-img' id='thumbnail' width={'500rem'} height={'500rem'} loading='lazy' alt='hackathon' />
                </div>

                One of the key advantages of using widgets is the ability to display real-time data. Agents can instantly retrieve customer information, track order status, or receive updates on support tickets, enabling them to provide accurate and up-to-date assistance. This empowers agents to deliver personalized and relevant support, leading to higher customer satisfaction.

                Furthermore, widgets can automate repetitive tasks and workflows, reducing manual effort and minimizing the chance of errors. This automation streamlines agent workflows, freeing up their time to handle more complex or critical customer inquiries. By simplifying processes, our system enables agents to work efficiently and effectively.
                <img src={'images/hackathon-memories/hackathon-csr-chat.png'} className='item-img' width={'500rem'} height={'500rem'} id='thumbnail' loading='lazy' alt='hackathon' />
                To ensure a consistent and professional brand experience, our widgets can be customized to align with your brand's look and feel. This allows for a cohesive user interface that reflects your brand identity, instilling trust and confidence in both agents and customers.
                Overall, our system's focus on agent efficiency and a smooth user experience contributes to improved customer satisfaction and loyalty. By continually gathering feedback and iteratively improving our widgets and features based on user needs, we ensure that our system evolves to meet the ever-changing demands of customer service.
            </div>
        )
        return (
            <div className='row z-index-999'>
                {isOpen &&
                    <Modal
                        setIsOpen={setIsOpen}
                        headerContent={headerContent}
                        position={position.top}
                        width={'110rem'}
                        height={'80rem'}
                    >
                        {modalBody}</Modal>}
            </div>
        )
    }
    return (
        <React.Fragment>
            <section id='home'>
                {modal()}
                <Row className='container flex justify-center'>
                    <Col>
                        <div className='flex flex-col align-items-center'>
                            <h1>{details.name}</h1>
                            <h2>{details.description}</h2>
                            {window.innerWidth <= 600 &&
                                <img width="250" height="180" src="./jood-bag-withoutBG-removebg-preview.png" alt=""></img>
                                // <Box3D />
                            }
                            {/* <div className="white-divider"></div> */}
                        </div>
                        {/* <img width={'180px'} height={'140px'} src="./front-bag-main.png" alt=""></img> */}
                    </Col>
                </Row>
                <Row className='container width-100 flex justify-space-evently'>
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
                                                return (
                                                    <div className="tooltip reveal fade-bottom card" onClick={() => setIsOpen(true)}>
                                                        <RevealScroll>
                                                            <span className="tooltiptext">اضغط لعرض التفاصيل</span>
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