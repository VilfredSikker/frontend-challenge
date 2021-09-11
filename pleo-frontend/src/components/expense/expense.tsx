import styled, { useTheme } from "styled-components"
import { Expense } from "../../models/expense"
import { Flex } from "../base/flex"
import { Text } from "../base/text/text"

const ExpenseContainer = styled(Flex)`
	display: flex;

	justify-content: space-between;
`

export const ExpenseListEntry = ({ amount, date, comment }: Expense) => {
	return (
		<ExpenseContainer sx={{ margin: "xs", flex: 1 }} className="expense">
			<Flex sx={{ justifyContent: "space-between" }}>
				<Flex>
					<Text sx={{}}>{amount.value}</Text>
					<Text sx={{}}>{amount.currency}</Text>
				</Flex>
			</Flex>
			<Flex>
				<Text>{date}</Text>
			</Flex>
			{/* <div>
				<div>{amount.value}</div>
				<div>{amount.currency}</div>
			</div>
			<div>
				<div>{date} </div>
			</div> */}
		</ExpenseContainer>
	)
}
