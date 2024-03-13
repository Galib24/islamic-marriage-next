import React from 'react'

const SecondSection = () => {
    return (
        <>
            <div className='hidden lg:block'>
                <div className="flex justify-center mb-5 mt-5">
                    <div>
                        <p className='font-gumela'>
                            Lorem ipsum dolor sit amet consectetur. Posuere laoreet donec nibh quam. Tempus leo accumsan non iaculis.</p> <hr /> <p className="ml-10 font-gumela">
                            Nunc ullamcorper diam nibh eleifend eu vitae. Felis ipsum vivamus et egestas orci leo
                        </p> <hr />   <p className="text-center font-gumela">
                            Nunc ullamcorper diam nibh eleifend eu vitae. orci leo
                        </p>
                    </div>



                </div>


                <div className="flex justify-center">
                    <div className='flex justify-center font-gumela mt-5 ml-5'>
                        <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='py-2 font-gumela  px-3 ml-1  hover:bg-[#3A1F56] hover:text-white border flex text-[#0B0B0B] transition justify-center  items-center'>

                            Create your own biodata
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className='flex justify-center font-gumela mt-5 ml-5'>
                        <button style={{ borderRadius: '8px', border: '1px solid #2D1843', gap: '10px' }} className='py-2 font-gumela  px-3 ml-1  hover:bg-[#3A1F56] hover:text-white border flex text-[#0B0B0B] transition justify-center  items-center'>

                            How to create your biodata (Video)
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondSection