// src/store/themeStore.ts

import { create } from "zustand";
interface userType{
  userName:string,
  userPFP:String
}
// Function to save state to local storage
const saveToLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
// Function to load state from local storage
const loadFromLocalStorage = (key: string) => {
  const saved = localStorage.getItem(key);
  return saved
};
type userState = {
  userData: userType | null;
  setUserData: (data:userType | null) => void;
};

export const useUserContext = create<userState>((set) => ({
  // Initialize the user from local storage and apply the class
  userData: (() => {
    const loadedUser = loadFromLocalStorage('userDataStorage');
    if (loadedUser) {
      return JSON.parse(loadedUser);
    }
    else return null
  })(),

  // Function to set a specific theme
  setUserData: (userData) => {
    saveToLocalStorage('userDataStorage', JSON.stringify(userData)); // Save the userDataValues to local storage
    set({ userData });
  },

 
}));