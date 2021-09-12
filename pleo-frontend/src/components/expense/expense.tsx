import styled from "styled-components"
import { Expense } from "../../models/expense"
import { Flex } from "../base/flex"
import { Paragraph } from "../base/text/text"

const ExpenseContainer = styled(Flex)`
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

export const ExpenseListEntry = ({ amount, date, merchant }: Expense) => {
	return (
		<ExpenseContainer className="expense">
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
		</ExpenseContainer>
	)
}
