import React from "react"
import { useTheme } from "styled-components"
import { BorderRadius, FontSize, Space } from "../../../theme"

export interface SxProps
	extends FlexProps,
		DefaultProps,
		TextProps,
		FontProps,
		SpacingProps {}

interface FlexProps {
	flex?: string | number
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse"
	justifyContent?: "flex-start" | "flex-end" | "space-between" | "space-around"
	alignItems?: "flex-start" | "center" | "flex-end"
	flexBasis?: string
	flexGrow?: string
	flexShrink?: string
}

interface DefaultProps {
	height?: string
	width?: string
	color?: string
	backgroundColor?: string
	border?: string
	borderRadius?: BorderRadius
	boxShadow?: string
	boxSizing?: string
}

interface TextProps {
	textAlign?: string
}

interface FontProps {
	fontSize?: FontSize
	fontWeight?: "normal" | "bold"
	fontFamily?: string
}

interface SpacingProps {
	padding?: Space
	paddingTop?: Space
	paddingRight?: Space
	paddingBottom?: Space
	paddingLeft?: Space
	margin?: Space
	marginTop?: Space
	marginRight?: Space
	marginBottom?: Space
	marginLeft?: Space
}

export const ComponentStyles = (props: SxProps) => {
	const theme: any = useTheme()
	console.log(theme)
	return `
  ${props?.flexDirection ? `flex-direction: ${props.flexDirection};` : ""}
  ${props?.flex ? `flex: ${props.flex};` : ""}
  ${props?.justifyContent ? `justify-content: ${props.justifyContent};` : ""}
  ${props?.alignItems ? `align-items: ${props.alignItems};` : ""}
  ${props?.flexBasis ? `flex-basis: ${props.flexBasis};` : ""}
  ${props?.flexGrow ? `flex-frow: ${props.flexGrow};` : ""}
  ${props.flexShrink ? `flex-shrink: ${props.flexShrink};` : ""}
  ${props.margin ? `margin: ${theme.space[props.margin]};` : ""}
  ${
		props?.marginRight ? `margin-right: ${theme.space[props.marginRight]};` : ""
	}
  ${
		props?.marginBottom
			? `margin-bottom: ${theme.space[props.marginBottom]};`
			: ""
	}
  ${props?.marginLeft ? `margin-left: ${theme.space[props.marginLeft]};` : ""}
  ${props?.marginTop ? `margin-top: ${theme.space[props.marginTop]};` : ""}
  ${props?.padding ? `padding: ${theme.space[props.padding]};` : ""}
  ${
		props?.paddingRight
			? `padding-right: ${theme.space[props.paddingRight]};`
			: ""
	}
  ${
		props?.paddingBottom
			? `padding-bottom: ${theme.space[props.paddingBottom]};`
			: "padding-bottom:inherit;"
	}
  ${
		props?.paddingLeft ? `padding-left: ${theme.space[props.paddingLeft]};` : ""
	}
  ${props?.paddingTop ? `padding-top: ${theme.space[props.paddingTop]};` : ""}
  ${props.fontSize ? `font-size: ${theme.fontSize[props.fontSize]};` : ""}
  ${props.fontWeight ? `font-weight: ${props.fontWeight};` : ""}
  ${props.fontFamily ? `font-family: ${props.fontFamily};` : ""}
  ${props.color ? `color: ${theme.colors[props.color]};` : ""}
  ${
		props.backgroundColor
			? `background-color: ${theme.colors.background[props.backgroundColor]};`
			: ""
	}
  ${props.border ? `border: ${props.border};` : ""}
  ${
		props.borderRadius
			? `border-radius: ${theme.borderRadius[props.borderRadius]};`
			: ""
	}
  ${props.boxShadow ? `box-shadow: ${theme.shadows[props.boxShadow]};` : ""}
  ${props.boxSizing ? `box-sizing: ${props.boxSizing};` : ""}
  `
}
