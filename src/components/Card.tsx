import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div className='bg-[#E4E4E4] border border-[#76777924] rounded-[16px] p-[34px] mix-blend-luminosity'>
            {children}
        </div>
    )
}

export default Card