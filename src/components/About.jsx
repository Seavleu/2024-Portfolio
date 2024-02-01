import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                    I am currently making my way into the field of Software Development. I enjoy every step of the development process, from interviewing, planning, defining software and functional requirements.  Designing architecture is my favorite part. One issue as a newbie is writing clean code, which I am determined to improve at all costs.
                    </p>
                    <p>Throughout my academic years, I've won various school competitions like Learning Concerts and secured first place in an Annual Capstone Project. I've tackled a range of projects, from simple static websites to responsive ones, and gained experience with HTML, CSS, JavaScript, React, Node.js, TailwindCSS, and other frameworks as per project needs.</p>
                    <p>I also explore ML projects, including supervised learning (Binary Classification, K-NN, Logistic Regression) and unsupervised learning (Clustering, PCA). Currently, I'm researching Construction Site PPE detection as a side project.</p>
                </div>
                <div className="about-img">
                    <Image src='/h3.jpg' className="profile-img" width={300} height={500} alt="Jenny Explaining her Game Product" />
                </div>
            </div>
        </div>

    )
}

export default About;





