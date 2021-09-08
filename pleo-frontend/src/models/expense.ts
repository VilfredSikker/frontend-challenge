import { Amount } from "./amount"
import { User } from "./user"

export class Expense {
	id: string
	amount: Amount
	category: string
	comment: string
	date: string
	index: number
	merchant: string
	receipts: any[]
	user: User

	constructor(
		id: string,
		amount: Amount,
		category: string,
		comment: string,
		date: string,
		index: number,
		merchant: string,
		receipts: any[],
		user: User
	) {
		this.id = id
		this.amount = amount
		this.category = category
		this.comment = comment
		this.date = date
		this.index = index
		this.merchant = merchant
		this.receipts = receipts
		this.user = user
	}
}
