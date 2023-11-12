import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { AnimatePresence } from "framer-motion"

/* eslint-disable */
function LocationProvider({ children }) {
    return <AnimatePresence>{children}</AnimatePresence>
}

export default function Layout() {
    return (
        <>
            <Header />
            <LocationProvider>
                <main className="min-h-screen">
                    <Outlet />
                </main>
            </LocationProvider>
            <Footer />
        </>
    )
}
