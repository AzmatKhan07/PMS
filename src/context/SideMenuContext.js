// import { createContext, useState } from "react";

// // Create the context
// export const SideMenuContext = createContext();

// // Create a provider component
// export const SideMenuProvider = ({ children }) => {
//   const [isSideMenuVisible, setIsSideMenuVisible] = useState(false);

//   const toggleSideMenu = () => {
//     setIsSideMenuVisible(!isSideMenuVisible);
//   };

//   return (
//     <SideMenuContext.Provider value={{ isSideMenuVisible, toggleSideMenu }}>
//       {children}
//     </SideMenuContext.Provider>
//   );
// };
