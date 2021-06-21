import React from 'react'
interface ServicesProps {
}
const Services: React.FC<ServicesProps> = ({ }) => {
	return (<div></div>);
}
export default Services

// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
// import { Box, Button, Checkbox, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// import React, { useState } from 'react'
// import styles from '../App.module.css'
// import { useDeleteServiceMutation, useGetServicesQuery, useSearchByNameLazyQuery } from '../types/graphql.v1';


// function Mysearch(props: any) {
// 	return (<HStack>
// 		<Input size="sm" rounded="none" value={props.search} onChange={e => props.setSearch(e.target.value)} />
// 		<Button size="sm" rounded="none" colorScheme="blue" onClick={async () => {
// 			// TODO use lazyHook
// 			await props.searchByName({
// 				variables: {
// 					name_contains: props.search
// 				}
// 			});
// 		}}> {props.loading ? 'กำลังค้นหา' : 'ค้นหา'}  </Button>
// 	</HStack>);
// }


// const Services: React.FC = () => {
// 	const [search, setSearch] = useState<string>("");
// 	const [services, setServices] = useState<any>([])

// 	const { data, loading, error } = useGetServicesQuery(
// 		{
// 			onCompleted: (data) => {
// 				const gdata = [...data.services || []]
// 				const gDataWithSelectProps = gdata.map((g) => {
// 					return { ...g, selected: false }
// 				}); // return new object with selected prop
// 				setServices(gDataWithSelectProps)
// 			}
// 		}
// 	)

// 	const [deleteServiceMutation, dm] = useDeleteServiceMutation();
// 	const [searchByName, sq] = useSearchByNameLazyQuery({
// 		onCompleted: (data) => {
// 			debugger;
// 			const gdata = [...data.services || []];
// 			const gDataWithSelectProps = gdata.map((g) => {
// 				return { ...g, selected: false }
// 			});
// 			setServices(gDataWithSelectProps);
// 		}
// 	});

// 	if (loading) {
// 		return <div>Loading ... </div>
// 	}
// 	if (error) {
// 		return (<div>{error}</div>)
// 	}

// 	return (
// 		<Flex direction="column" p="1rem">

// 			<Heading>	ประเภทงาน	</Heading>

// 			<Flex direction="row" justify="space-between" mt="1rem" mb="1rem">
// 				<Mysearch search={search} setSearch={setSearch} searchByName={searchByName} loading={sq.loading}></Mysearch>

// 				<HStack spacing="1rem" justifyContent="flex-end" mb="1rem">
// 					<Text>{dm.loading ? ' deleting' : '  '}</Text>
// 					{services.some((o: any) => o.selected === true) &&
// 						<Button rounded="none" colorScheme="red" size="sm" onClick={async () => {
// 							const removeItems = services.filter((s: any) => {
// 								return s.selected === true;
// 							});
// 							const removeIds = removeItems.map((t: any) => t.id);
// 							// remove from state						
// 							setServices((prev: any) => {
// 								return prev.filter((s: any) => {
// 									return removeIds.indexOf(s.id) === -1;
// 								})
// 							});
// 							// TODO: remove graphql with multiple id						
// 							try {
// 								removeIds.forEach(async (item: any) => {
// 									await deleteServiceMutation(
// 										{ variables: { id: item } }
// 									)
// 								});
// 							} catch (error) {
// 								console.log(error)
// 							}
// 						}} >
// 							<HStack>
// 								<DeleteIcon />
// 								<Text>
// 									ลบ
// 								</Text>
// 							</HStack>
// 						</Button>
// 					}
// 					<Link to="/serviceadd" >
// 						<Button rounded="none" colorScheme="purple" size="sm" >
// 							<HStack>
// 								<AddIcon />
// 								<Text>
// 									เพิ่ม
// 								</Text>
// 							</HStack>
// 						</Button>
// 					</Link>

// 				</HStack>
// 			</Flex>
// 			<table  >
// 				<thead>
// 					<tr>
// 						<th>
// 							<Checkbox size="lg" colorScheme="green" onChange={(e) => {
// 								setServices((prev: any) => {
// 									return prev.map((p: any) => {
// 										return { ...p, selected: e.target.checked }
// 									});
// 								});
// 							}} />
// 						</th>
// 						<th>ระหัส</th>
// 						<th>ชื่องาน</th>
// 						<th></th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{services.map((s: any, index: number) => {
// 						return (
// 							<tr key={index}>
// 								<td style={{ textAlign: 'center', }}>
// 									<Checkbox size="lg"
// 										// value={s.id} 
// 										isChecked={s.selected ? true : false}
// 										onChange={(e) => {
// 											console.log(s)
// 											setServices((prev: any) => {
// 												const newServices = [...services];
// 												// new object 
// 												const sv = newServices.map((o) => {
// 													if (s.id === o.id) {
// 														return { ...o, selected: !o.selected }
// 													} else {
// 														return { ...o }
// 													}
// 												})
// 												setServices(sv);

// 											});

// 										}}
// 										colorScheme="gray"
// 									/>
// 								</td>
// 								<td>
// 									{s.id}
// 								</td>
// 								<td>
// 									{s.name}
// 								</td>
// 								<td>
// 									<HStack spacing={1}>
// 										<Link to={`/service/${s.id}`}>
// 											<EditIcon w="55px" color="gray.500" />
// 										</Link>
// 										<DeleteIcon cursor="pointer" onClick={async () => {
// 											await deleteServiceMutation({
// 												variables: { id: s.id }
// 											})
// 											// remove data from stote										
// 											setServices((prev: any) => {
// 												// filter make return new array 
// 												const newService = prev.filter((sv: any) => {
// 													return sv.id !== s.id;
// 												});
// 												return [...newService]
// 											})

// 										}} color="red.400" />
// 									</HStack>
// 								</td>

// 							</tr>)
// 					})}
// 				</tbody>
// 			</table>

// 		</Flex>
// 	);
// }
// export default Services