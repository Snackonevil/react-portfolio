import { useEffect, useState, createContext } from "react";

const WindowWidthContext = createContext();

export const WindowWidthProvider = ({ children }) => {
    const [deviceType, setDeviceType] = useState();

    const handleWidth = () => {
        window.innerWidth <= 600
            ? setDeviceType("mobile")
            : window.innerWidth > 600 && window.innerWidth <= 1280
            ? setDeviceType("tablet")
            : setDeviceType("desktop");
    };

    useEffect(() => {
        window.addEventListener("resize", handleWidth);
        window.addEventListener("load", handleWidth);
    }, []);

    return (
        <WindowWidthContext.Provider value={deviceType}>
            {children}
        </WindowWidthContext.Provider>
    );
};

export default WindowWidthContext;
