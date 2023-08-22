import React from 'react'
import { ImSpinner9 } from 'react-icons/im'
import './Spinner.css'
import RevealScroll from '../RevealScroll.tsx'
export interface State {
}

export interface Props {
    size: string
}

export class Spinner extends React.Component<Props, State> {

    render() {
        return (
            <div className="spinner-darkBG">
                {/* <div className={`spinner-center ${this.props.size}`}>
                    <ImSpinner9 />
                </div> */}

                <RevealScroll>
                    <div className="center-logo reveal fade-bottom">
                        <img
                            width={window.innerWidth}
                            height='250'
                            src='./logo/just-logo-removebg-preview.png'
                            alt=''
                        ></img>
                    </div>
                </RevealScroll>
            </div>

        )
    }
}
export default Spinner