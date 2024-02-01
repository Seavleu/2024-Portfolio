import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
           <Image src='/h.jpg' className="profile-img" width={300} height={300} alt="Profile" />
            <div className="hero-text">
                <h1>Hey, I'm Jenny 👋</h1>
                <p>
                    I'm a software developer based in Daejoen, South Korea. I specialize in building websites, applications, and everything in between. 
                    <a href="https://vast-part-d09.notion.site/65a8291e981042e9b94ec04aa8ffc45d?v=4a8a68b6e7084995af8e39cf7c2b98ad&pvs=4"> <br />Manage Me</a>
                </p>
                <div className="social-icons">
                    {/* <a
                        href="https://twitter.com/"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a> */}
                    <a
                        href="https://github.com/Seavleu"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/heang-seavleu-b97145219/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;