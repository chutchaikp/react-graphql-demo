
// export default ServiceAddPage

import { Button, Flex, FormControl, Heading, Input, VStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Service, useCreateServiceMutation, } from '../types/graphql.v1';

const ServiceAddPage = (props: any) => {

	const history = useHistory()
	const [validate, setValidate] = useState<any>({
		name: false,
	})
	const [service, setService] = useState<Service>()
	// // get
	// const { loading, data, error } = useGetServiceQuery({
	// 	variables: { id: props.match.params.id },
	// 	onCompleted: (data: any) => {
	// 		setService(data.service)
	// 	}
	// })
	// // update
	// const [update, updateVars] = useUpdateServiceMutation();

	// // delete
	// const [del, deleteVars] = useDeleteServiceMutation();

	const [create, createVars] = useCreateServiceMutation();

	const formValidate = (e: any) => {
		let newvalidate = { ...validate };
		const frm = e.target;
		newvalidate = { ...newvalidate, name: (frm.name.value.length > 0 ? false : true) }
		setValidate(newvalidate)
		const keys = Object.keys(newvalidate);
		const found = keys.some((s: string) => {
			return newvalidate[s] === true;
		});
		return found;
	}

	const formSubmit = async (e: any) => {
		e.preventDefault();
		const foundInvalid = formValidate(e);
		if (foundInvalid) return false;

		const updateResult = await create({
			variables: {
				service: {
					name: service?.name,
				}
			}
		})

		console.log(updateResult)
		history.goBack();
	}

	return (
		<Flex direction="column" p="1rem">
			<Heading mb="1rem">ประเภทงาน</Heading>
			<Flex direction="column" w="100%">

				<form onSubmit={formSubmit}>
					<VStack spacing={5}>

						<FormControl isInvalid={validate.name}>
							<label >
								ชื่อ <Text as="span" color="gray.200" size="xs">{service?.id}</Text>
								<Input name="name" value={service?.name || ""} onChange={(e) => {
									setService((sv: any) => {
										return { ...sv, name: e.target.value }
									}
									);
								}}
								/>
							</label>
						</FormControl>

						<Flex alignSelf="stretch">
							<Button flex={1} mx="3px" type="submit" colorScheme="teal" variant="solid" >
								{createVars.loading ? 'กำลังบันทึก' : 'บันทึก'}
							</Button>

						</Flex>

					</VStack>

				</form>

			</Flex>

		</Flex>
	);
}
export default ServiceAddPage