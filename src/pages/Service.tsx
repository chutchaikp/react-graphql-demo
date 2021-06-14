import { Button, FormControl, FormLabel, HStack, Input, Textarea, Text, Box, Flex, Heading } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDeleteServiceMutation, useGetServiceQuery, useUpdateServiceMutation } from '../types/graphql.v1';

const Service = (props: any) => {
	const history = useHistory();
	const [service, setService] = useState<any>({})

	// if this page for adding  
	// add new page for add ? or use this page ?
	// ?



	const { loading, error } = useGetServiceQuery({
		onCompleted: (data) => {
			setService({ ...data.service || {} })
		},
		variables: { id: props.match.params.id }
	});



	const [update, ud] = useUpdateServiceMutation()
	const [deleteServiceMutation, del] = useDeleteServiceMutation();

	if (loading) {
		return (<div>Loading ...</div>)
	}
	if (error) {
		return (<div>{error}</div>)
	}

	return (
		<Flex p="1rem" direction="column" >
			<Heading>แก้ไขประเภทงาน</Heading>

			<Box w="500px" m="1rem">

				<HStack justifyContent="flex-end">
					<Button rounded="none" size="sm" colorScheme="teal" onClick={async () => {
						const result = await update({
							variables: {
								service: { name: service.name, desc: service.desc },
								id: props.match.params.id
							}
						})
						setTimeout(() => history.push('/services'), 100);

					}} > {ud.loading ? 'กำลังบันทึก' : 'บันทึก'} </Button>
					<Button rounded="none" size="sm" colorScheme="red" onClick={async () => {
						await deleteServiceMutation({
							variables: { id: service.id }
						});
						setTimeout(() => history.push('/services'), 10);
					}}
					> {del.loading ? 'กำลังลบ' : 'ลบ'} </Button>
				</HStack>

				<FormControl >
					<FormLabel>ประเภทงาน</FormLabel>
					<Input value={service.name} onChange={(e) => {
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
				<Text color="gray.300"> last update at {new Date(service.updatedAt).toLocaleString()} </Text>

			</Box>
		</Flex>
	);
}
export default Service