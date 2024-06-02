import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import LogoImage from "../../../Assets/Logo/Untitled_design-removebg-preview.png";
import styles from "./styles.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
export const AuthNavigationModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      motionPreset="slideInBottom"
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <div className={styles.ribbon}>Be a member</div>
        <ModalHeader as={Flex} justifyContent="center" gap="3">
          <Image w="30px" src={LogoImage} />
          Start your journey
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack gap="2">
            <Button
              onClick={onClose}
              as={Link}
              to="/login"
              gap="2"
              w="100%"
              colorScheme="blue"
            >
              Login To your account
              <BsArrowRight />
            </Button>
            <Button
              as={Link}
              to="/register"
              gap="2"
              w="100%"
              colorScheme="blue"
              variant="outline"
              onClick={onClose}
            >
              Create An account
              <BsArrowRight />
            </Button>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
