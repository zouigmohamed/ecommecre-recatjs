import PropTypes from "prop-types"; 
import { createContext,  useState } from "react";
export const SideBareContext = createContext();
const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false)
  }
  return <SideBareContext.Provider value={{setIsOpen , isOpen, handleClose}}>{children}</SideBareContext.Provider>;
};
SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SidebarProvider;
