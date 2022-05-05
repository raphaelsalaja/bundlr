import {Link, Flex} from '@chakra-ui/react'

export const Tab = ({icon, name, url, bg, ...rest}) => {
	return (
		<Flex bg={bg}>
			<Link href='https://chakra-ui.com' isExternal>
				Chakra Design system
			</Link>
		</Flex>
	)
}
