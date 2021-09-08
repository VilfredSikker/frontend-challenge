import { Expense } from "../models/expense"

const URL = "http://localhost:3000"

export interface ExpensesRespone {
	expenses: Expense[]
	total: number
}

export class ExpenseService {
	async getExpenses(limit: number, offSet: number): Promise<ExpensesRespone> {
		const url = `${URL}/expenses?limit=${limit}&offset${offSet}`

		return fetch(url)
			.then((res) => res.json())
			.then((res) => res)
			.catch((err) => console.error(err))
	}
}