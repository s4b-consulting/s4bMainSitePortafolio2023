import {FontAwesomeIcon, faAreaChart} from '@fortawesome/react-fontawesome';
import {faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons';
import { faDesktop, faFileCode, faBusinessTime, faChartArea } from '@fortawesome/free-solid-svg-icons';


const Services = () => {

    return (
        <>
            <div id="services" className="services">
                <h1 className="py-5">my services</h1>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                                <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x"/>
                                </div>
                                <h3>Web Design</h3>
                                <p>We approach each project individually and always focus on the results.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x"/>
                                </div>
                                <h3>Web Development</h3>
                                <p>Your Application will be build with new proven technologies.</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faBusinessTime} size="2x"/>
                                </div>
                                <h3>Process Managemet</h3>
                                <p>Your Business will achieve a clear competitive advantage via process optimization</p>
                            </div>
                        </div>
                        {/* - */}
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="box">
                            <div className="circle">
                                <FontAwesomeIcon className="icon" icon={faChartArea} size="2x"/>
                                </div>
                                <h3>Data Analysis</h3>
                                <p>Get the best out of your Data to achieve your company goals </p>
                            </div>
                        </div>
                        {/* - */}

                    </div>

                </div>

            </div>
        </>
    )
}

export default Services