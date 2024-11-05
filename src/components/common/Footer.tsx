import React from 'react';
import Image from 'next/image';
import Facebook from "@/assets/Facebook"
import Instagram from "@/assets/Instagram"
import LinkedIn from "@/assets/LinkedIn"
import Twitter from "@/assets/Twitter"
import Whatsapp from "@/assets/Whatsapp"
import Youtube from "@/assets/Youtube"
import Link from 'next/link';
import WhatsappB from '@/assets/WhatsappB';
import YoutubeB from '@/assets/YoutubeB';

const Footer: React.FC = () => {
  return (
    <div id='footer' className="bg-[#0C3040] text-white w-full py-16 px-8 xl:px-[186px] flex flex-col items-center">
      <Image src={'/kairos.png'}
        width={264}
        height={83}
        alt='kairos'
        className='mx-auto md:p-4 p-2'
      />
      <div className='p-2 mb-4 max-w-[588px] lg:max-w-max'>
        <p className='text-center  font-wa'>Kairos institute offers the best courses in demand such as Aviation, Logistics, Tourism and hospitality</p>
        <p className='text-center  font-wa'>with our abilities to design one of the best aviation and logistics courses.</p>
      </div>

      <div className="w-full flex flex-col lg:flex-row max-w-[588px] lg:max-w-full lg:justify-between ">
        <div className='flex flex-row gap-x-10 lg:hidden'>
          <div>
            <h3 className="text-[12px] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-5 text-[12px]">
              {['Home', 'About Us', 'Courses', 'Placements', 'Gallery', 'Contact Us', 'Blog'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#8DFAE2]">{item.toUpperCase()}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-sml mb-4">Branches</h3>
            <div className="space-y-4">
              <div>
                <p className="text-[12px] font-semibold mb-2">THODUPUZHA</p>
                <p className='text-[12px] font-sml font-wa'>Kalarickal Bazar, Near Private Bus Stand, Thodupuzha, Idukki 685 584</p>
              </div>
              <div>
                <p className="text-[12px] font-semibold mb-2">KOCHI</p>
                <p className='text-[12px] font-sml font-wa'>Kairos Institute, Menachery Building, Church Rd, Thykoodam, Vyttila, Ernakulam, Kerala 682019</p>
              </div>
              <div>
                <p className="text-[12px] font-semibold mb-2">BENGALURU</p>
                <p className='text-[12px] font-sml font-wa'>#A/7, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col w-full lg:hidden'>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <h3 className="text-[12px] font-sml mb-4">Downloads</h3>
            <a href="#" className="block bg-[#D2F7FB] text-center py-2 mb-3 px-4 text-[#187593] text-[12px] rounded-full  hover:bg-[#4FE6D1]">
              DOWNLOAD OUR PROFILE
            </a>
          </div>
          <div className='flex flex-col items-center lg:items-start mt-5'>
            <h3 className="text-[12px] font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-[12px] font-wa text-center lg:text-start w-[336px]">Keep In Touch With Us To Get Updates About Our Latest Information And News About Kairos Institute.</p>
            <div className="w-full max-w-[336px] flex rounded-[26.5px] bg-[#D2F7FB] p-[4px]">
              <div className="flex-1 flex items-center">
                <input placeholder='Email' type="text" className='w-full mx-4 outline-none bg-transparent font-wa font-[400] text-[11.15px] leading-[9.05px] text-[#187593]' />
              </div>
              <button className='bg-[#0C3040] rounded-[22.79px] py-[10px] px-[11px]'>Subscribe</button>
            </div>
          </div>

        </div>

        <div className='w-full flex justify-center'>
          <div className='hidden lg:flex w-full justify-center'>
            <div>
              <h3 className="text-[12px] font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-5 text-[12px]">
                {['Home', 'About Us', 'Courses', 'Placements', 'Gallery', 'Contact Us', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-[#8DFAE2]">{item.toUpperCase()}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className='ml-[113px]'>
              <h3 className="text-[12px] font-sml mb-4">Branches</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[12px] font-semibold mb-2">THODUPUZHA</p>
                  <p className='text-[12px] font-sml font-wa'>Kalarickal Bazar, Near Private Bus Stand, Thodupuzha, Idukki 685 584</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold mb-2">KOCHI</p>
                  <p className='text-[12px] font-sml font-wa'>Kairos Institute, Menachery Building, Church Rd, Thykoodam, Vyttila, Ernakulam, Kerala 682019</p>
                </div>
                <div>
                  <p className="text-[12px] font-semibold mb-2">BENGALURU</p>
                  <p className='text-[12px] font-sml font-wa'>#A/7, KHB Colony, 5th Block, Koramangala, Bengaluru, Karnataka 560095</p>
                </div>
              </div>
            </div>

            <div className='flex flex-col w-min-[400px] w-max-[400px] ml-[262px]'>
              <div className='flex flex-col items-center lg:items-start mt-10'>
                <h3 className=" text-[12px] font-sml mb-4">Downloads</h3>
                <a href="#" className="w-full block bg-[#D2F7FB] text-center py-2 mb-3 px-4 text-[#187593] text-[12px] rounded-full  hover:bg-[#4FE6D1]">
                  DOWNLOAD OUR PROFILE
                </a>
              </div>
              <div className='flex flex-col items-center lg:items-start mt-5'>
                <h3 className="text-[12px] font-semibold mb-4">Newsletter</h3>
                <p className="mb-4 text-[12px] font-wa text-center lg:text-start ">Keep In Touch With Us To Get Updates About Our Latest Information And News About Kairos Institute.</p>
                <div className="w-full flex rounded-[26.5px] bg-[#D2F7FB] p-[4px]">
                  <div className="flex-1 flex items-center">
                    <input placeholder='Email' type="text" className='w-full mx-4 outline-none bg-transparent font-wa font-[400] text-[11.15px] leading-[9.05px] text-[#187593]' />
                  </div>
                  <button className='bg-[#0C3040] rounded-[22.79px] py-[10px] px-[11px]'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-5 items-center justify-center text-[9px] font-wa max-w-[588px] lg:max-w-max">
        <div className="flex items-center p-2 border border-tint-alt rounded-[30px] px-3">
          <span className="font-semibold text-alt text-sm mr-3">
            Follow
          </span>
          <div className="gap-x-3 flex py-1">
            <IconCircle>
              <Twitter fill="#187593" />
            </IconCircle>
            <IconCircle>
              <WhatsappB fill="#187593" />
            </IconCircle>
            <IconCircle>
              <Instagram fill="#187593" />
            </IconCircle>
            <IconCircle>
              <LinkedIn fill="#187593" />
            </IconCircle>
            <IconCircle>
              <Facebook fill="#187593" />
            </IconCircle>
            <IconCircle>
              <YoutubeB fill="#187593" />
            </IconCircle>
          </div>
        </div>
        <p className="mb-2 md:mb-0 text-center">&copy; COPYRIGHT 2017 - 2024 ALL RIGHTS RESERVED BY KAIROS INSTITUTE | PRIVACY POLICY | DISCLAIMER</p>

      </div>
    </div>
  );
};
function IconCircle({ children, ...props }: React.HTMLProps<HTMLDivElement>) {
  return <Link href={""} className="w-6 h-6 p-0.5 rounded-full overflow-hidden bg-tint-alt flex">
    <div className="flex-1 bg-white rounded-full p-1 flex items-center justify-center">
      {children}
    </div>
  </Link>
}
export default Footer;
