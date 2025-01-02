"use client"
// import React, { useState } from 'react'

// export const uselocalstorage = (key,defaultValue) => {
//  const [storeValue ,setValue ]=useState(()=>{
//     try {
//         const val=localStorage.getItem(key);
//         if(val){
//             return JSON.parse(val);
//         }else{
//             localStorage.setItem(key,JSON.stringify(defaultValue));
//             return defaultValue;
//         }
//     } catch (error) {
//         return defaultValue;
        
//     }
//  });
//  const setVal =newValue=>{
//     try {
//         localStorage.setItem(key,JSON.stringify(newValue));
//     } catch (error) {
//         console.log(error);
//     }
//     setValue(newValue);
//  };
//  return [storeValue,setVal];
// }

// export default uselocalstorage;

import React, { useState } from 'react';

// Custom hook for using local storage
export const useLocalStorage = (key, defaultValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const val = localStorage.getItem(key);
      if (val) {
        return JSON.parse(val);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (error) {
      return defaultValue;
    }
  });

  const setValue = newValue => {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
      setStoredValue(newValue);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
