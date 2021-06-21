// export default ProductPage

import { Select, Button, Flex, FormControl, Heading, Input, VStack, Text, HStack, Textarea, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react';
import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import { useGetProductQuery } from '../types/graphql.v1';

const ProductPage = (props: any) => {

	const history = useHistory()
	const [validate, setValidate] = useState<any>({
		name: false,
	})
	const [product, setProduct] = useState<any>()
	const [productType, setProductType] = useState<any>([])

	const { loading, data, error } = useGetProductQuery({
		variables: { id: props.match.params.id },
		onCompleted: (data) => {
			debugger;
			setProduct(data.product)
			setProductType(data.productTypes)
		}
	});
	// // update
	// const [update, updateVars] = useUpdateServiceMutation();

	// // delete
	// const [del, deleteVars] = useDeleteServiceMutation();

	const formValidate = (e: any) => {
		// let newvalidate = { ...validate };
		// const frm = e.target;
		// newvalidate = { ...newvalidate, name: (frm.name.value.length > 0 ? false : true) }
		// setValidate(newvalidate)
		// const keys = Object.keys(newvalidate);
		// const found = keys.some((s: string) => {
		// 	return newvalidate[s] === true;
		// });
		// return found;
	}

	const formSubmit = async (e: any) => {
		// e.preventDefault();
		// const foundInvalid = formValidate(e);
		// if (foundInvalid) return false;

		// const updateResult = await update({
		// 	variables: {
		// 		id: props.match.params.id,
		// 		service: {
		// 			name: service?.name,
		// 		}
		// 	}
		// })

		// console.log(updateResult)
		// history.goBack();
	}

	return (
		<Flex w="100%" direction="column" p="1rem">
			<Heading mb="1rem">
				สินค้า
			</Heading>
			<Flex direction="column" >
				{/* {loading && (
					<div>Loaing ...</div>
				)} */}

				{!loading && data && (
					<form onSubmit={formSubmit}>
						<VStack spacing={5}>

							{/* Product Code */} {/* Barcode  */}
							<FormControl>
								<label>
									ระหัส <Input name="code" />
								</label>
							</FormControl>

							{/* Product Type */}
							<FormControl>
								<label>
									ประเภท
									<Select value={product?.product_type.id || ""}>
										{productType.map((pt: any) => {
											return (
												<option key={pt.id} value={pt.id}>{pt.name}</option>
											)
										})}
									</Select>
								</label>
							</FormControl>

							{/* Product Name */}
							<FormControl isInvalid={validate.name}>
								<label >
									ชื่อ
									<Input name="name" value={product?.name || ""} />
								</label>
							</FormControl>

							{/* Detail */}
							<FormControl>
								<label >
									รายละเอียด
									<Textarea
										value={product?.detail}
										size="sm"
									/>
								</label>
							</FormControl>

							{/* cost price */} {/* sale price */}
							<FormControl>
								<HStack>
									<label >
										ราคาต้นทุน
										<NumberInput defaultValue={0} >
											<NumberInputField />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</label>

									<label >
										ราคาขาย
										<NumberInput defaultValue={0} >
											<NumberInputField />
											<NumberInputStepper>
												<NumberIncrementStepper />
												<NumberDecrementStepper />
											</NumberInputStepper>
										</NumberInput>
									</label>
								</HStack>
							</FormControl>

							{/* remark */}

							{/* pictures */}

							<Flex alignSelf="stretch">
								<Button flex={1} mx="3px" type="submit" colorScheme="teal" variant="solid" >
									{/* {updateVars.loading ? 'กำลังบันทึก' : 'บันทึก'} */}
									บันทึก
								</Button>

								<Button flex={1} mx="3px" colorScheme="red"
									onClick={async () => {
										// const result = await del(
										// 	{ variables: { id: service?.id! } }
										// );
										// history.goBack();
									}} >
									{/* {deleteVars.loading ? 'กำลังลบ' : 'ลบ'}  */}
									ลบ
								</Button>

							</Flex>

						</VStack>

					</form>
				)}

			</Flex>

		</Flex>
	);
}

export default ProductPage