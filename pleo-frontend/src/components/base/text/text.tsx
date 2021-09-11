import React, { ReactNode } from "react"
import styled from "styled-components"
import { SxProps } from "../sx"

interface TextProps {
	children: ReactNode
	className?: string
	sx?: SxProps
}

interface HeadingProps extends TextProps {
	level?: "h1" | "h2" | "h3"
}

interface HeadingComponent
	extends React.FC<HeadingProps & React.HTMLAttributes<HTMLHeadingElement>> {}

const DefaultHeaderContainer = styled.h1<HeadingProps>`
	font-weight: bold;
	padding: ${(props) => props.theme.space.l} 0px;
`

const H1Container = styled(DefaultHeaderContainer)`
	font-size: ${(props) => props.theme.fontSize.xl};
`

const H2Container = styled(DefaultHeaderContainer)`
	font-size: ${(props) => props.theme.fontSize.l};
`

export const Heading: HeadingComponent = ({
	children,
	className,
	level = "h1",
	sx,
}: HeadingProps) => {
	switch (level) {
		case "h1":
			return <H1Container className={`h1 ${className}`}>{children}</H1Container>
		case "h2":
			return <H2Container className={`h2 ${className}`}>{children}</H2Container>
		default:
			return <H1Container>{children}</H1Container>
	}
}

const DefaultParagraph = styled.p<TextProps>`
	font-weight: normal;
	margin: 0px;

	${(props) => `
    font-size: ${props.theme.fontSize.nm};
    padding: ${props.theme.space.nm} 0px;
  
  `}
`

export const Paragraph = ({ children, className }: TextProps) => {
	return (
		<DefaultParagraph className={`p ${className}`}>{children}</DefaultParagraph>
	)
}
