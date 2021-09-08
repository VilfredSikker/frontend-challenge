import { Expense } from "../../models/expense"
import styled from "styled-components"
import { ExpenseListEntry } from "../expense/expense"

interface ExpenseListProps {
	expenses: Expense[]
}

const ExpenseListContainer = styled.div``

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
	return (
		<ExpenseListContainer>
			{expenses.map((expense: Expense) => (
				<ExpenseListEntry {...expense} />
			))}
		</ExpenseListContainer>
	)
}
