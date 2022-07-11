import './SocialLinks.css'
import linkedin from '../Images/linkedin.svg'
import facebook from '../Images/facebook.svg'
import github from '../Images/github.svg'
import { useEffect } from 'react'

const SocialLinks = () => {

    const presentationHeight = document.querySelector('#HeaderOnClick')

    useEffect(() => {
        console.log(presentationHeight)
    })

    return(
        <section  id="socialLinksContainer">
            <p id="socialLinks">
                <a href="https://www.linkedin.com/in/olivier-hayot/"><img src={linkedin} className="socialImage" alt={"Linkedin logo"}/></a>
                <a href="https://www.facebook.com/olivier.hayot.52"><img src={facebook} className="socialImage" alt={"Facebook logo"}/></a>
                <a href="https://github.com/h0livier"><img src={github} className="socialImage" alt={"Github Logo"}/></a>
            </p>
        </section>
    )
}

export default SocialLinks