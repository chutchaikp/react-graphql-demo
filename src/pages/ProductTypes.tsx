import { Avatar, Box, Flex, Heading, HStack, Icon, Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetProductTypesQuery } from '../types/graphql.v1';
import { ChevronRightIcon } from '@chakra-ui/icons'
import { parseISO, format } from "date-fns";


const ProductTypes = (props: any) => {
	const [pt, setPt] = useState<any>([])

	const { data, loading, error } = useGetProductTypesQuery({
		onCompleted: (data) => {
			debugger;
			// 	objs.sort(function(a, b) {
			// 		return a.last_nom.localeCompare(b.last_nom)
			// });
			const sorted = data?.productTypes?.sort((a: any, b: any) => {
				return a.code.localeCompare(b.code)
			});
			setPt(sorted)
		}
	})

	return (
		<Flex direction="column" m="1rem">
			<Heading mb="1rem">ประเภทสินค้า</Heading>

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
export default ProductTypes

export const Item = (props: any) => {

	if (!props) {
		return null;
	}

	return (
		<Box borderBottomWidth="1px" borderColor="#d2d6dc" px="0.2rem" py="1rem" >
			<Link to="/producttypepage/1">

				<HStack>

					<ChevronRightIcon color="gray.400" boxSize={8} />

					<Box w="100%">
						<Flex direction="row" justify="space-between" >
							<Text fontSize="0.9rem" fontWeight="bold" color="gray.900">
								{props.pt.code} - {props.pt.name}
							</Text>
							<Text fontSize="0.8rem" color="gray.400" >
								{format(parseISO(props.pt.updatedAt), "MMM d")}
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
