import React from 'react'

interface ServiceAddProps {

}

const ServiceAdd: React.FC<ServiceAddProps> = ({ }) => {
	return (
		<div></div>
	);
}
export default ServiceAdd

// import { Button, FormControl, FormLabel, HStack, Input, Textarea, Text, Box, Flex, Heading } from '@chakra-ui/react';
// import React, { useEffect, useRef, useState } from 'react'
// import { useHistory } from 'react-router-dom'
// import { useCreateServiceMutation, useGetServiceQuery, useUpdateServiceMutation } from '../types/graphql.v1';

// const Service = (props: any) => {
// 	// const element = React.useRef<ElementType>(null);
// 	const textInput = useRef<HTMLInputElement>(null);
// 	const [submitted, setSubmitted] = useState(false)
// 	const history = useHistory();
// 	const [service, setService] = useState<any>({})
// 	// Add new service
// 	// const [update, ud] = useUpdateServiceMutation()
// 	const [create, crt] = useCreateServiceMutation()

// 	useEffect(() => {
// 		debugger;
// 		console.log('useEffect again');
// 		textInput.current?.focus();
// 	}, [])

// 	return (
// 		<Flex p="1rem" direction="column">
// 			<Heading>เพิ่มประเภทงาน</Heading>

// 			<Box w="500px" p="1rem" m="1rem">

// 				<HStack justifyContent="flex-end">
// 					<Button rounded="none" size="sm" colorScheme="teal" onClick={async (e) => {
// 						e.preventDefault();
// 						await create({
// 							variables: { service: { name: service.name, desc: service.desc } }
// 						})
// 						setTimeout(() => history.push('/services'), 100);
// 					}} > {crt.loading ? 'กำลังบันทึก' : 'บันทึก'}  </Button>
// 				</HStack>

// 				<FormControl  >
// 					<FormLabel>ประเภทงาน</FormLabel>
// 					{/* How to focus this text field */}
// 					<Input value={service.name} ref={textInput} onChange={(e) => {
// 						setService((prev: any) => {
// 							return { ...prev, name: e.target.value }
// 						})
// 					}} />
// 				</FormControl>

// 				<FormControl >
// 					<FormLabel>รายละเอียด</FormLabel>
// 					<Textarea
// 						value={service.desc}
// 						onChange={(e) => {
// 							setService((prev: any) => {
// 								return { ...prev, desc: e.target.value }
// 							})
// 						}}
// 						size="sm"
// 					/>
// 				</FormControl>
// 			</Box>
// 		</Flex>
// 	);
// }
// export default Service