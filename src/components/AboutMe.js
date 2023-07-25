import author from '../me.jpg';

const AboutMe = () => {

    return (
        <>
            <div id="about" className="container py-5">
                <div className="row">
                    <div className="col-lg-6 col-xm-12">
                        <div className="photo-wrap" mb-5>
                            <img className="profile-img" src={author} alt="about me pic" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-xm-12" >
                        <h1 className="about-heading">about Me</h1>
                        <h6>and S4B Consulting ...</h6>
                        <br/>
                        <p>
                            Hello ! I am Luis, a Junior Full Stack Web Developer and Senior Business analyst consultant with more than 10 years' experience, helping Business to do Business !

                            We create business solutions to optimize processes and Data management with technologies such as PHP, MySQL, JavaScript and MERN (MongoDB, Express, ReactJs and NodeJS)

                            Our Modules are responsive in a variety of devices desktops and smartphones using different frameworks such as Bootstrap, Material U.I, r-suit etc...</p>

                        <p> The module creation implies a thorough understanding of our client current process flow as well as any new ideas to implement, changes or updates in order to gain a competitive 
                            advantage against competitors via process optimization and web technologies implementation.</p>

                            <p>We want our clients to be able to eliminate or minimize bottlenecks and unnecessary overhear work allow them to focus on what they do best !

                            Our modules are Tylor-made to every single client needs based on their unique process aspects and our solutions.

                            solutions could cover the processes from pre to post sales including any aspect of the complete business model flow ! with scalable and easy to maintain modules !

                            constant improvement is our focus !

                        </p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default AboutMe