"use client";
import { useRef } from "react";
import QRCode from "react-qr-code";
import Circle from "../components/Circle";

interface QRItem {
    name: string;
    url: string;
}

const QRCodePage = () => {
    const qrRefs = useRef<(SVGSVGElement | null)[]>([]);

    const data: QRItem[] = [
        { name: "Ramadhani AK", url: "https://card-warta.vercel.app/ramadhani-asrofa-kemal" },
        { name: "Masirol Walfaizin", url: "https://card-warta.vercel.app/masirol-walfaizin" },
    ];

    const downloadQR = (index: number, name: string) => {
        const svg = qrRefs.current[index];
        if (!svg) return;

        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");
            const downloadLink = document.createElement("a");
            downloadLink.download = `${name}.png`;
            downloadLink.href = pngFile;
            downloadLink.click();
        };
        img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 font-bold md:grid-cols-3 xl:grid-cols-4 gap-8 p-10">
            <Circle />
            {data.map((item, index) => (
                <div
                    key={index}
                    style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}
                    className="bg-[#E4E4E4] mix-blend-luminosity border border-[#76777924] p-5 rounded-xl flex flex-col items-center"
                >
                    <p className="mb-1">{item.name}</p>
                    <QRCode
                        ref={(el: any) => (qrRefs.current[index] = el)}
                        size={256}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        value={item.url}
                        viewBox={`0 0 256 256`}
                    />
                    <button
                        onClick={() => downloadQR(index, item.name)}
                        className="mt-3 bg-[#D4D4D4] text-black border border-[#76777924] cursor-pointer px-3 py-1 rounded w-full   "
                    >
                        Unduh
                    </button>
                </div>
            ))}
        </div>
    );
};

export default QRCodePage;
