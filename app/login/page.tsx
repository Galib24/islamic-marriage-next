import React from 'react'

const Login = () => {


  return (
    <>
      <div style={{ width: '470px', height: '480px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)' }} className="bg-white my-5 mx-auto rounded-2xl ">

        <div>
          <h2 className='text-center'>Login to account</h2>

          <center className='mt-5'>
            <h2 className='text-sm mr-28'>Enter the Email</h2>

            <div style={{ border: '1px solid #311A49' }} className=' w-1/2 rounded-lg '>

              <input className='py-2 px-2  w-full rounded-lg font-semibold border-transparent focus:right-0  ' type="text" placeholder='Enter the Email' />
            </div>

          </center>


        </div>
        <div>

          <center className='mt-5'>
            <h2 className='text-sm mr-28'>Enter the password</h2>

            <div style={{ border: '1px solid #311A49' }} className=' w-1/2 rounded-lg '>

              <input className='py-2 px-2  w-full rounded-lg font-semibold border-transparent focus:right-0  ' type="text" placeholder='Enter the password' />
            </div>

          </center>


        </div>



      </div>

    </>
  )
}

export default Login