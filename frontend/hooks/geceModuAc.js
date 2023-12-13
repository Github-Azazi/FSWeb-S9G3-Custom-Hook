import { useState } from 'react';
import useLocalStorage from './localStorageKullan';

const useGeceModuAc = () => {
 const [geceModu, setGeceModu] = useLocalStorage('darkMode',false,
 localStorage.getItem('geceModu') === true ? true:false

 );

  const toggleGeceModu = () => {
    setGeceModu(prevState => !prevState);
  };

  return [geceModu, toggleGeceModu];

};

export default useGeceModuAc;

