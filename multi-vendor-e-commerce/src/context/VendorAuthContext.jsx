import React, { createContext, useContext, useEffect, useState } from "react";

const VendorAuthContext = createContext()

export function VendorAuthProvider({children}){
    const [vendor, setVendor] = useState(null)
    
     // onmount check if vendor info is in local storage   
    useEffect(() => {
    const storedVendor = localStorage.getItem("vendorAuth");
    if (storedVendor) {
      setVendor(JSON.parse(storedVendor))
    }
  }, [])

    useEffect(() =>{
        if(vendor){
            localStorage.setItem("vendor",JSON.stringify(vendor))
        }
        else{
            localStorage.removeItem('vendor')
        }
    },[vendor])
    
    // login function(setting vendor)
    const loginVendor = (vendorData) => {
    setVendor(vendorData)
  }
    // logout function (clearing vendor)
     const logoutVendor = () => {
      setVendor(null)
  }

  return(
    <VendorAuthContext.Provider value={{vendor,loginVendor,logoutVendor}}>
        {children}
    </VendorAuthContext.Provider>
  )
}

export function useVendorAuth(){
    return useContext(VendorAuthContext)
}
