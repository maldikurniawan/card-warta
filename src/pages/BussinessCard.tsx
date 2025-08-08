import { useState } from "react"
import { FaGlobe, FaPhone, FaUser } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoIosArrowForward, IoIosMail } from "react-icons/io"
import { Navigate, useParams } from "react-router-dom"
import Card from "../components/Card"
import Circle from "../components/Circle"

const BussinessCard = () => {
    const { id } = useParams();

    const [data] = useState([
        {
            id: "ramadhani-asrofa-kemal",
            name: "Ramadhani AK",
            image: "/images/sample.png",
            alamat: "Jl. Sultan Agung Jl. Tirtayasa, Sepang Jaya, Kota Bandar Lampung, Lampung 35135.",
            whatsapp: "+62 812 1234 3456",
            email: "helpdesk@gmail.com",
            website: "lihatwarta.id",
        },
        {
            id: "masirol-walfaizin",
            name: "Masirol Walfaizin",
            image: "/images/masirol.png",
            alamat: "Jl. Sultan Agung Jl. Tirtayasa, Sepang Jaya, Kota Bandar Lampung, Lampung 35135.",
            whatsapp: "+62 812 1234 3456",
            email: "helpdesk@gmail.com",
            website: "lihatwarta.id",
        },
    ]);

    const dataCard = data.find((item) => item.id === id);

    if (!dataCard) {
        return <Navigate to="/" />;
    }


    return (
        <div className="relative min-h-screen flex justify-center items-center p-5 overflow-x-hidden">
            <Circle />
            <Card>
                <div className="flex flex-col gap-[20px]">
                    <div className="mx-auto mb-[6px]">
                        <img src="/images/card-logo.png" alt="Card Logo" />
                    </div>
                    <div className="mx-auto bg-[#D4D4D4] rounded-[16px] shadow w-full pt-4 overflow-hidden border border-[#76777924]">
                        <img
                            src={data.find((item) => item.id === id)?.image}
                            alt={dataCard?.name}
                            className="object-contain object-bottom h-[290px] w-full"
                        />
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-[6px]">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaUser className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Nama</p>
                            <p className="text-[#808080] text-sm">{dataCard?.name}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                            <FaLocationDot className="text-[#DD8600] w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#060606] text-base font-semibold">Alamat</p>
                            <p className="text-[#808080] text-sm">{dataCard?.alamat}</p>
                        </div>
                    </div>
                    <hr className="text-[#76777924]" />
                    <a href="#" target="_blank" className="flex items-center justify-between group">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                                <FaPhone className="text-[#DD8600] w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#060606] text-base font-semibold">Nomor Handphone</p>
                                <p className="text-[#808080] text-sm">{dataCard?.whatsapp}</p>
                            </div>
                        </div>
                        <IoIosArrowForward className="text-[#060606] w-8 h-8 group-hover:bg-[#D4D4D4] rounded-[4px] p-1" />
                    </a>
                    <a href="#" target="_blank" className="flex items-center justify-between group">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                                <IoIosMail className="text-[#DD8600] w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#060606] text-base font-semibold">Email</p>
                                <p className="text-[#808080] text-sm">{dataCard?.email}</p>
                            </div>
                        </div>
                        <IoIosArrowForward className="text-[#060606] w-8 h-8 group-hover:bg-[#D4D4D4] rounded-[4px] p-1" />
                    </a>
                    <a href="#" target="_blank" className="flex items-center justify-between group">
                        <div className="flex flex-row items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-[8px] p-2 border border-[#76777924]">
                                <FaGlobe className="text-[#DD8600] w-6 h-6" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[#060606] text-base font-semibold">Website</p>
                                <p className="text-[#808080] text-sm">{dataCard?.website}</p>
                            </div>
                        </div>
                        <IoIosArrowForward className="text-[#060606] w-8 h-8 group-hover:bg-[#D4D4D4] rounded-[4px] p-1" />
                    </a>
                </div>
            </Card>
        </div>
    )
}

export default BussinessCard