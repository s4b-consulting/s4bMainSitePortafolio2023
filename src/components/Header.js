import Typed from 'react-typed';


const Header = ()=>{

    return(
        <>
        <div id="home" className="header-wraper">
            <div className="main-info">
            
                <h1>web development and Business Solutions</h1>
                <Typed
                className="typed-text"
                strings={["Web Development","Full Stack Applications", "Business Solutions", "Process Management", "Data Analysis", "Reporting"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                 />
                 <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
        </>
    )
}

export default Header;