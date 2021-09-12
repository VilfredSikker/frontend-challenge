import { Expense } from "../../models/expense"
import styled from "styled-components"
import { ExpenseDrawerComponent, ExpenseListEntry } from "../expense/expense"
import { Flex } from "../base/flex"
import { Heading, Paragraph } from "../base/text/text"
import { useDrawer } from "../../hooks/useDrawer"

interface ExpenseListProps {
	expenses: Expense[]
}

const ExpenseListContainer = styled(Flex)`
	flex-direction: column;
	flex: 1;

	${(props) => `
    padding: ${props.theme.space.l};
    
    ${props.theme.bp.desktop} {
      padding: 0px;
      max-width: 80%;
      min-width: 70%;
      margin: 0 auto;
    }
  `}
`

const List = styled(Flex)`
	flex-direction: column;

	.heading {
		flex: 1;
	}
	.list-header {
		justify-content: space-between;

		.list-header-text {
			flex: 1;
		}
	}

	${(props) =>
		`
    box-shadow: ${props.theme.shadows.normal};
    

    
    `}
`

export const ExpenseList = ({ expenses }: ExpenseListProps) => {
	const { drawerContent, setDrawerContent, setDrawerVisible } = useDrawer({
		initialComponent: null,
	})

	const handleExpenseClicked = (expense: Expense) => {
		setDrawerContent(<ExpenseDrawerComponent {...expense} />)
		setDrawerVisible(true)
	}

	return (
		<>
			<ExpenseListContainer>
				<Flex className="heading">
					<Heading level="h1">Expenses</Heading>
				</Flex>
				<List>
					<Flex className="list-header">
						<Paragraph className="list-header-text">Merchant</Paragraph>
						<Paragraph className="list-header-text">Price & Amount</Paragraph>
						<Paragraph className="list-header-text">Date</Paragraph>
					</Flex>
					{expenses.map((expense: Expense) => (
						<ExpenseListEntry
							key={expense.id}
							expense={expense}
							onClick={() => handleExpenseClicked(expense)}
						/>
					))}
				</List>
			</ExpenseListContainer>
			{drawerContent}
		</>
	)
}
