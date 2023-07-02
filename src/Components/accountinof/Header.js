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
                <div className='flex justify-center  bg-[#FFFFFF] w-[678px] h-[810px]'>
                    <div className=''>
                        <div>
                            <h1 className='text-black text-[35px] font-bold text-center mt-[80px]'>Account Info</h1>
                            <p className='text-[#A5A29A] text-sm text-center'>If you need more info, please check out <span className='text-[#1984C6] text-sm'>Help Page.</span></p>
                        </div>


                        <main className='form'>
                            <div className='pt-6 pb-2'>
                                <h1 className='text-base font-bold '>Business Name</h1>
                            </div>
                            <div className=" w-full  group  flex justify-center">
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline mb-4 rounded-lg" placeholder=" " required />

                            </div>
                            <div className='pt-2 pb-1 '>
                                <h1 className='text-base font-bold '>Company Type</h1>
                            </div>
                            <div className='w-full flex justify-center'>
                                <div className='w-[388px] h-[54px] flex justify-start border-black border-[2px] px-4 focus: no-underline  mb-2 rounded-lg'>
                                    <div className='flex '>
                                        <Image className="  " src='/assets/images/company.svg' width={29} height={29} alt="" />
                                        <div className='px-2 py-1'>
                                            <p className='text-[12px] font-bold'>Corporation</p>
                                            <p className='text-[12px] '>(S-Corp or C-Corp).</p>
                                        </div>
                                    </div>


                                </div>

                            </div>
                            {/* <input src="/assets/images/company.svg"  type="image" id="image" alt="Login"
        className="w-[388px] h-[40px] border-[1px] flex justify-start border-gray-200 px-4 focus: no-underline mt-4 mb-2 rounded-lg" placeholder="Corporation " required /> */}
                            <div className='flex m-6'>
                                <div className='my-4'>
                                    <Image className="  " src='/assets/images/suitcasesimple-d.svg' width={32} height={32} alt="" />
                                </div>
                                <div className='px-4'>
                                    <p className='text-base font-bold'>Limited Liability Companie (LLC)</p>
                                    <p className='text-sm text-[#1F1F1F]'>Hybrid business with limited liability and tax<br></br> benefits.</p>
                                </div>

                            </div>
                            <div className='flex m-6'>
                                <div className='my-1'>
                                    <Image className="  " src='/assets/images/usercircle.svg' width={32} height={32} alt="" />
                                </div>
                                <div className='px-4'>
                                    <p className='text-base font-bold'>Sole Proprietorship</p>
                                    <p className='text-sm text-[#1F1F1F]'>One person's business with personal liability.</p>
                                </div>

                            </div>
                            <div className=''>
                                <div className='pt-2 pb-1 px-2'>
                                    <h1 className='text-base  '>Business Description</h1>
                                </div>
                                <div>
                                    <textarea className="w-[388px] h-[80px] rounded-lg border-[1px] border-[#A5A29A]" id="w3review" name="w3review" rows="4" cols="50"></textarea>
                                </div>
                            </div>



                            <div className=' '>
                                <div className='flex gap-4 my-4'>
                                    <div>
                                        <a href='setuppassword'>
                                            <button className='bg-[#EEEEED] w-[186px] flex justify-center py-2 rounded-lg'>
                                                <Image className=" my-2 " src='/assets/images/arrow-left.svg' width={20} height={20} alt="" />
                                                <p className='text-[20px] px-2 font-bold'>Previous</p>
                                            </button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href='BillingDetails'>

                                            <button className='bg-[#1F1F1F] w-[186px] flex justify-center py-2 rounded-lg'>
                                                <p className='text-[20px] px-2 font-bold text-white'>Continue</p>
                                                <Image className=" my-2 " src='/assets/images/arrow-right.svg' width={20} height={20} alt="" />

                                            </button>

                                        </a>
                                    </div>
                                </div>
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
