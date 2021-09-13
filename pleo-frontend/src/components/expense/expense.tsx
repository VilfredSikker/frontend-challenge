import styled from "styled-components"
import { DivOnClick } from "../../global-types/types"
import { Expense } from "../../models/expense"
import { Flex } from "../base/flex"
import { Heading, Paragraph } from "../base/text/text"

const ExpenseEntryContainer = styled(Flex)<DivOnClick>`
	flex: 1;
	justify-content: space-between;
	cursor: pointer;

	.item {
		flex: 1;
	}

	${(props) => `
    border-bottom: ${props.theme.borders.thin};
    padding:${props.theme.space.xs};

    :hover {
      background-color: ${props.theme.colors.light};
    }
  `}
`

interface ExpenseEntryProps {
	expense: Expense
	onClick: () => void
}

export const ExpenseListEntry = ({ expense, onClick }: ExpenseEntryProps) => {
	const { amount, merchant, date } = expense
	return (
		<ExpenseEntryContainer className="expense" onClick={onClick}>
			<Flex className="item">
				<Paragraph>{merchant}</Paragraph>
			</Flex>
			<Flex className="item">
				<Paragraph>{amount.value}</Paragraph>
				<Paragraph>{amount.currency}</Paragraph>
			</Flex>
			<Flex className="item">
				<Paragraph>{date}</Paragraph>
			</Flex>
		</ExpenseEntryContainer>
	)
}

const ExpenseDrawerContainer = styled(Flex)``

export const ExpenseDrawerComponent = ({
	id,
	amount,
	category,
	comment,
	date,
	index,
	merchant,
	receipts,
	user,
}: Expense) => {
	return (
		<ExpenseDrawerContainer direction="column">
			<Flex>
				<Heading level="h3">Expense {id}</Heading>
			</Flex>
		</ExpenseDrawerContainer>
	)
}
