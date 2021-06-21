import { CheckIcon } from '@chakra-ui/icons';
import { Text, Box, Button, Flex, Heading, HStack, Input } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const ProductsPage = () => {

	const history = useHistory();

	const [products, setProducts] = useState([
		{
			code: "p-001",
			barcode: "p-001",
			type: 1,
			name: "เครื่องปรับอากาศไดกิ้น",
			detail: "FTM-R32FTM 09NV2S / 89000 BTU",
			// ต้นทุน
			cost_price: 16000,
			// ราคาขาย 
			sale_price1: 16400,
			sale_price2: 17000,
			sale_price3: 17500,
			remark: "relem200",
			pictures: [],
			updatedAt: '2021-01-01',
		},
		{
			code: "p-002",
			barcode: "p-002",
			type: 1,
			name: "เครื่องปรับอากาศไดกิ้น 2",
			detail: "FTM-R32FTM 09NV2S / 89000 BTU 2",
			// ต้นทุน
			cost_price: 10000,
			// ราคาขาย 
			sale_price1: 12400,
			sale_price2: 13000,
			sale_price3: 14500,
			remark: "relem200",
			pictures: [],
			updatedAt: '2021-01-01',
		},

	])

	return (
		<Flex direction="column" m="1rem">

			<Flex justify="space-between">
				<Heading mb="1rem">
					สินค้า
					{products.length > 0 && <span>({products.length})</span>}
				</Heading>
				<Button size="sm" rounded="none" variant="outline" colorScheme="cyan" onClick={() => { history.push('./service-add-page') }}>เพิ่ม</Button>
			</Flex>
			{/* 
			<Mysearch search={search} setSearch={setSearch} searchByName={searchByName} loading={sq.loading}></Mysearch> */}


			{/* {loading && <div>กำลังโหลดข้อมูล</div>}

			{!loading && error && (<div>ไม่สามารถโหลดข้อมูลได้</div>)} */}

			{products.map((it: any) => {
				return (
					<Item key={it.id} product={it} />
				)
			})}
		</Flex>
	);
}
export default ProductsPage


export const Item = (props: any) => {
	if (!props) {
		return null;
	}
	const { id, code, name, updatedAt, } = props.product;

	return (
		<Box borderBottomWidth="1px" borderColor="#d2d6dc" px="0.2rem" py="1rem" >
			<Link to={`/service-page/${id}`}>

				<HStack>
					<CheckIcon color="gray.400" boxSize={5} />

					<Box w="100%">
						<Flex direction="row" justify="space-between" >
							<Text fontWeight="bold" color="gray.900">
								{code} - {name}
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


// function Mysearch(props: any) {
// 	return (<HStack>
// 		<Input size="sm" rounded="none" value={props.search} onChange={e => props.setSearch(e.target.value)} />
// 		<Button size="sm" rounded="none" colorScheme="blue" onClick={async () => {			
// 			await props.searchByName({
// 				variables: {
// 					name_contains: props.search
// 				}
// 			});
// 		}}> {props.loading ? 'กำลังค้นหา' : 'ค้นหา'}  </Button>
// 	</HStack>);
// }
