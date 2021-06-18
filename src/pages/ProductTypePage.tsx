import React from 'react'
import { Input, Text, Button, Flex, Heading, IconButton, Box } from '@chakra-ui/react'

const ProductTypePage = (props: any) => {

	console.log(props.match.params.id)

	return (
		<Flex direction="column" p="1rem">
			<Heading mb="1rem">ประเภทสินค้า</Heading>



			<FormControl>
				<label >ระหัส</label>
				<Input
					// value={value}
					// onChange={handleChange}
					placeholder="Here is a sample placeholder"
					size="sm"
				/>
			</FormControl>

			<FormControl>
				<label >ชื่อประเภท</label>
				<Input
					// value={value}
					// onChange={handleChange}
					placeholder=""
					size="sm"
				/>
			</FormControl>

			<FormControl>
				<label >ชื่อประเภท</label>
				<input type="text" />
			</FormControl>

			<Box>
				<Button
					px="20px"
					colorScheme="green"
					variant="solid"
					size="sm"  >บันทึก</Button>
			</Box>

		</Flex>
	);
}
export default ProductTypePage

export const FormControl = (props: any) => {
	return (
		<Box mb="1.5rem">
			{props.children}
		</Box>
	)
}