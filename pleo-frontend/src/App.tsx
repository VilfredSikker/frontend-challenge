import React, { useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import { Button } from "./components/button"
import { useThemeContext } from "./context/theme-context"
import { getTheme, ThemeType } from "./theme"

const MainContainer = styled.div`
	display: flex;

	color: ${({ theme }) => theme.colors.main};
	background-color: ${({ theme }) => theme.backgroundColors.main};
`

const App = () => {
	const ThemeContext = useThemeContext()

	console.log(ThemeContext)

	return (
		<ThemeProvider theme={getTheme(ThemeType.LIGHT)}>
			<MainContainer>
				<div>Test</div>
				<Button>Test</Button>
			</MainContainer>
		</ThemeProvider>
	)
}

export default App
