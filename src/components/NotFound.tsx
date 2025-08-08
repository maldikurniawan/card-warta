import Card from "./Card";
import Circle from "./Circle";

const NotFound = () => {
    return (
        <div className="relative h-screen flex justify-center items-center p-5">
            <Circle />
            <Card>
                <div className='flex flex-col'>
                    <img src="/images/not-found.png" alt="Not Found" className="" />
                    <div className='text-center text-[32px] text-[#060606] font-bold'>
                        Page Not Found!
                    </div>
                    <div className="flex flex-col text-center ">
                        <p className="text-sm text-[#060606] pt-[12px]">Halaman Tidak Ditemukan</p>
                        <p className="text-sm text-[#808080] pt-1">Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan. Silakan periksa kembali URL atau kembali ke halaman utama.</p>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default NotFound;