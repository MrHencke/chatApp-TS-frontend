import React from 'react'
import '../../assets/scss/Footer.scss'

const Footer = () => {
    return (

        <footer className='py-4 mt-auto text-center'>
        <div className='text-md-center'>
            <p className='font-size-sm mb-0 mr-3 order-md-1'>
                <span className='text-muted mr-1'>
                    © {new Date().getFullYear()} - Chat App
                </span>
            </p>
        </div>
    </footer>
    )
}

export default Footer
