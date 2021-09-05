import React from "react"
import styled from "styled-components"
import { useTheme } from "../../hooks/useTheme"
import { Button } from "../button"

const NavContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Nav = () => {
	const { swapTheme } = useTheme()

	return (
		<NavContainer>
			<div>
				<Button onClick={swapTheme}>Swap Theme</Button>
			</div>
		</NavContainer>
	)
}
