import "./landing.css"

export default function Landing() {
    return (
        <>
            <header id="heading">
                <h1 className='welcome'>Welcome to Digital Sirens!</h1>
            </header>

            <div className='projects'>
                <h1 className='projects-header'>Projects</h1>
                <h2 className='carousel'>Carousel of projects goes here</h2>
            </div>

            <div className='about'>
                <h1 className='about-header'>About Us</h1>
                <h4 className='about-desc'>About us description and photos</h4>
            </div>
        </>
    )
}