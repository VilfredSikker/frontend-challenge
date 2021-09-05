import React from "react"
import { useThemeContext } from "../context/theme-context"
import { ThemeType } from "../theme"

export const useTheme = () => {
	const { theme, setTheme } = useThemeContext()

	const swapTheme = () => {
		switch (theme) {
			case ThemeType.LIGHT:
				setTheme(ThemeType.DARK)
				break
			case ThemeType.DARK:
				setTheme(ThemeType.LIGHT)
				break
			default:
				setTheme(ThemeType.LIGHT)
		}
	}

	return {
		theme,
		setTheme,
		swapTheme,
	}
}
