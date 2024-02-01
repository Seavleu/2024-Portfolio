import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
                <Link href="/">
                    Jenny Heang
                </Link>
            </div>
            <a href="https://drive.google.com/file/d/1GFNYqfx9PzOMzHktWp2H53nt7u1h7k8q/view" className="cta-btn">Resume</a>
        </div>
    )
}

export default Navbar;