import React from 'react'
/**
 * CONCEPT 1: The Outlet Component
 * The 'Outlet' is a specialized component provided by 'react-router-dom'.
 * It serves as a placeholder or a "portal" for child routes.
 */
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout(){
    /**
     * CONCEPT 2: Shared UI (Persistent Components)
     * In a Single Page Application (SPA), we don't want to reload the Header 
     * and Footer every time a user clicks a link. By placing <Header /> and 
     * <Footer /> here, they stay visible across all pages.
     */
    return(
        /**
         * CONCEPT 3: React Fragments (<> ... </>)
         * React components must return a single parent element. Fragments allow 
         * you to group a list of children without adding extra nodes (like <div>) 
         * to the actual DOM.
         */
        <>
            <Header/>
            
            {/**
             * CONCEPT 4: Nested Route Injection
             * When you navigate to '/AboutUs' or '/Contact', React Router 
             * looks at the 'children' defined in your router configuration.
             * It then "swaps" the <Outlet /> for the specific component 
             * matched by the URL.
             */}
            <Outlet />
            
            <Footer />
        </>
    )
}

export default Layout