import React from 'react'

interface Props {
    title: string;
}

const SectionBadge = ({ title }: Props) => {
    return (
        <div className="relative inline-flex h-8 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
            {/* Spinning gold gradient */}
            <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFD700_0%,#FFA500_50%,#FFD700_100%)]" />
            
            {/* Inner badge */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#1A1A1A] px-4 py-1 text-sm font-medium text-[#FFD700] backdrop-blur-3xl">
                {title}
            </span>
        </div>
    )
};

export default SectionBadge

