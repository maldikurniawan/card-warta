import { FaGlobe, FaPhone, FaUser } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import Card from "../components/Card"
import Circle from "../components/Circle"
import { IoIosMail } from "react-icons/io"

const BussinessCard = () => {
    return (
        <div className="relative min-h-screen flex justify-center items-center p-4 overflow-x-hidden">
            <Circle />
            <Card>
                <div className="flex flex-col gap-[10px] md:gap-[20px]">
                    <div className="mx-auto mb-[3px] md:mb-[6px]">
                        <img src="/images/card-logo.png" alt="Card Logo" />
                    </div>
                    <div className="mx-auto bg-[#D4D4D4] rounded-[16px] w-full pt-4 overflow-hidden">
                        <img
                            src="/images/sample.png"
                            alt="Pic"
                            className="object-contain object-bottom h-[290px] w-full"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-[3px] md:mt-[6px]">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaUser className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Nama</p>
                            <p className="text-[#808080] text-sm">Raffi Adrian Alinsky</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaLocationDot className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Alamat</p>
                            <p className="text-[#808080] text-sm">Jl. Sultan Agung Jl. Tirtayasa, Sepang Jaya, Kota Bandar Lampung, Lampung 35135.</p>
                        </div>
                    </div>
                    <hr className="text-[#76777924]" />
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaPhone className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Nomor Handphone</p>
                            <p className="text-[#808080] text-sm">+62 812 1234 3456</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <IoIosMail className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Email</p>
                            <p className="text-[#808080] text-sm">helpdesk@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaGlobe className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Website</p>
                            <p className="text-[#808080] text-sm">lihatwarta.id</p>
                        </div>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default BussinessCard