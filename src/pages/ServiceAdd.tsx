import { Button, FormControl, FormLabel, HStack, Input, Textarea, Text, Box } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useCreateServiceMutation, useGetServiceQuery, useUpdateServiceMutation } from '../types/graphql.v1';

const Service = (props: any) => {
	// const element = React.useRef<ElementType>(null);
	const textInput = useRef<HTMLInputElement>(null);
	const [submitted, setSubmitted] = useState(false)
	const history = useHistory();
	const [service, setService] = useState<any>({})
	// Add new service
	// const [update, ud] = useUpdateServiceMutation()
	const [create, crt] = useCreateServiceMutation()

	useEffect(() => {
		textInput.current?.focus();
		console.log('do focus textbox')
	}, [])

	return (
		<div>
			Add new Service

			<Box w="500px" p="1rem" m="1rem">

				<HStack>
					<Button size="sm" colorScheme="teal" onClick={async (e) => {
						e.preventDefault();
						await create({
							variables: { service: { name: service.name, desc: service.desc } }
						})
						setTimeout(() => history.push('/services'), 100);
					}} > {crt.loading ? 'กำลังบันทึก' : 'บันทึก'}  </Button>
				</HStack>

				<FormControl  >
					<FormLabel>ประเภทงาน</FormLabel>
					{/* How to focus this text field */}
					<Input value={service.name} ref={textInput} onChange={(e) => {
						setService((prev: any) => {
							return { ...prev, name: e.target.value }
						})
					}} />
				</FormControl>

				<FormControl >
					<FormLabel>รายละเอียด</FormLabel>
					<Textarea
						value={service.desc}
						onChange={(e) => {
							setService((prev: any) => {
								return { ...prev, desc: e.target.value }
							})
						}}
						size="sm"
					/>
				</FormControl>
			</Box>
		</div>
	);
}
export default Service