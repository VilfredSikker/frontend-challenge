import React from "react"
import styled, { ThemeProvider } from "styled-components"
import { getTheme, ThemeType } from "./theme"

const MainContainer = styled.div`
	display: flex;
`

const App = () => {
	return (
		<MainContainer>
			<ThemeProvider theme={getTheme(ThemeType.LIGHT)}>
				<div>Test</div>
			</ThemeProvider>
		</MainContainer>
	)
}

export default App
