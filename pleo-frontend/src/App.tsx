import styled, { ThemeProvider } from "styled-components"
import { Button } from "./components/button"
import { Nav } from "./components/nav"
import { useThemeContext } from "./context/theme-context"
import { getTheme } from "./theme"

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	color: ${({ theme }) => theme.colors.main};
	background-color: ${({ theme }) => theme.backgroundColors.main};
`

const App = () => {
	const ThemeContext = useThemeContext()

	return (
		<ThemeProvider theme={getTheme(ThemeContext.theme)}>
			<MainContainer>
				<Nav />
				<div>Test</div>
				<Button>Test</Button>
			</MainContainer>
		</ThemeProvider>
	)
}

export default App
