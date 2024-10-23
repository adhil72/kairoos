import React from 'react';
import Image from 'next/image';
import Facebook from "@/assets/Facebook"
import Instagram from "@/assets/Instagram"
import LinkedIn from "@/assets/LinkedIn"
import Twitter from "@/assets/Twitter"
import Whatsapp from "@/assets/Whatsapp"
import Youtube from "@/assets/Youtube"
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#0C3040] text-white w-full py-16 px-8 xl:px-[186px] flex flex-col">
        <Image src={'/kairos.png'}
                width={264}
                height={83}
                alt='kairos'
                className='mx-auto md:p-4 p-2'
        />
        <div className='p-2 mb-4'>
        <p className='text-center  font-wa'>Kairos institute offers the best courses in demand such as Aviation, Logistics, Tourism and hospitality</p>
        <p className='text-center  font-wa'>with our abilities to design one of the best aviation and logistics courses.</p>

        </div>
        
      <div className="max-w-7xl grid grid-cols-1 mx-auto md:grid-cols-4 gap-10">
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
        <div className='flex flex-col w-full md:ml-36'>
        <div>
          <h3 className="text-[12px] font-sml mb-4">Downloads</h3>
          <a href="#" className="block bg-[#D2F7FB] text-center py-2 mb-3 px-4 text-[#187593] text-[12px] rounded-full  hover:bg-[#4FE6D1]">
            DOWNLOAD OUR PROFILE
          </a>
        </div>
        <div>
        <h3 className="text-[12px] font-semibold mb-4">Newsletter</h3>
        <p className="mb-4 text-[12px] font-wa">Keep In Touch With Us To Get Updates About Our Latest Information And News About Kairos Institute.</p>
        <div>
          {/* <div className="flex">
            <input
              type="email"
              placeholder="Email"
              className="px-2 py-2 rounded-l-full font-wa text-black outline-none"
            />
            <button className="bg-[#8DFAE2] px-6 py-2 rounded-r-full font-semibold text-[#09202F] hover:bg-[#4FE6D1] transition-colors">
              Subscribe
            </button>
          </div> */}
        </div>
        </div>
            
        </div>
        
       
      </div>

      <div className="mt-10 flex flex-col gap-5 items-center justify-center text-[9px] font-wa">
      <div className="flex items-center p-2 border border-tint-alt rounded-[30px] px-3">
            <span className="font-semibold text-alt text-sm mr-3">
                Follow
            </span>
            <div className="gap-x-3 flex py-1">
                <IconCircle>
                    <Twitter fill="#187593" />
                </IconCircle>
                <IconCircle>
                    <Whatsapp fill="#187593" />
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
                    <Youtube fill="#187593" />
                </IconCircle>
            </div>
        </div>
        <p className="mb-2 md:mb-0">&copy; COPYRIGHT 2017 - 2024 ALL RIGHTS RESERVED BY KAIROS INSTITUTE | PRIVACY POLICY | DISCLAIMER</p>
        
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
