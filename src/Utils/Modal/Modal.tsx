
import React, { ReactNode, useEffect, useState } from 'react'
import './Modal.css'
import { RiCloseLine } from 'react-icons/ri'
import * as classnames from 'classnames'
import { Col, Row } from 'react-bootstrap'

export interface OwnProps {
    headerContent: any
    setIsOpen: any
    position: string
    width: string
    height: string
    children?: ReactNode
}
const Modal = (props: OwnProps) => {
    const className = classnames('flex', props.position)
    const [modalWidth, setModalWidth] = useState(getModalWidth())

    function getModalWidth() {
        const windowWidth = window.innerWidth
        if (windowWidth <= 768) {
            // Mobile view
            return '90%' // Adjust the value as per your requirement
        } else
            // Tablet view
            return '90%' // Adjust the value as per your requirement

    }
    useEffect(() => {
        function handleWindowResize() {
            setModalWidth(getModalWidth());
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        };
    }, []);
    const padding = window.innerWidth < 900 ? '40px' : ''
    return (
        <>
            <div className='darkBG' onClick={() => props.setIsOpen(false)} />
            <Row className={className}>
                <Col className='modal overflow' style={{ width: modalWidth, height: props.height }}>
                    <div className='modalHeader'>
                        <h5 className='heading'>{props.headerContent}</h5>
                    </div>
                    <button className='closeBtn' onClick={() => props.setIsOpen(false)}>
                        <RiCloseLine style={{ marginBottom: '-3px' }} />
                    </button>
                    <div className='modalContent'>
                        {props.children}
                    </div>
                </Col>
                <Col className='modalActions' style={{ width: modalWidth }}>
                    <div className='actionsContainer'>
                        <button className='okBtn' onClick={() => props.setIsOpen(false)}>
                            Ok
                        </button>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Modal