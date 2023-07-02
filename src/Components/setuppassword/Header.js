import React from 'react'
import Image from 'next/image'

export default function Header() {
    return (
        <main className=''>
            <header className='w-[1580px] sm:flex justify-center sm:justify-between'>
                <div className=''>
                    <Image className=" px-4 py-4 " src='/assets/images/button.png' width={475} height={239} alt="" />
                </div>
                <div className='flex'>
                    <button className='px-4 text-[20px] heading-h'>Sign in</button>
                    <button className='bg-black w-[143px] h-[36px] text-white text-[20px] mt-6 rounded-md mx-2'>Start Selling</button>
                </div>

            </header>
            <div className='flex w-[1580px]  justify-center'>
                <div className='flex justify-center  bg-[#FFFFFF] w-[678px] h-[660px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center pt-28'>Setup New Password</h1>
                        </div>
                        <div className=''>
                            <p className='text-[#A5A29A] text-sm text-center'>Have you already reset the password ?<span className='text-[#1984C6] '>Sign in</span></p>
                        </div>
                      

                      
                        <main className='form'>
                            <div className=" w-full  group  flex justify-center mt-4">
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline my-4 rounded-lg" placeholder="Password " required />

                            </div>


                            <main className='flex justify-center mb-4 gap-4'>
                                <div className='w-[83px] h-[4px] bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] bg-gray-300'></div>
                                <div className='w-[83px] h-[4px] bg-gray-300'></div>
                            </main>
                            <form className=''>
                                <p className='text-[13px] text-[#A5A29A] text-center'>Use 8 or more characters with a mix of letters, numbers & symbols.</p>
                            </form>

                            <div className='w-full flex justify-center'>
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline mt-4 rounded-lg" placeholder="Repeat Password " required />
                            </div>
                            <div className='check my-4'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-[#A5A29A]' for="vehicle1"> I Agree &  <span className='text-[#1984C6]'>Terms and conditions</span></label>
                            </div>
                            <div className='button flex justify-center'>
                                <a href='accountinof'>
                                <div className=' bg-black w-[388px] flex justify-center rounded-lg'>
                                    <button className=' text-white font-black py-[10px]  text-base'>Submit</button>
                                </div>
                                </a>
                            </div>
                           

                        </main>

                    </div>

                </div>
            </div>
            <div className='footer my-4'>
                <p className='text-center text- [#1F1F1F] text-[12px]'>© 2023 Ztep Up</p>
            </div>
        </main>
    )
}
