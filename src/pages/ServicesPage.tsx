// export default ServicesPage

import { AddIcon, CheckIcon, ChevronRightIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { Box, Button, Checkbox, Flex, Heading, HStack, Input, Text } from '@chakra-ui/react';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react'
import styles from '../App.module.css'
import { useDeleteServiceMutation, useGetServicesQuery, useSearchByNameLazyQuery } from '../types/graphql.v1';
import { format, parseISO } from 'date-fns';


function Mysearch(props: any) {
	return (<HStack>
		<Input size="sm" rounded="none" value={props.search} onChange={e => props.setSearch(e.target.value)} />
		<Button size="sm" rounded="none" colorScheme="blue" onClick={async () => {
			// TODO use lazyHook
			await props.searchByName({
				variables: {
					name_contains: props.search
				}
			});
		}}> {props.loading ? 'กำลังค้นหา' : 'ค้นหา'}  </Button>
	</HStack>);
}

const ServicesPage: React.FC = () => {
	const history = useHistory()
	const [search, setSearch] = useState<string>("");
	const [services, setServices] = useState<any>([])

	const { data, loading, error } = useGetServicesQuery(
		{
			onCompleted: (data) => {
				const gdata = [...data.services || []]
				const gDataWithSelectProps = gdata.map((g) => {
					return { ...g, selected: false }
				}); // return new object with selected prop

				console.log(gDataWithSelectProps)

				setServices(gDataWithSelectProps)
			}
		}
	)

	const [deleteServiceMutation, dm] = useDeleteServiceMutation();
	const [searchByName, sq] = useSearchByNameLazyQuery({
		onCompleted: (data) => {
			const gdata = [...data.services || []];
			const gDataWithSelectProps = gdata.map((g) => {
				return { ...g, selected: false }
			});
			setServices(gDataWithSelectProps);
		}
	});

	// if (loading) {
	// 	return <div>Loading ... </div>
	// }
	// if (error) {
	// 	return (<div>{error}</div>)
	// }

	// <Heading>	ประเภทงาน	</Heading>
	return (
		<Flex direction="column" m="1rem">

			<Flex justify="space-between">
				<Heading mb="1rem">
					ประเภทงาน
					{services.length > 0 && <span>({services.length})</span>}
				</Heading>
				<Button size="sm" rounded="none" variant="outline" colorScheme="cyan" onClick={() => { history.push('./service-add-page') }}>เพิ่ม</Button>
			</Flex>

			{loading && <div>กำลังโหลดข้อมูล</div>}

			{!loading && error && (<div>ไม่สามารถโหลดข้อมูลได้</div>)}

			{services.map((it: any) => {
				return (
					<Item key={it.id} service={it} />
				)
			})}
		</Flex>
	);
}
export default ServicesPage

export const Item = (props: any) => {
	if (!props) {
		return null;
	}
	const { id, name, updatedAt, } = props.service;

	return (
		<Box borderBottomWidth="1px" borderColor="#d2d6dc" px="0.2rem" py="1rem" >
			<Link to={`/service-page/${id}`}>

				<HStack>
					<CheckIcon color="gray.400" boxSize={5} />

					<Box w="100%">
						<Flex direction="row" justify="space-between" >
							<Text fontWeight="bold" color="gray.900">
								{name}
							</Text>
							<Text fontSize="0.8rem" color="gray.400" >
								{format(parseISO(updatedAt), "d/MM/yy HH:mm")}
							</Text>
						</Flex>
						<Text fontSize="0.8rem" color="gray.300">
							{id}
						</Text>
					</Box>

				</HStack>

			</Link>

		</Box>
	)
}
