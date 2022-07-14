import React from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export function NewClient() {
  // function handleClick() {}
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>New Client</Button>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="outside">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new client</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel htmlFor="name">Business Name</FormLabel>
              <Input id="name" type="text" />
              <FormLabel htmlFor="contact-name">Primary Contact</FormLabel>
              <Input id="contact-name" type="text" />
              <FormLabel htmlFor="contact-phone">Contact Phone</FormLabel>
              <Input id="contact-phone" type="text" />
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input id="email" type="email" />
              <FormLabel htmlFor="address">Address</FormLabel>
              <Textarea
                id="address"
                placeholder="42 Wallaby Way, Sydney, Australia"
                size="sm"
              />
              <FormLabel htmlFor="rate">Hourly Rate</FormLabel>
              <Input id="rate" type="number" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
