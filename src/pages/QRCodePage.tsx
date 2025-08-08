import QRCode from 'react-qr-code';
import Circle from "../components/Circle";


const QRCodePage = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 font-bold md:grid-cols-3 xl:grid-cols-4 gap-8 p-10'>
            <Circle />
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }} className='bg-[#E4E4E4] mix-blend-luminosity border border-[#76777924] p-5 rounded-xl'>
                <p className='mb-1'>Ramadhani AK</p>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="https://card-warta.vercel.app/ramadhani-asrofa-kemal"
                    viewBox={`0 0 256 256`}
                />
            </div>

            <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }} className='bg-[#E4E4E4] mix-blend-luminosity border border-[#76777924] p-5 rounded-xl'>
                <p className='mb-1'>Masirol Walfaizin</p>
                <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value="https://card-warta.vercel.app/masirol-walfaizin"
                    viewBox={`0 0 256 256`}
                />
            </div>
        </div>
    );
};

export default QRCodePage;