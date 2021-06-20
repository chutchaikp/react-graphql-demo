import { Avatar, Box, Flex, Heading, HStack, Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useGetProductTypesQuery } from '../types/graphql.v1';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { parseISO, format } from "date-fns";

const ProductTypesPage = (props: any) => {
	const history = useHistory();
	const [pt, setPt] = useState<any>([])

	const { data, loading, error } = useGetProductTypesQuery({
		onCompleted: (data) => {
			const sorted = data?.productTypes?.sort((a: any, b: any) => {
				return a.code.localeCompare(b.code)
			});
			setPt(sorted)
		}
	})

	return (
		<Flex direction="column" m="1rem">

			<Flex justify="space-between">
				<Heading mb="1rem">
					ประเภทสินค้า
					{pt.length > 0 && <span>({pt.length})</span>}
				</Heading>
				<Button size="sm" colorScheme="cyan" onClick={() => { history.push('./product-type-add-page') }}>เพิ่ม</Button>
			</Flex>

			{loading && <div>กำลังโหลดข้อมูล</div>}

			{!loading && error && (<div>ไม่สามารถโหลดข้อมูลได้</div>)}

			{pt.map((it: any) => {
				return (
					<Item pt={it} />
				)
			})}
		</Flex>
	);
}
export default ProductTypesPage

export const Item = (props: any) => {

	if (!props) {
		return null;
	}

	return (
		<Box borderBottomWidth="1px" borderColor="#d2d6dc" px="0.2rem" py="1rem" >
			<Link to={`/producttypepage/${props.pt.id}`}>

				<HStack>

					<ChevronRightIcon color="gray.400" boxSize={8} />

					<Box w="100%">
						<Flex direction="row" justify="space-between" >
							<Text fontSize="0.9rem" fontWeight="bold" color="gray.900">
								{props.pt.code} - {props.pt.name}
							</Text>
							{/* <Text fontSize="0.8rem" color="gray.400" >
								{format(parseISO(props.pt.updatedAt), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")}
							</Text> */}
							<Text fontSize="0.8rem" color="gray.400" >
								{format(parseISO(props.pt.updatedAt), "d/MM/yy HH:mm")}
							</Text>
						</Flex>
						<Text fontSize="0.8rem" color="gray.600">
							{props.pt.id}
						</Text>
					</Box>

				</HStack>

			</Link>

		</Box>
	)
}
