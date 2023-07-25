import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from 'react-share';

const Footer = () => {

    return (
        <>
            <div id="footer" className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="d-flex">
                                <p>Stuttgart, Baden-W , Deutschland office 2021</p>
                            </div>
                            <div className="d-flex">
                                <a href="tel:+49 176 5697 234">+49(0)176 5697 234</a>
                            </div>
                            <div className="d-flex">
                                <p>luis@s4b-consulting.de</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-2 col-sm-6">
                            <div className="row">
                                <div className="col">
                                    <a className="footer-nav">Home</a>
                                    <br/>
                                    <a className="footer-nav">About</a>
                                    <br/>
                                    <a className="footer-nav">Services</a>
                                </div>
                                <div className="col">
                                    <a className="footer-nav">Experience</a>
                                    <br/>
                                    <a className="footer-nav">Portfolio</a>
                                    <br/>
                                    <a className="footer-nav">Contact</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                            <div className="social-icons-box">
                                <FacebookShareButton
                                url={"https://www.s4b-consulting.de"} 
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                <FacebookIcon className="mx-3" size={36} />
                                </FacebookShareButton>

                                <TwitterShareButton
                                url={"https://www.s4b-consulting.de"} 
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                <TwitterIcon className="mx-3" size={36} />
                                </TwitterShareButton>

                                <RedditShareButton
                                url={"https://www.s4b-consulting.de"} 
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                <RedditIcon className="mx-3" size={36} />
                                </RedditShareButton>
                                
                                <LinkedinShareButton
                                url={"www.linkedin.com/in/luis-higuera-serrano-web"} 
                                quote={"FullStack Developer"}
                                hashtag="#javascript"
                                >
                                <LinkedinIcon className="mx-3" size={36} />
                                </LinkedinShareButton>
                            </div>
                            <p className="pt-3 text-center">Copyright&copy;
                            {new Date().getFullYear()}&nbsp; New Horizont | All Rights Reserved</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Footer