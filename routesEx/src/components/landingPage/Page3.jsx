import React from 'react'
import './PageBody.css'
const Page3 = () => {
  return (
    <>
      {/* <header> */}
      <div class="jumbotron text-center">
    <h1>Welcome to Real Time Data Analysis Hub</h1>
    <p className=''>Unlock Insights and Efficiency with AI-Powered Solutions</p>
    </div>
  {/* </header> */}
  <main>
<section>
      <div className="container">
      <h2>What We Offer</h2>
        <div className="row">
          <div className="col-lg-6">
          <ul>
            <li>Real-Time Data Analysis: Gain valuable insights into your operations with our real-time data analysis tools. Monitor key metrics, identify trends, and make informed decisions instantly.</li>
            <li>AI Integration: Harness the power of artificial intelligence to optimize processes, predict outcomes, and enhance productivity across your organization.</li>
            <li>Barcode and RFID Solutions: Streamline inventory management and asset tracking with our advanced barcode and RFID solutions. Ensure accuracy and efficiency in your operations.</li>
            <li>
            Wages and Payments: Simplify payroll management and payment processing with our integrated solutions. Ensure timely and accurate payments for your employees.  
            </li>
        </ul>
          </div>
          <div className="col-lg-6">
          <img src="https://bestbarcodeworld.com/wp-content/uploads/2019/08/WIP-solutions.png"  className='img-fluid'alt="" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <h2>Why Choose Us</h2>
        <div className="row ">
          <div className="col-lg-6">
          <ul>
            <li>Advanced Technology: Stay ahead of the curve with our cutting-edge AI and data analysis technologies.</li>
            <li>Efficiency: Improve operational efficiency and reduce costs with our streamlined solutions.
Accuracy: Ensure data accuracy and reliability with our barcode and RFID solutions.</li>
            <li>Simplicity: Simplify complex processes and tasks with our user-friendly interfaces and intuitive features.</li>
        </ul>
          </div>
          <div className="col-lg-6">
          <img src="https://eliteextra.com/wp-content/uploads/2022/06/AdobeStock_507151630-scaled.jpeg" className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* <section>
      <div className="container">
      <h2>Try Now:</h2>
        <div className="row">
          <div className="col-lg-12">
          <p className='para'>Experience the power of Real Time Data Analysis Hub for yourself! Sign up for a free trial today and transform your business operations.</p>
          <div className='text-center'>
                  <button type="button" class="btn btn-primary btns">Try Now</button>
                </div>
          </div>
       
        </div>
      </div>
    </section>
    <section>
      <div className="container">
      <h2>Get In Touch:</h2>
        <div className="row">
          <div className="col-lg-12">
          <p className='para'>Have questions or need assistance? We're here to help! Contact us at 6260491554 to speak with a member of our team.</p>
          </div>
        </div>
      </div>
    </section> */}

<section className='  margin_top '>
          <div className="container">
           
            <div className="row space bg_shadow">
              <div className="col-lg-12">
              <h2>Try Now:</h2>
              <p className='para'>Experience the power of Real Time Data Analysis Hub for yourself! Sign up for a free trial today and transform your business operations.</p>
                <div className='text-center'>
                  <button type="button" class="btn btn-primary btns">Try Now</button>
                </div>
              </div>
             
            </div>
            <div className="row bg_shadow">
              <div className="col-lg-12">
              <h2>Get In Touch:</h2>
                <p className='para'>Have questions or need assistance? We're here to help! Contact us at 6260491554 to speak with a member of our team.</p>
              </div>
            </div>
          </div>
       
        
        
        </section>
  </main>
    </>
  )
}

export default Page3
