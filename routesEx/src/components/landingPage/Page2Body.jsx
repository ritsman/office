import React from 'react'
import './PageBody.css'
const Page2Body = () => {
  return (
    <>
      {/* <header> */}
      <div class="jumbotron text-center">
    <h1>Welcome to Inventory Networking</h1>
    <p className=''>Streamline Your Storage Facilities with Smart Solutions</p>
    </div>
  {/* </header> */}
  <main>
<section>
      <div className="container">
      <h2>What We Offer</h2>
        <div className="row">
          <div className="col-lg-6">
          <ul>
            <li>Networking of Storage Facilities: Seamlessly connect all your storage locations, enabling efficient inventory management and access across your network.</li>
            <li>Smart Solutions for Inventory: Utilize our intelligent inventory management solutions to optimize stock levels, reduce wastage, and increase operational efficiency.</li>
            <li>Mobile App for Scanning: Empower your team with our mobile app for scanning, allowing for quick and accurate inventory tracking on the go.</li>
        </ul>
          </div>
          <div className="col-lg-6">
          <img src="https://www.nogentech.org/wp-content/uploads/2021/09/InventoryManagement_Hero@3x.png " className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </section>
    <section className=' margin_top'>
      <div className="container">
      <h2>Why Choose Us</h2>
        <div className="row ">
          <div className="col-lg-6">
          <ul>
            <li>Efficiency: Streamline your inventory management processes and save time with our intuitive solutions.</li>
            <li>Accuracy: Ensure accurate inventory tracking and minimize errors with our advanced scanning technology.</li>
            <li>Scalability: Our solutions are designed to grow with your business, whether you have a single facility or a network of storage locations.</li>
        </ul>
          </div>
          <div className="col-lg-6">
          <img src="https://images.wisegeek.com/businessman-taking-inventory.jpg" className='img-fluid' alt="" />
          </div>
        </div>
      </div>
    </section>
<section className=' margin_top  '>
          <div className="container">
           
            <div className="row space bg_shadow">
              <div className="col-lg-12">
              <h2>Try Now:</h2>
              <p className='para'>Experience the power of Inventory Networking for yourself! Sign up for a free trial today and revolutionize your inventory management.</p>
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

export default Page2Body
