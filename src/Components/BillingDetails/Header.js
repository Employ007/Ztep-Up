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
                            <h1 className='text-black text-[35px] font-bold text-center mt-[80px]'>Billing Details</h1>
                        </div>
                        <div className=''>
                            <p className='text-sm text-center text-[#A5A29A]'>If you need more info, please check out<span className='text-[#1984C6] '>Help Page.</span> </p>
                        </div>

                        <main className='form pt-6'>
                            <div>
                                <label className='text-sm font-bold'>Name On Card</label>
                            </div>
                            <div className=" w-full  group  flex justify-center">
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline mb-4 rounded-lg" placeholder=" " required />

                            </div>
                            <div className='pt-4'>
                                <label className='text-sm font-bold '>Card Number</label>
                            </div>
                            <div className='w-full flex justify-center'>
                                <input type="tel" name="floating_company" id="floating_company" className="w-[388px] h-[40px] border-[1px] border-gray-200 px-4 focus: no-underline  mb-2 rounded-lg" placeholder="" required />
                            </div>

                            <div className='flex px-2 py-4'>
                                <div class="form-group m" id="expiration-date">
                                    <label className='text-sm font-bold'>Expiration Date</label><br></br>
                                    <select className='border-[1px] border-[#A5A29A] rounded-[8px] w-[100px] h-[30px] my-2 '>
                                        <option value="0">Month</option>
                                        <option value="01">January</option>
                                        <option value="02">February </option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                    <select className='border-[#A5A29A] border-[1px] rounded-[8px] w-[100px] px-2 h-[28px] mx-2 '>
                                        <option value="16"> Select</option>
                                        <option value="16"> 2016</option>
                                        <option value="17"> 2017</option>
                                        <option value="18"> 2018</option>
                                        <option value="19"> 2019</option>
                                        <option value="20"> 2020</option>
                                        <option value="21"> 2021</option>
                                        <option value="22"> 2022</option>
                                        <option value="23"> 2023</option>
                                    </select>
                                </div>

                                <div class="form-group CVV ">
                                    <label className='text-sm font-bold ' for="cvv">CVV</label><br></br>
                                    <input className='border-[1px] my-2 border-[#A5A29A] w-[100px] h-[28px] rounded-[8px]' type="text" class="form-control" id="cvv" />
                                </div>

                            </div>

                            <div className='flex justify-between mt-4'>
                                <div className=''>
                                    <p className='text-sm text-[#1F1F1F]'>Save Card for further billing?</p>
                                </div>
                                <div className='flex gap-2'>
                                    <div><p className='text-sm text-[#A5A29A]'>Save Card</p></div>
                                    {/* toggle */}
                                    <div className=''>
                                        <div className=''><input type="checkbox" id="switch" class="checkbox" />
                                            <label for="switch" class="toggle">
                                                {/* <p>OFF    ON</p>  */}
                                            </label>
                                        </div>
                                    </div>
                                    {/* end */}
                                </div>

                            </div>
                            <div>
                                <p className='text-sm text-[#A5A29A]'>If you need more info, please check budget planning.</p>
                            </div>

                            <div className=' '>
                                <div className='flex gap-4 my-6'>
                                    <div>
                                        <a href='accountinof'>
                                            <button className='bg-[#EEEEED] w-[186px] flex justify-center py-2 rounded-lg'>
                                                <Image className=" my-2 " src='/assets/images/arrow-left.svg' width={20} height={20} alt="" />
                                                <p className='text-[20px] px-2 font-bold'>Previous</p>
                                            </button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href='forgotpassword'>

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
