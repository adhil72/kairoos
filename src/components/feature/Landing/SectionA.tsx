'use client'

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, LucideChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
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
    }
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
        <section className="w-full">
            <Container className="py-5">
                <div className="w-full lg:h-[392.5px] relative lg:mx-[30px]">
                    <BoxBg className="absolute inset-0 w-full h-full z-0 hidden lg:block" />
                    <BoxBgS className="absolute inset-0 w-full z-0 lg:hidden " style={{ height: 'calc(100% + 100px)' }} />
                    <div className="w-full lg:h-[300.5px] relative z-20 flex flex-col-reverse lg:flex-row justify-between">
                        {/* Updated Title */}
                        <div className="w-full min-h-[170px] text-[16.1px] leading-[23.65px] lg:w-[60%] h-full lg:text-[32px] lg:leading-[47px] flex justify-center items-center px-10">
                            {sliderData[currentSlide].title}
                        </div>
                        {/* Updated Image */}
                        <div className="flex-1 lg:h-[392.5px] flex justify-center items-center">
                            <img src={sliderData[currentSlide].image} alt="slide image" className="w-[60%] object-cover" />
                        </div>
                    </div>

                    <Button className="w-[130px] md:w-[140px] h-[33.65] lg:min-w-[188.71px] lg:h-[59px] text-white bottom-0 absolute lg:mt-3 -mb-[100px] lg:mb-4 ml-10 md:ml-[100px] lg:ml-[40px] xl:ml-[3%] z-30">
                        Join Now
                    </Button>
                    <button
                        onClick={nextSlide}
                        className="md:w-[67.28px] md:h-[66.67px] w-[47px] h-[47px] border-[#2FC5E1] bg-white m-[2%] -mb-[80px] lg:mb-[2%] border-4 flex items-center justify-center rounded-full text-white bottom-0 right-0 absolute  z-30">
                        <LucideChevronRight className="w-[50%] h-[50%] text-[#2FC5E1]" />
                    </button>
                </div>
            </Container>
        </section>
    )
}
