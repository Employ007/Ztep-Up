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
                <div className='flex justify-center  bg-[#FFFFFF] w-[678px] h-[710px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center mt-[80px]'>Sign UP</h1>
                        </div>
                        <main className='form flex justify-center my-4'>
                            <div className=''>
                            <button className='flex item-center  max-w-[306px] h-[36px] border-gray-200'>
                                    <Image className=" px-2  " src='/assets/images/google.svg' width={60} height={80} alt="" />
                                    <p className='py-2'> Sign in with Google</p>
                                </button>
                            </div>
                            <div className='flex   h-[36px] px-6'>
                                <button className='flex item-center w-[206px] h-[36px] border-gray-200'>
                                    <Image className=" px-2  " src='/assets/images/apple.svg' width={60} height={80} alt="" />
                                    <p className='py-2'> Sign in with apple</p>
                                </button>
                            </div>
                        </main>
                        <main className='flex justify-center my-4'>
                            <div className='flex justify-center  '>
                                <div className='w-[100px] h-[2px] bg-gray-300'></div>
                            </div>
                            <div className=''>
                                <p className='text-[#A5A29A] px-4'>Or with Email</p>
                            </div>
                            <div className='flex justify-center '>
                                <div className='w-[100px] h-[2px] bg-gray-300'></div>
                            </div>
                        </main>
                        <main className='form'>
                            <div className=" w-full  group  flex justify-center">
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline my-4 rounded-lg" placeholder="Email " required />

                            </div>
                            <div className='w-full flex justify-center'>
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline mt-4 mb-2 rounded-lg" placeholder="Password " required />
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
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline mt-4 mb-2 rounded-lg" placeholder="Repeat Password " required />
                            </div>
                            <div className='check pl-10 my-6'>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                <label className='text-sm text-[#A5A29A]' for="vehicle1"> I Accept the <span className='text-[#1984C6]'>Terms</span></label>
                            </div>

                            <a href='Verification'> <div className='button flex justify-center'>
                                <div className=' bg-black w-[388px] flex justify-center rounded-lg'>
                                    <button className=' text-white font-black py-[10px]  text-base'>Sign UP</button>
                                </div>

                            </div>
                            </a>
                            <div className='my-4'>
                                <p className='text-sm text-center text-[#A5A29A]'>Already have an Account? <a href='login-page'><span className='text-black font-bold'>Sign in</span></a></p>
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
