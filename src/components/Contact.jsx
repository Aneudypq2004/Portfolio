import React from 'react'

function Contact() {
  return (
    <>
      <h2 className='contact-title'>Write Me</h2>

      <div className='contact'>



        <h4>Do you want to do a new project ?</h4>

        <p>We can create a amazing project for your business, you tell what you want and I'll create it. </p>

    

        <a
          href="mailto:dluisaneudy82@gmail.com?subject= I'm interesting in a new Project"
          className={`boton w100`}
        >
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
          <span id="span4"></span>
          Tell Me </a>

      </div>



    </>
  )
}


export default Contact