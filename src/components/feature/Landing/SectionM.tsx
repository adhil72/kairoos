'use client'

import { useState, useEffect } from 'react'
import Container from "@/components/common/Container"
import ArrowTr from "./assets/ArrowTr"
import Button from "@/components/common/Button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function SectionM() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const blogItems = [
    { image: "/images/landing/im_o.png", mt: "mt-[72px]" },
    { image: "/images/landing/im_o.png", mt: "" },
    { image: "/images/landing/im_o.png", mt: "mt-[72px]" },
  ]

  return (
    <section className="py-12">
      <Container className="items-center">
        <span className="font-[400] text-[43px] lg:leading-[57px] text-[#187593]">Blog</span>

        {isMounted && (
          <Carousel className="w-full max-w-5xl mx-auto lg:mt-[55px] relative">
            <CarouselContent>
              {blogItems.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className={`${item.mt}`}>
                    <Card className="bg-gradient-to-b from-[#70DDF0] to-[#70DDF000] rounded-[54.83px] border-none">
                      <CardContent className="flex flex-col items-center p-[40px]">
                        <div className="w-[162.54px] h-[216.56px] border-4 border-[#2FC5E1] rounded-[126.25px] relative">
                          <img 
                            src={item.image} 
                            alt="" 
                            className="w-[162.54px] h-[216.56px] object-cover rounded-[126.25px] absolute -top-5 left-5"
                          />
                        </div>
                        <p className="font-[400] text-[14px] leading-[20px] my-[20px] text-center">
                          What is the difference between Hospital Management and Hospital Administration?
                        </p>
                        <button className="rounded-[34.95px] border-[#2FC5E1] border-4 text-[#187593] items-center justify-center text-[12.64px] p-[11px] flex">
                          Read More <ArrowTr className="fill-black w-[9.53px] h-[14.09px] mx-[12px]" />
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
           
          </Carousel>
        )}

        <Button alt className="text-white mt-[56px]">
          View more
        </Button>
      </Container>
    </section>
  )
}