import { createContext, useState, useContext, useEffect } from "react";

const FetchContext = createContext();

export const FetchProvider = ({children}) => {
  const API = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2505-MARK/guests`
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(``)

  useEffect(() => {
    const getGuestList = async() => {
      const response = await fetch(API);
      const responseGuestList = await response.json();
      const listOfGuest = responseGuestList.data;
      setGuestList(listOfGuest);
    }
    getGuestList();
  }, [])

  const value = {
    guestList, setGuestList,
    selectedGuest, setSelectedGuest
  }
  
  return <FetchContext.Provider value={ value }>{children}</FetchContext.Provider>
}


export const useFetch = () => {
  const context = useContext(FetchContext);

  if(!context){
    throw Error (`useFetch must be used witin a FetchContext Provider`)
  }

  return context;
}