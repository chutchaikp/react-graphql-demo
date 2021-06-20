import React, { useState } from 'react'
import { Input, Text, Button, Flex, Heading, FormControl, VStack, } from '@chakra-ui/react'
import { ProductType, useDeleteProductTypeMutation, useGetProductTypeQuery, useUpdateProductTypeMutation, } from '../types/graphql.v1'
import { useHistory, } from 'react-router-dom'

const ProductTypePage = (props: any) => {
	const history = useHistory()
	const [validate, setValidate] = useState<any>({
		code: false,
		name: false,
	});
	const [pt, setPt] = useState<ProductType>()
	const { loading, data, error } = useGetProductTypeQuery({
		variables: { id: props.match.params.id },
		onCompleted: (data: any) => {
			setPt(data.productType);
		}
	})
	const [update, upt] = useUpdateProductTypeMutation();
	const [del, delResult] = useDeleteProductTypeMutation();

	const formValidate = (e: any) => {
		let newdata = { ...validate };
		const frm = e.target;
		newdata = { ...newdata, code: (frm.code.value.length > 0 ? false : true) }
		newdata = { ...newdata, name: (frm.name.value.length > 0 ? false : true) }
		const dtx = newdata;
		setValidate(dtx);

		const keys = Object.keys(dtx);
		const found = keys.some((s: string) => {
			return dtx[s] === true;
		});
		return found;
	}

	const formSubmit = async (e: any) => {
		e.preventDefault();
		const foundInvalid = formValidate(e);
		if (foundInvalid) return false;
		const result = await update({
			variables: {
				id: props.match.params.id,
				productType: {
					code: pt?.code,
					name: pt?.name,
				}
			}
		})

		// save 
		setTimeout(() => history.push('../producttypes'), 100)

	}

	return (
		<Flex direction="column" p="1rem">
			<Heading mb="1rem">ประเภทสินค้า</Heading>
			<Flex direction="column" w="100%">
				{loading && (
					<div>Loaing ...</div>
				)}

				{!loading && data && (
					<form onSubmit={formSubmit}>
						<VStack spacing={5}>

							<FormControl isInvalid={validate.code}>
								<label >
									ระหัส <Text as="span" color="gray.200" size="xs">{pt?.id}</Text>
									<Input name="code" value={pt?.code || ""} onChange={(e) => {
										setPt((pt: any) => {
											return { ...pt, code: e.target.value }
										}
										);
									}}
									/>
								</label>
							</FormControl>

							<FormControl isInvalid={validate.name}>
								<label >ชื่อประเภท
									<Input name="name" value={pt?.name || ""} onChange={(e) => {
										setPt((pt: any) => {
											return { ...pt, name: e.target.value }
										});
									}} />
								</label>
							</FormControl>

							<Flex alignSelf="stretch">
								<Button flex={1} mx="3px" type="submit" colorScheme="teal" variant="solid" >
									{upt.loading ? 'กำลังบันทึก' : 'บันทึก'}
								</Button>

								<Button flex={1} mx="3px" colorScheme="red"
									onClick={async () => {
										const result = await del(
											{ variables: { id: pt?.id! } }
										);
										setTimeout(() => {
											history.goBack(); // .push('./producttypes');
										}, 100);

									}} >{delResult.loading ? 'กำลังลบ' : 'ลบ'} </Button>
							</Flex>

						</VStack>

					</form>
				)}

			</Flex>

		</Flex>
	);
}

export default ProductTypePage
