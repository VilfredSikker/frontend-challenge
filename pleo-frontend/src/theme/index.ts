const defaultVariables = {
	bp: {
		tablet: "@media only screen and (min-width: 476px)",
		desktop: "@media only screen and (min-width: 769px)",
		desktop_xl: "@media only screen and (min-width: 1441px)",
	},

	space: ["0.5em", "1em", "2em", "4em"],

	fontSize: ["10px", "14px", "18px", "24"],

	borderRadius: {
		discrete: "5%",
		normal: "10%",
		round: "50%",
	},

	shadows: {
		normal:
			"rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 12%) 0px 1px 1px 0px, rgb(60 66 87 / 16%) 0px 0px 0px 1px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(0 0 0 / 0%) 0px 0px 0px 0px, rgb(60 66 87 / 8%) 0px 2px 5px 0px",
	},
}

const lightTheme = {
	...defaultVariables,

	colors: {
		primary: "#171219", // Xiketic
		secondary: "#F0F8FA", // Alice Blue
		light: "#889FA5", // Pewter Blue
		green: "#1D343D",
		red: "#C80B47",
		transparent: "transparent",
		background: {
			primary: "#F0F8FA", // Alice Blue
			secondary: "#889FA5", // Pewter Blue
		},
		buttons: {
			primary: "#1D343D",
			secondary: "#889FA5",
		},
	},

	borders: {
		thin: "1px solid #171219",
	},
}
const darkTheme = {
	...defaultVariables,
	colors: {
		primary: "#ECEAE9", // Platinum
		light: "#889FA5", // Pewter Blue
		green: "#1D343D",
		red: "#C80B47",
		background: {
			primary: "#171219", // Alice Blue
			secondary: "#ECEAE9", // Pewter Blue
		},
	},

	borders: {
		thin: "#171219",
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
