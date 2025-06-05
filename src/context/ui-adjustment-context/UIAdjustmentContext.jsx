import React , {useEffect, useState , useContext , createContext} from "react";

const UIAdjustmentContext = createContext();

export function UIAdjustmentProvider({ children }) {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <UIAdjustmentContext.Provider value={windowSize}>
      {children}
    </UIAdjustmentContext.Provider>
  );
}

export function useWindowSize() {
  return useContext(UIAdjustmentContext);
}
