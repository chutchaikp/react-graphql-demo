import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Button, Checkbox, Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import styles from '../App.module.css'
import { useDeleteServiceMutation, useGatServicesQuery } from '../types/graphql.v1';

const Services = () => {
	const [services, setServices] = useState<any>([])

	const { data, loading, error } = useGatServicesQuery(
		{
			onCompleted: (data) => {
				const gdata = [...data.services || []]
				// selected for checkbox handler
				const gDataWithSelectProps = gdata.map((g) => {
					return { ...g, selected: false }
				}); // return new object with selected prop
				setServices(gDataWithSelectProps)
			}
		}
	)

	const [deleteServiceMutation, dm] = useDeleteServiceMutation({
		// variables: {
		// 	 id: // value for 'id'
		// },
	});

	if (loading) {
		return <div>Loading ... </div>
	}
	if (error) {
		return (<div>{error}</div>)
	}

	return (
		<Flex direction="column">

			Services page

			<Link to="/serviceadd" >
				<Button colorScheme="purple" m="1rem" >
					<HStack>
						<AddIcon fontSize="lg" />
						<Text>
							เพิ่ม
						</Text>
					</HStack>
				</Button>
			</Link>

			<Text>{dm.loading ? ' deleting' : ' xx '}</Text>

			{/* table */}
			<table style={{ margin: '1rem' }}>
				<thead>
					<tr>
						<th>
							<Checkbox size="lg" colorScheme="green" defaultIsChecked />
						</th>
						<th>ระหัส</th>
						<th>ชื่องาน</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{services.map((s: any, index: number) => {
						return (
							<tr key={index}>
								<td>
									<Checkbox size="lg"
										// value={s.id} 
										isChecked={s.selected ? true : false}
										onChange={(e) => {
											console.log(s)
											setServices((prev: any) => {
												const newServices = [...services];
												// new object 
												const sv = newServices.map((o) => {
													if (s.id === o.id) {
														return { ...o, selected: !o.selected }
													} else {
														return { ...o }
													}
												})
												setServices(sv);

											});

										}}
										colorScheme="gray"
									/>

								</td>
								<td>
									{s.id}
								</td>
								<td>
									{s.name}
								</td>
								<td>
									<HStack spacing={1}>
										<Link to={`/service/${s.id}`}>
											<EditIcon w="55px" color="gray.500" />
										</Link>
										<DeleteIcon cursor="pointer" onClick={async () => {
											await deleteServiceMutation({
												variables: { id: s.id }
											})
											// remove data from stote										
											setServices((prev: any) => {
												// filter make return new array 
												const newService = prev.filter((sv: any) => {
													return sv.id !== s.id;
												});
												return [...newService]
											})

										}} color="red.400" />
									</HStack>
								</td>

							</tr>)
					})}
				</tbody>
			</table>

		</Flex>
	);
}
export default Services