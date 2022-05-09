import {Box, Flex, Heading, Text, useTheme, HStack} from '@chakra-ui/react'
import {ChakraNestedProvider} from './chakraNestedProvider'
import {appInfo} from '../data/data'

export const Section = ({children, heading, description, theme, ...rest}) => {
	const defaultTheme = useTheme()
	const sectionTheme = theme ? theme : defaultTheme
	const id = 'section-id-' + Date.now()
	return (
		<Flex height='fit-content' width='fit-content' display='flex' align-items='center' justify-content='center'>
			<Box id={id} boxShadow={'2xl'} bg='secondary' borderRadius={24} w='fit-content' {...rest} as='section'>
				<ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
					<Flex direction='column' alignItems='left' justifyContent='center' p={(0, 0, 0, 8)}>
						<HStack>
							{appInfo.map((app) => (
								<Flex direction='row' alignItems='center' gap={1}>
									<Text key={app}>{app.name}</Text>
									<Text key={app}>{app.version}</Text>
								</Flex>
							))}
						</HStack>
					</Flex>
					{children}
				</ChakraNestedProvider>
			</Box>
		</Flex>
	)
}
