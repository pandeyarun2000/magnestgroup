import { Footer, Navbar } from "@/components";
import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'

interface Props {
    children: React.ReactNode;
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            
            {children}
            <GoogleAnalytics gaId="G-XR9Y62KK8G" />
            
        </div>
    )
};

export default MarketingLayout
