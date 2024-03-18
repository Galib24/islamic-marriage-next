import React from 'react'

const Login = () => {


  return (
    <>
      <div style={{ width: '550px', height: '480px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }} className="bg-white my-5 mx-auto rounded-2xl ">

        <div>
          <h2 className='text-center'>Login to account</h2>

          <div className=''>
            <h2 className='text-sm'>Email or mobile Number</h2>
          <input className='py-2 px-2 w-72 border-2 font-semibold rounded-lg outline-none focus:border-transparent focus:ring-0' type="text" placeholder='Enter email or mobile number ' />
          </div>


        </div>



      </div>

    </>
  )
}

export default Login