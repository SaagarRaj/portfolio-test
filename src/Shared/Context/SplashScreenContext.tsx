'use client'
import { createContext, useContext, useEffect, useState } from "react";

interface SplashScreenContextProps {
    showSplash: boolean;
    hideSplash: () => void;
}

const SplashScreenContext = createContext<SplashScreenContextProps | undefined>(undefined);

export const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
    const [showSplash, setShowSplash] = useState<boolean>(true);

    const hideSplash = () => setShowSplash(false);

    useEffect(() => {
        const splashShown = localStorage.getItem("splashShown");
        if (splashShown) {
            setShowSplash(false);
        } else {
            const timer = setTimeout(() => {
                setShowSplash(false);
                localStorage.setItem("splashShown", "true");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <SplashScreenContext.Provider value={{ showSplash, hideSplash }}>
            {children}
        </SplashScreenContext.Provider>
    );
};

export const useSplashScreen = () => {
    const context = useContext(SplashScreenContext);
    if (context === undefined) {
        throw new Error("useSplashScreen must be used within a SplashScreenProvider");
    }
    return context;
};
