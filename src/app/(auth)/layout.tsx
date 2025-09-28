import React from 'react'
import { GoogleAnalytics } from '@next/third-parties/google'



interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="flex items-center justify-center h-screen">
            {children}
            <GoogleAnalytics gaId="G-XR9Y62KK8G" />
        </div>
    )
};

export default AuthLayout
