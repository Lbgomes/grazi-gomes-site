import { useEffect } from "react";
import "@/App.css";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { MarqueeStrip } from "@/components/site/MarqueeStrip";
import { About } from "@/components/site/About";
import { Manifesto } from "@/components/site/Manifesto";
import { Quiz } from "@/components/site/Quiz";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function App() {
    useEffect(() => {
        const lenis = new Lenis({ lerp: 0.09 });
        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        const onClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]');
            if (!anchor) return;
            const target = document.querySelector(anchor.getAttribute("href"));
            if (target) {
                e.preventDefault();
                lenis.scrollTo(target, { offset: -60 });
            }
        };
        document.addEventListener("click", onClick);
        return () => {
            document.removeEventListener("click", onClick);
            lenis.destroy();
        };
    }, []);

    return (
        <div className="App bg-[#0A0A0C] text-[#F2F2F2]">
            <div className="grain-overlay" aria-hidden="true" />
            <Navbar />
            <main>
                <Hero />
                <MarqueeStrip />
                <About />
                <Manifesto />
                <Quiz />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppFab />
            <Toaster theme="dark" position="bottom-center" />
        </div>
    );
}

export default App;
