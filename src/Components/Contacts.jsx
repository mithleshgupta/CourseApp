import React from 'react'

const Contacts = () => {
  return (
    <div className='contact'>
        <main>
            <h1>
                Contact Us
            </h1>

            <form>


                <div>
                        <label htmlFor="">Name</label>
                        <input type="text" required placeholder='Abc' />
                </div>
                <div>
                        <label htmlFor="">Email</label>
                        <input type="email" required placeholder='Abc@gmail.com' />
                </div>
                <div>
                        <label htmlFor="">Message</label>
                        <input type="text" required placeholder='Ask A Question...' />
                </div>
                <button type='submit'>Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contacts