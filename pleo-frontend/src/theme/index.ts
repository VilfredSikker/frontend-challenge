const lightTheme = {
	colors: {
		main: "#000",
	},

	backgroundColors: {
		main: "#fff",
	},

	borders: {
		thin: "#000",
	},
}
const darkTheme = {
	colors: {
		main: "#fff",
	},

	backgroundColors: {
		main: "#000",
	},

	borders: {
		thin: "#fff",
	},
}

export enum ThemeType {
	"LIGHT",
	"DARK",
}

export const getTheme = (themeType: ThemeType) => {
	switch (themeType) {
		case ThemeType.LIGHT: {
			return lightTheme
		}
		case ThemeType.DARK:
			return darkTheme
		default:
			return lightTheme
	}
}
