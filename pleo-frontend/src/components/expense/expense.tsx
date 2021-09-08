import styled from "styled-components"
import { Expense } from "../../models/expense"

const ExpenseContainer = styled.div`
	display: flex;

	justify-content: space-between;
`

export const ExpenseListEntry = (props: Expense) => {
	return (
		<ExpenseContainer>
			<div>{props.category}</div>
			<div>
				<div>{props.amount.value}</div>
				<div>{props.amount.currency}</div>
			</div>
			<div>
				<div>{props.date} </div>
			</div>
		</ExpenseContainer>
	)
}
