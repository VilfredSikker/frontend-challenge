import styled from "styled-components"
import { Expense } from "../../models/expense"
import { Flex } from "../base/flex"
import { Heading, Paragraph } from "../base/text/text"

const ExpenseContainer = styled(Flex)`
	flex: 1;
	justify-content: space-between;

	${(props) => props.theme.space.s};
`

export const ExpenseListEntry = ({ amount, date, merchant }: Expense) => {
	return (
		<ExpenseContainer className="expense">
			<Flex>
				<Paragraph>{merchant}</Paragraph>
			</Flex>
			<Flex>
				<Paragraph>{amount.value}</Paragraph>
				<Paragraph>{amount.currency}</Paragraph>
			</Flex>
			<Flex>
				<Paragraph>{date}</Paragraph>
			</Flex>
		</ExpenseContainer>
	)
}
