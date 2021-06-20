import { Button, Flex, FormControl, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'

const MyForm2 = (props: any) => {

	// const history = useHistory()

	// const [person, setPerson] = useState({
	// 	name: 'chutchaikp',
	// 	email: 'wit@gps2go.co'
	// })

	const [validate, setValidate] = useState<any>({
		code: false,
		name: false,
	});
	const [pt, setPt] = useState<any>({
		name: '',
		code: '',
	})

	const formValidate = (e: any) => {
		let newdata = { ...validate };
		const frm = e.target;
		newdata = { ...newdata, code: (frm.code.value.length > 0 ? false : true) }
		newdata = { ...newdata, name: (frm.name.value.length > 0 ? false : true) }
		const dtx = { ...newdata };
		setValidate(dtx); // update ui

		const keys = Object.keys(dtx);
		const foundInvalid = keys.some((s: string) => {
			return dtx[s] === true;
		});
		return foundInvalid;
	}

	const formSubmit = (e: any) => {
		e.preventDefault();
		const foundInvalid = formValidate(e);
		if (foundInvalid) return false;

		debugger;

		console.log('let save it');

		// const result = await add({
		// 	variables: {
		// 		// id: props.match.params.id,
		// 		pt: {
		// 			code: pt?.code,
		// 			name: pt?.name,
		// 		}
		// 	}
		// })

		// // save 
		// setTimeout(() => history.push('../producttypes'), 100)

	}

	return (
		<Flex direction="column" p="1rem">
			<Heading mb="1rem">ประเภทสินค้า</Heading>
			<Flex direction="column" w="100%">

				<form onSubmit={formSubmit}>
					<VStack spacing={5}>

						<FormControl isInvalid={validate.code}>
							<label >
								ระหัส
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
								บันทึก
							</Button>

							{props.match.params.id &&
								<Button flex={1} mx="3px" colorScheme="red" onClick={() => { }} >ลบ</Button>
							}
						</Flex>

					</VStack>

				</form>

			</Flex>

		</Flex>
	);
}


export default MyForm2