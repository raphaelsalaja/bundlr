import {Box, Flex, Icon, Heading, IconButton, Text, useTheme, HStack} from '@chakra-ui/react'
import {ChakraNestedProvider} from './chakraNestedProvider'
import {appInfo} from '../data/data'

export const Section = ({children, heading, description, theme, ...rest}) => {
	const defaultTheme = useTheme()
	const sectionTheme = theme ? theme : defaultTheme
	const id = 'section-id-' + Date.now()
	return (
		<Flex height='fit-content' width='fit-content' display='flex' align-items='center' justify-content='center'>
			<Box id={id} boxShadow={'2xl'} bg='secondary' borderRadius={8} w='fit-content' {...rest} as='section'>
				<ChakraNestedProvider theme={sectionTheme} cssVarsRoot={'#' + id}>
					<Flex direction='column' alignItems='left' justifyContent='center' p={(0, 0, 0, 8)}>
						<HStack>
							<Flex></Flex>

							<Flex direction='column' alignItems='left'>
								{appInfo.map((app) => (
									<Heading as='h1' fontSize={16} key={app}>
										{app.name}
									</Heading>
								))}
								{appInfo.map((app) => (
									<Text key={app}>{app.version}</Text>
								))}
							</Flex>
						</HStack>
					</Flex>
					{children}
				</ChakraNestedProvider>
			</Box>
		</Flex>
	)
}
