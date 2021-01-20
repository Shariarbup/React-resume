import web from '../src/logo.svg'
import Common from './Common'

function About() {
    return (
        <>
        <Common 
        name='Welcome to About Page'
        imgsrc={web} visit='/contact' 
        btnname='Contact Now'/>
       </>
    )
}

export default About

