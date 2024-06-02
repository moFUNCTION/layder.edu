import { useDisclosure } from "@chakra-ui/react";
import { createContext, useContext } from "react";
import { AuthNavigationModal } from "../../Components/Common/AuthNavigationModal/AuthNavigationModal";

const AuthNavigationContext = createContext();
/**
 *
 * @param {children}
 * @returns {isOpenAuthNavigationModal , onOpenAuthNavigationModal , onCloseAuthNavigationModal , onToggleAuthNavigationModal}
 */
export const AuthNavigationModalProvider = ({ children }) => {
  const {
    isOpen: isOpenAuthNavigationModal,
    onOpen: onOpenAuthNavigationModal,
    onClose: onCloseAuthNavigationModal,
    onToggle: onToggleAuthNavigationModal,
  } = useDisclosure();
  return (
    <AuthNavigationContext.Provider
      value={{
        isOpenAuthNavigationModal,
        onOpenAuthNavigationModal,
        onCloseAuthNavigationModal,
        onToggleAuthNavigationModal,
      }}
    >
      <AuthNavigationModal
        isOpen={isOpenAuthNavigationModal}
        onClose={onCloseAuthNavigationModal}
      />
      {children}
    </AuthNavigationContext.Provider>
  );
};
export const useAuthNavigationModalState = () => {
  return useContext(AuthNavigationContext);
};
