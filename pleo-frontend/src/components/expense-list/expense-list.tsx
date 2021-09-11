import { Expense } from "../../models/expense"
import styled from "styled-components"
import { ExpenseListEntry } from "../expense/expense"
import { Flex } from "../base/flex"

interface ExpenseListProps {
	expenses: Expense[]
}

const ExpenseListContainer = styled(Flex)`
	margin: 5px;
`

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
	return (
		<ExpenseListContainer sx={{ flexDirection: "column" }}>
			{expenses.map((expense: Expense) => (
				<ExpenseListEntry key={expense.id} {...expense} />
			))}
		</ExpenseListContainer>
	)
}
