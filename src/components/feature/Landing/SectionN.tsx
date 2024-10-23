import Container from "@/components/common/Container";

export default function SectionN() {
    return <section className="w-full">
        <Container>
            <div className="mt-16 bg-[#F8F8F8] py-10 px-6 md:px-16 rounded-[40px] w-full">
                <h3 className="text-3xl font-bold text-center mb-8">Enquiry Form</h3>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8]"
                    />
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <input
                        type="text"
                        placeholder="Location"
                        className="border border-gray-300 rounded-md font-sml py-3 px-4 focus:outline-none focus:ring-2 bg-[#F8F8F8] focus:ring-blue-300"
                    />
                    <textarea
                        placeholder="Message"
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