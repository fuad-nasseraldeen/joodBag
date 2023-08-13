import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import joodDetails from '../../details'
import './Nav.css'


function NavBar() {
    return (
        <Navbar
            fixed='top'
            expand='md'
            bg='dark'
            className='navbar'
        >
            <div className='flex justify-space-evently'>
                <Navbar.Brand href='/' className='flex fixed-top'>
                    {/* <img src='https://avatars.githubusercontent.com/u/26096712?s=400&u=6ca6d2e7c943e33c1c6bdb0a6ad229db4598366a&v=4' className='img-fluid logo' alt='brand' /> */}
                    <div className='logo' >
                        <span>حيسن جبر  </span>
                        <span> اخصائية علاج وظيفي</span>
                    </div>
                </Navbar.Brand>
                <div className="flex gap-10 align-items-center padding-left padding-top">
                    <span className='contactUs'>تابعونا</span>
                    {joodDetails && joodDetails.socialLinks.map((item, key) => {
                        return (
                            <Nav.Item>
                                <a
                                    href={item!.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className=''
                                >
                                    <img src={item!.img} width={18} className='margin-whatsapp' alt='whatsapp' />
                                </a>
                            </Nav.Item>
                        )
                    })}
                </div>
            </div>

        </Navbar>
    )
}
export default NavBar

