import * as React from 'react'
import {Flex} from '@chakra-ui/react'
import MainApp from '../components/main'
import {colors} from '../theme'

function layout() {
	return (
		<Flex bg={colors.primary} justifyContent='center' alignItems='center' height='100vh'>
			<MainApp />
		</Flex>
	)
}

export default layout
