import Container from "@/components/common/Container";

export default function SectionN() {
    return <section className="w-full">
        <Container className="!px-0 md:!px-[80px] lg:!px-[150px]">
            <div className=" lg:mt-16 bg-[#F8F8F8] py-10 px-6 md:px-16 md:rounded-[40px] w-full">
                <h3 className="text-[26px] font-[400] leading-[57px] text-center mb-8">Form Fill</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 font-wa text-[13px]">
                    <input
                        type="text"
                        placeholder="FULL NAME"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8]"
                    />
                    <input
                        type="text"
                        placeholder="MOBILE NUMBER"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <input
                        type="email"
                        placeholder="EMAIL"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <input
                        type="text"
                        placeholder="LOCATION"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <textarea
                        placeholder="MESSAGE"
                        rows={4}
                        className="border border-gray-300 rounded-md py-3 px-4 font-sml focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300 col-span-1 md:col-span-2"
                    />
                </form>
                <div className="flex justify-center mt-7">
                    <button
                        type="submit"
                        className="w-[236px] bg-tint-alt text-white py-3 px-6 rounded-[55px] font-sml hover:bg-[#135e6e]"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </Container>
    </section>
}