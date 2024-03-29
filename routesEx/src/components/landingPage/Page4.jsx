import React from 'react'
import './PageBody.css'
const Page4 = () => {
  return (
    <>

      {/* <header> */}
      <div className='text-center'>
        <h1>Welcome to Sourcing Pro</h1>
        <p className=''>Empowering Your Supply Chain Management</p>
        </div>
      {/* </header> */}
      <main>
        <section>
          <div className="container">
            <h2>What We Offer</h2>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>Sourcing: Find the best suppliers for your business needs, ensuring quality and reliability in your supply chain.</li>
                  <li>Vendor Management: Streamline your relationships with vendors, from onboarding to performance evaluation, for seamless collaboration.</li>
                  <li>Time & Action Plan: Keep your projects on track with detailed timeframes and action plans, ensuring timely delivery of goods.</li>
                  <li>Full Order Recko: Gain complete visibility into your orders from start to finish, with detailed tracking and monitoring at every stage.</li>
                  <li>Cost History and Analysis: Analyze your cost data over time to identify trends, optimize spending, and improve profitability.</li>
                  <li>WIP (Work In Progress): Stay ahead of the curve with our ongoing improvements and innovations to enhance your workflow and efficiency.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src="https://simfoni.com/wp-content/uploads/2022/02/What-is-Strategic-Sourcing.png" className='img-fluid' alt="" />
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
                  <li>Comprehensive Solutions: Covering every aspect of supply chain management, we provide holistic solutions tailored to your needs.</li>
                  <li>Data-Driven Insights: Utilize actionable insights from data analysis to make informed decisions and drive business growth.</li>
                  <li>Continuous Improvement: We are committed to ongoing development and enhancement of our platform to meet evolving industry needs.</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img src="https://i.pinimg.com/originals/73/88/05/7388059e9313c6603cff0bd27d4e12b8.png" className='img-fluid' alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <section>
          <div className="container">
            <h2>Try Now:</h2>
            <div className="row">
              <div className="col-lg-12">
                <p className='para'>Experience the power of Sourcing Pro for yourself! Sign up for a free trial today and revolutionize your supply chain management.</p>
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
        <section className=' margin_top '>
          <div className="container">
           
            <div className="row space bg_shadow">
              <div className="col-lg-12">
              <h2>Try Now:</h2>
              <p className='para'>Experience the power of Sourcing Pro for yourself! Sign up for a free trial today and revolutionize your supply chain management.</p>
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

export default Page4
