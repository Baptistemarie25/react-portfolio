import React from 'react';
import me from '../../assets/me.jpeg'

function About() {

    return (
        
        <section className="about-me">
            <h3 id="about">About me</h3>
        
            <div>
                <img src={me} 
                className="img-fluid img-thumbnail my-3" 
                alt="Author of Site Marie Baptiste" />
            </div>

            <div>
                <p className="about-text">
                    Hello! My name is Marie. I have been working in the tech industry for a few as a software supposr and technical support
                    advisor and I have enjoyed my time helping others maneuver new technology but I am ready to move on to the next step of my life 
                    which is creating or being part of a team creating technology or improving tech for others. I am proficient in HTML and CSS and have 
                    Experience working with Javascript, React and SQL. Please check out some of my work and reach out to me if you have any 
                    questions.
                </p>
            </div>

            <div className="m-3 experience">
                    Front-end Experience
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ul>

                    Back-end Experience
                    <ul>
                        <li>Express</li>
                        <li>Node</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                    </ul>

            </div>
        
        </section>

    )

}

export default About;