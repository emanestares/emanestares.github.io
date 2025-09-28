import React from 'react'

export const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <p className='text-white-500 max-md:text-xs'>© 2025 Emman Estares. All Rights Reserved</p>
        <div className="flex gap-2 max-md:gap-1">
            <a
                href="https://github.com/emanestares"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="/assets/github.png" alt="github" className="w-1/2 h-1/2 max-md:w-1/3 max-md:h-1/3" />
            </a>

            <a
                href="https://www.linkedin.com/in/frederick-emmanuel-estares-566820245/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 max-md:w-1/3 max-md:h-1/3" />
            </a>

            <a
                href="https://www.facebook.com/eman.estares"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
            >
                <img src="/assets/facebook.png" alt="facebook" className="w-1/2 h-1/2 max-md:w-1/3 max-md:h-1/3" />
            </a>
        </div>
        
    </section>
  )
}

export default Footer;