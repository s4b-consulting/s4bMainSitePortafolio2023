import netflix from '../images/netflix.png';
import cityGuide from '../images/city-guide-app.png';
import portfolio from '../images/portfolio.png';
import taskManager from '../images/task-manager.png';
//FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';
//REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

    //Netflix
    const openPopupboxNetflix = () => {

        const content = (
            <>
                <img className="porfolio-image-popupbox" src={netflix} alt="Netflix clone project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum voluptatem asperiores ut! Tenetur,
                    commodi aliquid nihil tempora doloremque dicta eius facilis dignissimos ducimus quae earum doloribus numquam
                    adipisci nobis.</p>
                <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>live...</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>To my Github project here...</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigNetflix = {
        titleBar: {
            enable: true,
            text: "Netflix Clone Project."
        },
        faIn: true,
        fadeInSpeed: 500
    }

    //City Guide
    const openPopupboxCityGuide = () => {

        const content = (
            <>
                <img className="porfolio-image-popupbox" src={cityGuide} alt="City Guide project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum voluptatem asperiores ut! Tenetur,
                    commodi aliquid nihil tempora doloremque dicta eius facilis dignissimos ducimus quae earum doloribus numquam
                    adipisci nobis.</p>
                <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>live...</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>To my Github project here...</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigCityGuide = {
        titleBar: {
            enable: true,
            text: "City Guide Project."
        },
        faIn: true,
        fadeInSpeed: 500
    }

    //Portfolio project
    const openPopupboxPortfolio = () => {

        const content = (
            <>
                <img className="porfolio-image-popupbox" src={portfolio} alt="City Guide project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum voluptatem asperiores ut! Tenetur,
                    commodi aliquid nihil tempora doloremque dicta eius facilis dignissimos ducimus quae earum doloribus numquam
                    adipisci nobis.</p>
                <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>live...</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>To my Github project here...</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigPortfolio = {
        titleBar: {
            enable: true,
            text: "Portfolio Project."
        },
        faIn: true,
        fadeInSpeed: 500
    }

    //Task Manager project
    const openPopupboxTaskManager = () => {

        const content = (
            <>
                <img className="porfolio-image-popupbox" src={taskManager} alt="Task Manager project" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam nostrum voluptatem asperiores ut! Tenetur,
                    commodi aliquid nihil tempora doloremque dicta eius facilis dignissimos ducimus quae earum doloribus numquam
                    adipisci nobis.</p>
                <b>Demo:</b><a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>live...</a>
                <br />
                <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://s4b-consulting.de", "_blank")}>To my Github project here...</a>
            </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigTaskManager = {
        titleBar: {
            enable: true,
            text: "Task Manager Project."
        },
        faIn: true,
        fadeInSpeed: 500
    }

    return (
        <>
            <div id="portfolio" className="portfolio-wrapper">
                <div className="container">
                    <h1 className="text-uppercase text-center py-5">portfolio</h1>
                    {/* <div className="image-box-wrapper d-flex flex-row justify-content-center"> */}
                    <div className="image-box-wrapper">

                        <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
                            <img className="portfolio-image" src={netflix} alt="netflix project pic" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        {/* - */}

                        <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
                            <img className="portfolio-image" src={cityGuide} alt="cityGuide project pic" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        {/* - */}

                        <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
                            <img className="portfolio-image" src={portfolio} alt="portfolio project pic" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>

                        {/* - */}

                        <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
                            <img className="portfolio-image" src={taskManager} alt="Task Manager Project pic" />
                            <div className="overflow"></div>
                            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                        </div>
                    </div>

                </div>
                <PopupboxContainer {...popupboxConfigNetflix} />
                <PopupboxContainer {...popupboxConfigCityGuide} />
                <PopupboxContainer {...popupboxConfigPortfolio} />
                <PopupboxContainer {...popupboxConfigTaskManager} />


            </div>

        </>
    )

}

export default Portfolio