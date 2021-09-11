import { useEffect, useState } from "react"
import styled, { ThemeProvider } from "styled-components"
import { ExpenseList } from "./components/expense-list/expense-list"
import { Nav } from "./components/nav"
import { useThemeContext } from "./context/theme-context"
import { Expense } from "./models/expense"
import { ExpenseService, ExpensesRespone } from "./services/expense-service"
import { getTheme } from "./theme"

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;

	${({ theme }) => `
		color: ${theme.colors.primary};
		background-color: ${theme.colors.background.primary};

		${theme.bp.desktop} {
			padding: 0px;	
		}
	
	`}
`

const Main = styled.main`
	${({ theme }) => `
		padding: ${theme.space.s};
		
		${theme.bp.desktop} {
			padding: ${theme.space.nm};
		}
	`}
`

const App = () => {
	const ThemeContext = useThemeContext()
	const [expenses, setExpenses] = useState<Expense[]>()
	const [totalExpenses, setTotalExpenses] = useState<number>()

	useEffect(() => {
		const load = async () => {
			const service = new ExpenseService()
			const { expenses, total }: ExpensesRespone = await service.getExpenses({
				limit: 10,
				offSet: 0,
			})
			console.log(expenses, total)
			setExpenses(expenses)
			setTotalExpenses(total)
		}

		load()
	}, [])

	return (
		<ThemeProvider theme={getTheme(ThemeContext.theme)}>
			<Container>
				<Nav />
				<Main>
					<ExpenseList expenses={expenses || []} />
				</Main>
			</Container>
		</ThemeProvider>
	)
}

export default App
