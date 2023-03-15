import { createContext } from "react";
import { useState } from "react";

const PortContext = createContext()

const PortProvider = ({ children }) => {

    const [actualSeccion, setActualSeccion] = useState('Home');

    
    return (
        <PortContext.Provider

            value={{
                actualSeccion,
                setActualSeccion
            }}>

            {children}

        </PortContext.Provider>
    )



}

export default PortContext;


export {
    
    PortProvider
}