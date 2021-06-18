import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Box, Flex, Heading, VStack, SimpleGrid, Button, } from '@chakra-ui/react';

import '../common/menuStyle.css'

function MenuX() {
	const [open, setOpen] = useState(false)

	const onClickLink = () => {
		setOpen(!open);
	}

	return (
		<Flex
			color="white" p="1rem"
			direction="column" w="100%"
		>
			<Heading >ระบบบริหารร้านค้า</Heading>
			<div>
				{/* <Button colorScheme="purple" size="xs" onClick={() => setOpen(!open)}>change</Button> */}
				<input checked={open} onChange={() => setOpen(!open)} type="checkbox" id="btrEyd" className="btrEyd" />
				<label htmlFor="btrEyd" >
					<span></span>
					<span></span>
					<span></span>
					<span></span>

					<div className="content">

						<VStack w="100%" spacing="34px">

							<SimpleGrid columns={2} spacing="7px" alignSelf="stretch">
								<Link onClick={onClickLink} to="/" >Home</Link>
								<Link onClick={onClickLink} to="/hook">Hook</Link>
								<Link onClick={onClickLink} to="/lazyhook">Lazy hook</Link>
								<Link onClick={onClickLink} to="/lazyhook2">Lazy hook 2</Link>
								<Link onClick={onClickLink} to="/lazyhook3">Lazy hook 3</Link>
								<Link onClick={onClickLink} to="/todo">Todo</Link>
								<Link onClick={onClickLink} to="/todo2">Todo2</Link>
								<Link onClick={onClickLink} to="/lazyhook2">Upvote</Link>
								<Link onClick={onClickLink} to="/login">JWT</Link>
							</SimpleGrid>

							<SimpleGrid columns={2} spacing="7px" alignSelf="stretch" >
								<Link onClick={onClickLink} to="/services" >ประเภทงาน</Link>
								<Link onClick={onClickLink} to="/serviceadd" >เพิ่มประเภทงาน</Link>
								<Link onClick={onClickLink} to="/products" >สินค้า</Link>
								<Link onClick={onClickLink} to="/product" >เพิ่มสินค้าใหม่</Link>
								<Link onClick={onClickLink} to="/uploadimage" >Upload images</Link>
							</SimpleGrid>

							<SimpleGrid columns={2} spacing="7px" alignSelf="stretch" >
								<Link onClick={onClickLink} to="/" >Home</Link>
								<Link onClick={onClickLink} to="/uploadimage" >Upload images</Link>
								<Link onClick={onClickLink} to="/menu" >Menu</Link>
								<Link onClick={onClickLink} to="/producttypes" >ประเภทสินค้า</Link>
								<Link onClick={onClickLink} to="/producttype" >เพิ่มประเภทสินค้า</Link>
							</SimpleGrid>

						</VStack>

					</div>
				</label>
			</div>

		</Flex >
	);
}
export default MenuX