import React from 'react'
import './PageBody.css'

const PageBody = () => {
  return (
    <>
      <header>
    <h1>Welcome to Salesman Field App</h1>
    <p className=''>Empower Your Sales Team with Cutting-Edge Technology</p>
  </header>
  <main>
    <section >
        <h2>What We Offer</h2>
        <div className='offer'>

        <ul>
            <li>Effortless Sales Management: Our Salesman Field App streamlines the sales process, making it easier and more efficient for your team to manage leads, track progress, and close deals on the go.</li>
            <li>Inventory Reservation: Never miss out on a sale due to lack of stock. Our app allows you to reserve inventory instantly when a booking is made, ensuring seamless transactions and satisfied customers.</li>
            <li>Design Library & Stock Information: Access our extensive design library and detailed stock information directly from the app. Equip your sales team with the resources they need to impress clients and make informed decisions.</li>
        </ul>
        <img src="http://getwallpapers.com/wallpaper/full/1/4/0/765447-amazing-business-wallpapers-1920x1080.jpg" alt="" />
        </div>
    </section>
    <section>
        <h2>Why Choose Us</h2>
        <div className='offer'>

        <ul>
            <li>User-Friendly Interface: Our app is designed with simplicity and functionality in mind, ensuring a smooth experience for all users.</li>
            <li>Real-Time Updates: Stay informed with real-time updates on inventory status, sales progress, and more, keeping you ahead of the competition.</li>
            <li>24/7 Support: Our dedicated support team is available round the clock to assist you with any queries or issues you may encounter.</li>
        </ul>
        <img src="https://wallpapercave.com/wp/wp3278044.jpg" alt="" />
        </div>
    </section>
    <section>
        <h2>Try Now:</h2>
        <p className='para'>Experience the power of Salesman Field App for yourself! Sign up for a free trial today and revolutionize your sales process.</p>
        <button>Sign Up</button>
        </section>
        <section>
            <h2>Get In Touch:</h2>
            <p className='para'>Have questions or need assistance? We're here to help! Contact us at 6260491554 to speak with a member of our team.</p>
        </section>
   
  </main>
    </>
  )
}

export default PageBody
