import {Box, Flex, Heading, IconButton, Text, useTheme, HStack} from '@chakra-ui/react'
import {ChakraNestedProvider} from '../ChakraNestedProvider'

export const Section = ({children, heading, description, theme, ...rest}) => {
	const defaultTheme = useTheme()
	const sectionTheme = theme ? theme : defaultTheme
	const id = 'section-id-' + Date.now()

	return (
		<Flex height='fit-content' width='fit-content' display='flex' align-items='center' justify-content='center'>
			<Box id={id} borderColor='secondary' borderWidth={1} boxShadow={'2xl'} bg='primary' borderRadius={8} w='fit-content' {...rest} as='section'>
				<ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
					<Flex direction='column' alignItems='left' justifyContent='center' p={(0, 0, 0, 8)}>
						<HStack>
							<Flex>
								<IconButton></IconButton>
							</Flex>
							<Flex direction='column' alignItems='left'>
								<Heading as='h1' fontSize={16}>
									{heading}
								</Heading>
								<Text>{description}</Text>
							</Flex>
						</HStack>
					</Flex>
					{children}
				</ChakraNestedProvider>
			</Box>
		</Flex>
	)
}
