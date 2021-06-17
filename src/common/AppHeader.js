import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import styles from '../App.module.css'
import MenuX from '../pages/MenuX'

import { Flex, VStack, SimpleGrid, HStack, Box } from '@chakra-ui/react';

function AppHeader() {
	return (
		<div className={styles.AppHeader}>

			<Flex
				direction=" row" justify="space-between" w="100%" >

				<MenuX />

				{/* <img src={logo} alt="logo" width="80px" height="80px" /> */}
				{/* <img src="https://graphql.org/img/logo.svg" alt="graphql" width="45px" height="45px" /> */}
				{/* <h1> React GraphQL demo </h1> */}


				{/* How to hide if mobile screen */}

				{/* <VStack flex={1} display={{ base: "block", sm: "none", md: "block", lg: "block" }}  >

					<SimpleGrid minChildWidth="80px" spacing="10px" display="flex">
						<Link to="/" >Home</Link>
						<Link to="/hook">Hook</Link>
						<Link to="/lazyhook">Lazy hook</Link>
						<Link to="/lazyhook2">Lazy hook 2</Link>
						<Link to="/lazyhook3">Lazy hook 3</Link>
						<Link to="/todo">Todo</Link>
						<Link to="/todo2">Todo2</Link>
						<Link to="/lazyhook2">Upvote</Link>
						<Link to="/login">JWT</Link>
					</SimpleGrid>

					<SimpleGrid minChildWidth="80px" spacing="10px" display="flex">
						<Link to="/services" >ประเภทงาน</Link>
						<Link to="/serviceadd" >เพิ่มประเภทงาน</Link>
						<Link to="/products" >สินค้า</Link>
						<Link to="/product" >เพิ่มสินค้าใหม่</Link>
						<Link to="/uploadimage" >Upload images</Link>
					</SimpleGrid>

				</VStack>

				<HStack p="1rem" display={{ base: "none", sm: "block", md: "none", lg: "none" }}>
					<Link to="/" >Home</Link>
					<Link to="/uploadimage" >Upload images</Link>
					<Link to="/menu" >Menu</Link>
				</HStack> */}


			</Flex>
		</div >


	)
}

export default AppHeader
