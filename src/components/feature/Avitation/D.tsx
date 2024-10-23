import Container from "@/components/common/Container";
import Image from "next/image";

export default function D() {
    return <Container className="text-center py-8">

        <h2 className="text-[29px] md:text-[35px] font-bold text-[#187593] mb-16 max-w-6xl mx-auto">
            Locations of Our Aviation
            & Airport Management Colleges</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto py-6">
            {["Kochi", "Bangalore", "Thodupuzha"].map((location, index) => (
                <div key={index} className="relative mt-6">
                    <Image
                        src={'/images/location.png'}
                        alt={'location'}
                        height={200}
                        width={400}
                        className="rounded-lg"
                    />

                    <button className="absolute bottom-0 right--80 md:right-0 bg-[#187593] w-[145px] h-[35px] text-white rounded-full text-sm text-center font-semibold border-white border-4 hover:bg-tint-alt">
                        {location}
                    </button>
                </div>
            ))}
        </div>
    </Container>
}