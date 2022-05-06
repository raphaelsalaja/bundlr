import {Button, ButtonGroup, Text, IconButton} from '@chakra-ui/react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import {Input} from '@chakra-ui/react'
import {Box, Flex, Spacer} from '@chakra-ui/react'
import {HamburgerIcon, AddIcon} from '@chakra-ui/icons'
import {FormControl, FormLabel} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/hooks'
import React from 'react'

function InitialFocus() {
	const {isOpen, onOpen, onClose} = useDisclosure()

	const initialRef = React.useRef()
	const finalRef = React.useRef()

	return (
		<>
			<IconButton onClick={onOpen}>
				<HamburgerIcon />
			</IconButton>

			<Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>First name</FormLabel>
							<Input ref={initialRef} placeholder='First name' />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Last name</FormLabel>
							<Input placeholder='Last name' />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export const Tab = () => {
	return (
		<>
			<Button padding={8} isFullWidth='true' justifyContent='flex-start' w={500}>
				<Flex minWidth='max-content' alignItems='center' gap='2'>
					<Box p='2'>
						<AddIcon />
					</Box>
					<Flex direction='column' p={4} alignItems='flex-start'>
						<Text>Youtube</Text>
						<Text>www.youtube.com</Text>
					</Flex>
					<Spacer />
					<ButtonGroup gap='2'>
						<InitialFocus />
					</ButtonGroup>
				</Flex>
			</Button>
		</>
	)
}
