import React from 'react'
import './Main.css'
import girlImage from './Assets/girlImage.png'

function Main() {
  return (
    <div className='container-fluid'>

        <div className="inner-container-main">

            <div className="col-md-6">
                <h5>SUMMER 2020</h5>
                <h1>NEW COLLECTION</h1>
                <h4>We know how large objects will act, but things on a small scale.</h4>
                <div className='cta'>
                    <button>SHOP NOW</button>
                </div>
                
                
            </div>

           
            <div className="col-md-6-img">
            <img className='girlImage' src={girlImage} alt="" />
                <div className="none">
                    <svg className='ellipse-1' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.50547" cy="7.76734" r="7.62901" fill="#977DF4"/>
                    </svg>

                    <svg className='ellipse-2' width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#977DF4"/>
                    </svg>

                    <svg className='ellipse-3'width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16.3333" cy="16.3747" r="15.6213" fill="white"/>
                    </svg>

                    
                    
                    <svg className='ellipse-4'width="81" height="81" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40.1345" cy="40.3132" r="39.9615" fill="white"/>
                    </svg>

                    <svg className='ellipse-5' width="501" height="488" viewBox="0 0 501 488" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="250.42" cy="237.941" r="249.941" fill="white"/>
                    </svg>


                </div>
                 
            </div>

            
        </div>
    </div>
  )
}

export default Main