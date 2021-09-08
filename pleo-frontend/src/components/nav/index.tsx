import React from "react"
import styled from "styled-components"
import { useTheme } from "../../hooks/useTheme"
import { Button } from "../button"

const NavContainer = styled.header`
	display: flex;
	justify-content: space-between;

	${(props) => `
		padding: 0 ${props.theme.space[0]};
		margin-top: ${props.theme.space[0]};
	
	`}
`

export const Nav = () => {
	const { swapTheme } = useTheme()

	return (
		<NavContainer>
			<div></div>
			<div></div>
			<div>
				<Button onClick={swapTheme}>Swap Theme</Button>
			</div>
		</NavContainer>
	)
}
