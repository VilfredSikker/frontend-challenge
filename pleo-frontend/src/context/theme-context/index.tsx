import React, {
	Dispatch,
	ReactElement,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react"

import { ThemeType } from "../../theme"

interface Context {
	theme: ThemeType
	setTheme: Dispatch<SetStateAction<ThemeType>>
}

const defaultContext: Context = {
	theme: ThemeType.LIGHT,
	setTheme: () => {},
}

const ThemeContext = React.createContext(defaultContext)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({
	children,
}: {
	children: JSX.Element
}): JSX.Element => {
	const [theme, setTheme] = useState<ThemeType>(ThemeType.LIGHT)

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	)
}
