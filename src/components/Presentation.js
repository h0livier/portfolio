import './Presentation.scss'
import logo from '../Images/Olivier_carre.jpg'
import cv from '../Documents/Hayot_CV.pdf'

const Presentation = () => {

    /*const informations = [
        {key: 'mail', value: 'olivier.hayot.dev@gmail.com'}, 
        {key: 'phoneNumber', value: '0471646015'}
    ]*/

    return(
        <div id="presentationContainer">
            <div id="preBackgroundContainer">
                <div id="preBackground"></div>
            </div>
            <div id="presentation">
                <div className="text">
                    <h1>Hey, I'm Olivier.</h1>
                    <p>Junior Web Developer from Belgium<br />I would be pleased to join your team as a <span id="workName">Developer</span>.</p>
                    <div>
                        <p id="CVDownloadButton"><a href={cv} download={"Olivier_Hayot_CV.pdf"}>Download CV</a></p>
                    </div>
                </div>
                <figure id="pictureContainer">
                    <img src={logo} alt={"me"} />
                </figure>
            </div>
        </div>
    )

}

export default Presentation