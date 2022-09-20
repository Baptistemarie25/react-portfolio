import React from 'react'
import "../Portfolio"
import bookengine from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/bookengine.png'
import lenstrends from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/lensTrends.png'
import runbuddy from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/runbuddy.jpeg'
import vacayplanner from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/vacayplanner.png'
import budget from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/budget.png'
import notes from '/Users/mariebaptiste/Desktop/react-portfolio/photo-port/src/assets/notes.png'



function Portfolio() {
    return (
        <section id='Portfolio'>
            <h3>Portfolio</h3>

            <div className='container port-info'>

            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={bookengine} alt='book engine'/>
                </div>
                <h3>Book Engine</h3>
                <div className='port-item-info'>
                <a href='https://github.com/Baptistemarie25/book-engine' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://mighty-castle-95380.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>
    
            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={lenstrends} alt='lenstrends'/>
                </div>
                <h3>LensTrends</h3>
                <div className='port-item-info'>
                <a href='https://github.com/MoisesCard/Lens-Trends.git' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://moisescard.github.io/Lens-Trends/' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>
    
            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={runbuddy} alt='Run Buddy Site'/>
                </div>
                <h3>Run Buddy</h3>
                <div className='port-item-info'>
                <a href='https://github.com/Baptistemarie25/Run-Buddy' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://lernantino.github.io/run-buddy/' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>
    
            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={vacayplanner} alt='vacation planner'/>
                </div>
                <h3>Vacay Planner</h3>
                <div className='port-item-info'>
                <a href='https://github.com/CharissaHollister/Be-Prepared-for-Fun' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://guarded-stream-10933.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>

            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={budget} alt='budget tracker'/>
                </div>
                <h3>Budget Tracker</h3>
                <div className='port-item-info'>
                <a href='https://github.com/Baptistemarie25/budget-tracker' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://fathomless-tor-86613.herokuapp.com/' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>

            <section className='port-items'>
                <div className='portfolio-img'>
                <img src={notes} alt='note taker'/>
                </div>
                <h3>Note Taker</h3>
                <div className='port-item-info'>
                <a href='https://github.com/Baptistemarie25/note-taker-express' className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href='https://note-taker-wildana.herokuapp.com/notes' className='btn btn-primary' target='_blank' rel="noreferrer">Deployed</a>
                </div>
            </section>
    
            </div>
        </section>
    )
};

export default Portfolio