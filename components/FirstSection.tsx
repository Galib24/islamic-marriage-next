import React from 'react'

const FirstSection = () => {
  return (

    <div className="hidden lg:block">
      <div className="bg-gray-300 bg-opacity-60 w-full h-full relative flex justify-center items-center ">
        <img src="/Rectangle 1.png" alt='user' style={{ color: '#DBDBDB' }} className="w-full opacity-60 h-[550px] "></img>

        <div className="bg-white w-96 h-80 right-44 top-24 absolute rounded-md shadow-lg">

          <div>


            <div className="flex justify-items-center content-center gap-4 mt-6">
              <h2 className="ml-9 mt-2 font-gumela text-sm  w-[120px] ">Types of Biodata</h2>
              <div style={{ border: '1px solid #ced4da' }} className='w-fit   bg-[#3A1F56] text-white rounded-md cursor-pointer'>
                <select style={{ padding: '10px 40px' }} className='bg-transparent  cursor-pointer'>
                  <option>All BioData</option>
                  <option>bio</option>
                </select>
              </div>
            </div>


            <div className="flex justify-items-center content-center gap-4 mt-5">
              <h2 className="ml-9 mt-2 font-gumela text-sm  w-[120px]">Marital Status</h2>
              <div className='w-fit  '>
                <select style={{ padding: '10px 46px' }} className=' bg-[#3A1F56] text-white rounded-md cursor-pointer'>
                  <option>All Status</option>
                  <option>Status</option>
                </select>
              </div>
            </div>


            <div className="flex justify-center mt-5 gap-4">
              <h2 className="mt-2 font-gumela text-sm   w-[120px]">Bio Data Number</h2>
              <input
                type="number"
                className="border shadow-xl border-gray-400 border-medium rounded-md py-2 "

              />
            </div>

            <div className='flex justify-end font-gumela mt-5 '>
              <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='py-2 font-gumela  px-16 ml-1 hover:bg-[#3A1F56] hover:text-white  flex text-[#0B0B0B] mr-8 transition justify-center  items-center  w-[180px] '>

                Search
              </button>
            </div>


          </div>



        </div>



      </div>
    </div>
  )
}

export default FirstSection