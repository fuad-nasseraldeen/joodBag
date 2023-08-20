
import React, { ReactNode } from 'react'
import './Modal.css'
import { RiCloseLine } from 'react-icons/ri'
import * as classnames from 'classnames'
import { Col, Row } from 'react-bootstrap'

export interface OwnProps {
    headerContent: any
    setIsOpen: any
    width: string
    height?: string
    children?: ReactNode
}
const Modal = (props: OwnProps) => {
    return (
        <>
            <div className='darkBG' onClick={() => props.setIsOpen(false)} />
            <Row className='modal flex justify-center top'>
                <Col className='modal overflow' style={{ width: props.width, height: props.height }}>
                    <div className='modalHeader'>
                        <h5 className='heading'>{props.headerContent}</h5>
                    </div>
                    <button className='closeBtn' onClick={() => props.setIsOpen(false)}>
                        <RiCloseLine />
                    </button>
                    <div className='modalContent'>
                        {props.children}
                    </div>
                </Col>
                <Col className='modalActions' style={{ width: props.width }}>
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