import React from 'react'
import "../styles/globals.css"
import RootLayoutProviders from './_components/RootLayoutProvider'
import Header from './_components/Header'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <html lang="en">
            <body className="bg-orange-50">
                <RootLayoutProviders>
                    <Header />
                    {children}
                </RootLayoutProviders>
            </body>
        </html>
    )
}

export default Layout