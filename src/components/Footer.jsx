import React from 'react'
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaTelegram
} from "react-icons/fa"

const Footer = () => {

    const footerlinks=[
        {
            name:"Facebook",
            icon:<FaFacebook/>,
            href:"#"
        },
        {
            name:"Twitter",
            icon:<FaTwitter/>,
            href:"#"
        },
        {
            name:"Instagram",
            icon:<FaInstagram/>,
            href:"#"
        },
        {
            name:"Telegram",
            icon:<FaTelegram/>,
            href:"#"
        },
    ]
  return (
    <footer className='bg-gray-900 text-white text-center py-2'>
        <p>🌍© 2025 My Website, All rights Reserved</p>
        <ul className='flex space-x-4 mt-2 justify-center *:hover:text-blue-400 *:hover:underline'>
            {footerlinks.map((link,index)=>(
                <li className='' key={index}>
                    <a className='flex items-center gap-1' href={link.href}>
                    {link.icon}
                    {link.name}
                    </a>
                    
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer