import React, { ReactNode } from "react"
import styled from "styled-components"
import { ComponentStyles, SxProps } from "../sx"

interface TextProps {
	children: ReactNode
	sx?: SxProps
	className?: string
}

interface ComponentType
	extends React.FC<TextProps & React.HTMLAttributes<HTMLDivElement>> {}

const TextContainer = styled.div<TextProps>`
	${(props) => ComponentStyles(props.sx || {})}
`

export const Text: ComponentType = ({ children, className, sx }: TextProps) => {
	return (
		<TextContainer sx={sx} className={className}>
			{children}
		</TextContainer>
	)
}
