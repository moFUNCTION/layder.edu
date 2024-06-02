import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
export const SearchModal = ({ isOpen, onClose, onSubmit, ...rest }) => {
  return (
    <Modal
      motionPreset="slideInBottom"
      size="lg"
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <InputGroup
            _placeholder={{ color: "blue.700" }}
            size="lg"
            variant="flashed"
            w="100%"
            gap="1"
            {...rest}
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit && onSubmit();
            }}
            as="form"
          >
            <InputLeftAddon
              borderRadius="full"
              as={Button}
              variant="ghost"
              type="submit"
              color="blue.700"
            >
              <BsSearch />
            </InputLeftAddon>
            <Input placeholder="Search for a room " />
          </InputGroup>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
SearchModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
