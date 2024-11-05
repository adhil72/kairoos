'use client'

import { useEffect, useState } from "react"
import { LucideChevronRight } from "lucide-react"
import BoxBg from "@/assets/BoxBg"
import Container from "@/components/common/Container"
import Button from "@/components/common/Button"
import BoxBgS from "@/assets/BoxBgS"

const sliderData = [
    {
        title: 'Advanced Logistics, Supply Chain Management & Shipping Management Courses in Kerala & Bangalore',
        image: '/images/landing/im.png',
    },
    {
        title: 'The Best Logistics Institute in Kerala & Bangalore',
        image: '/images/landing/im.png',
    },
    {
        title: 'Advanced Logistics, Supply Chain Management & Shipping Management Courses in Kerala & Bangalore',
        image: '/images/landing/im.png',
    },
    {
        title: 'The Best Logistics Institute in Kerala & Bangalore',
        image: '/images/landing/im.png',
    },
]

export default function SectionA() {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000) // Auto-advance every 5 seconds
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="w-full min-h-[550px] md:min-h-min">
            <Container className="py-5">
                <div className="w-full md:h-[352.5px] lg:h-[392.5px] relative">
                    <BoxBg className="absolute inset-0 w-full h-full z-0 hidden md:block" />
                    <BoxBgS className="absolute inset-0 w-full z-0 md:hidden " style={{ height: 'calc(100% + 100px)' }} />
                    <div className="w-full md:h-[300.5px] relative z-20 flex flex-col-reverse md:flex-row justify-between">
                        {/* Updated Title */}
                        <div className="w-full min-h-[170px] text-[16.1px] leading-[23.65px] md:w-[60%] h-full lg:text-[32px] lg:leading-[47px] flex justify-center items-center px-10">
                            {sliderData[currentSlide].title}
                        </div>
                        {/* Updated Image */}
                        <div className="flex-1 md:h-[392.5px] flex justify-center items-center">
                            <img src={sliderData[currentSlide].image} alt="slide image" className="w-[100%] object-contain max-h-[392.5px]" />
                        </div>
                    </div>

                    <Button className="min-w-[105.73px] min-h-[33.65px] md:min-h-[53px] sm:min-w-[174.71px] sm:min-h-[40px] sm:ml-[50px] sm:-mt-[10px] lg:min-w-[188.71px] text-white bottom-0 absolute lg:mt-3 -mb-[90px] md:mb-[15px] lg:mb-4 ml-[15px] md:-ml-[10px] lg:ml-[40px] xl:ml-[3%] z-30">
                        Join Now
                    </Button>
                    
                    <button
                        onClick={nextSlide}
                        className="md:w-[67.28px] md:h-[66.67px] w-[47px] h-[47px] border-[#2FC5E1] bg-white m-[2%] -mb-[80px] md:mb-[15px] lg:mb-[2%] border-4 flex items-center justify-center rounded-full text-white bottom-0 right-0 absolute  z-30">
                        <LucideChevronRight className="w-[50%] h-[50%] text-[#2FC5E1]" />
                    </button>
                </div>
                <div className="w-full flex justify-center mt-[8.5rem] lg:mt-10">
                    <NavIndex current={currentSlide} count={sliderData.length} />
                </div>
            </Container>
        </section>
    )
}

function NavIndex({ count, current }: { current: number, count: number }) {
    return <div className="w-fit flex items-center">
        {
            Array(count).fill(0).map((_, i) => {
                return <>
                    {
                        i == current ?
                            <div className="w-[53px] h-[53px] text-[#FFFFFF] flex justify-center items-center font-wa font-[600] text-[8.92px] leading-[11.58px] bg-[#D2F7FB] rounded-full">
                                <div className="w-[32.81px] h-[32.81px] text-[#FFFFFF] flex justify-center items-center font-wa font-[600] text-[17.13px] leading-[22.23px] bg-[#2FC5E1] rounded-full">
                                    {i + 1}
                                </div>
                            </div>
                            :
                            <div className="w-[17.9px] h-[17.9px] text-[#FFFFFF] flex justify-center items-center font-wa font-[600] text-[8.92px] leading-[11.58px] bg-[#2FC5E1] rounded-full">
                                {i + 1}
                            </div>
                    }
                    {i != count-1 && <div className="h-[1.37px] w-[43.41px] bg-[#8CC9D7]"></div>}
                </>
            })
        }
    </div>
}

