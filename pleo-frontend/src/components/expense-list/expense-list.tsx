import { Expense } from "../../models/expense"
import styled from "styled-components"
import { ExpenseListEntry } from "../expense/expense"
import { Flex } from "../base/flex"
import { Heading } from "../base/text/text"

interface ExpenseListProps {
	expenses: Expense[]
}

const ExpenseListContainer = styled(Flex)`
	flex-direction: column;

	${(props) =>
		`
    box-shadow: ${props.theme.shadows.normal};
    padding: ${props.theme.space.l} 0px;

    ${props.theme.bp.desktop} {
      max-width: 60%;
    }
    `}
`

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
	return (
		<ExpenseListContainer>
			<Heading level="h1">Expenses</Heading>
			{expenses.map((expense: Expense) => (
				<ExpenseListEntry key={expense.id} {...expense} />
			))}
		</ExpenseListContainer>
	)
}
