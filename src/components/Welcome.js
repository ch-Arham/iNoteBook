import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Welcome = () => {
   
    return (
        <>
        <div className="container light-shadow text-center" style={{background: 'transparent', boxShadow: 'none'}}>
        <div className='mb-4'><h1 style={{fontWeight: 'bolder',fontSize: "3em"}}>Welcome To iNoteBook - Login To Continue</h1></div>
            <h1 style={{ padding: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
        You Can {' '}
        <span style={{ color: 'red', fontWeight: 'bold', fontSize: "1.2em" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['Add', 'Edit', 'Delete', 'View']}
            loop={3}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
        Your Notes!
      </h1>
        </div>
        </>
    )
}

export default Welcome
