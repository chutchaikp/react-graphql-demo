// import { CheckIcon, InfoIcon } from '@chakra-ui/icons';
import { Text, Box, Button, Flex, Heading, HStack, Input, Select, Avatar } from '@chakra-ui/react';
import { format, parseISO } from 'date-fns';
import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useGetProductsByNameLazyQuery, useGetProductsByTypeAndNameLazyQuery, useGetProductsByTypeLazyQuery, useGetProductsQuery } from '../types/graphql.v1';
import emptyImg from '../imgs/empty.jpeg'

const ProductsPage = () => {

	const history = useHistory();

	const [products, setProducts] = useState<any>([])
	const [productTypes, setProductTypes] = useState<any>([]);

	const { data, loading, error } = useGetProductsQuery({
		onCompleted: (res) => {
			// console.log(res);
			setProducts(res.products || [])
			setProductTypes(res.productTypes || [])
		}
	});

	const [byType, byTypeVars] = useGetProductsByTypeLazyQuery({
		onCompleted: (res) => {
			setProducts(res.products)
		}
	})
	const [byName, byNameVars] = useGetProductsByNameLazyQuery({
		onCompleted: (res) => {
			setProducts(res.products)
		}
	});
	const [byTypeAndName, byTypeAndNameVars] = useGetProductsByTypeAndNameLazyQuery({
		onCompleted: (res) => {
			setProducts(res.products)
		}
	});

	return (
		<Flex direction="column" m="1rem">

			<Flex justify="space-between">
				<Heading mb="1rem">
					สินค้า
					{products.length > 0 && <span>({products.length})</span>}
				</Heading>
				<Button size="sm" rounded="none" variant="outline" colorScheme="cyan" onClick={() => { history.push('./service-add-page') }}>เพิ่ม</Button>
			</Flex>

			<ProductSearch productTypes={productTypes}
				onSearch={(type: string, name: string) => {
					// search by type
					// or search by name
					// or search by type & name

					if (type && name) {
						byTypeAndName({
							variables: { name, type }
						});
						return;
					}

					if (name) {
						byName({ variables: { name } })
						return;
					}

					if (type) {
						byType({ variables: { type } })
						return;
					}

					// get all
					byName({ variables: { name: "" } })

				}} />
			{/* 
			
			{/* {loading && <div>กำลังโหลดข้อมูล</div>}

			{!loading && error && (<div>ไม่สามารถโหลดข้อมูลได้</div>)} */}

			{products.map((it: any) => {
				return (
					<Item key={it.id} product={it} />
				)
			})}

			{!loading && products.length === 0 && (<div>ไม่พบข้อมูล</div>)}

		</Flex>
	);
}
export default ProductsPage

export const Item = (props: any) => {
	if (!props) {
		return null;
	}
	const { id, code, name, picture1, updatedAt, product_type, } = props.product;

	return (
		<Box borderBottomWidth="1px" borderColor="#d2d6dc" px="0.2rem" py="1rem" >
			<Link to={`/product-page/${id}`}>

				<HStack>
					<Avatar size="md" name={name} src={picture1 || emptyImg} />
					<Box w="100%">
						<Flex direction="row" justify="space-between" >
							<Text fontWeight="bold" color="gray.900">
								{/* {code} -  */}
								{name}
							</Text>
						</Flex>
						<Text fontSize="0.8rem" color="gray.300">
							{format(parseISO(updatedAt), "d/MM/yy HH:mm")}
							{/* {id} */}
						</Text>

						{product_type.name}
					</Box>

				</HStack>

			</Link>

		</Box>
	)
}


const ProductSearch = (props: any) => {
	const selectRef = useRef<HTMLSelectElement>(null)
	const inpRef = useRef<HTMLInputElement>(null);

	return (<Flex direction="column">
		{
			/* Type */
		}
		<Select defaultValue="" size="sm" mb="0.5rem" ref={selectRef} onChange={() => { props.onSearch(selectRef.current?.value, inpRef.current?.value) }}>
			<option value="">ทั้งหมด</option>
			{props.productTypes.length > 0 && props.productTypes.map((pt: any) => {
				return <option key={pt.id} value={pt.id}>{pt.name}</option>;
			})}
		</Select>
		{
			/* Name search */
		}
		<HStack>
			<Input size="sm" ref={inpRef} />
			<Button onClick={() => props.onSearch(selectRef.current?.value, inpRef.current?.value)}
				size="sm" colorScheme="blue" variant="outline" rounded="none">ค้นหา</Button>
		</HStack>
	</Flex>);
}
