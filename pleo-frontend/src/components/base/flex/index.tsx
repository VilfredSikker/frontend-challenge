import React, { ReactNode } from "react"
import styled from "styled-components"
import { ComponentStyles, SxProps } from "../sx"

interface FlexProps {
	children: ReactNode
	sx?: SxProps
	className?: any
	direction?: "row" | "column" | "row-reverse" | "column-reverse"
}

const Container = styled.div<FlexProps>`
	display: flex;
	margin: 0px;

	${(props) => `
    flex-direction: ${props.direction ?? "row"}
  `}
`

export const Flex: React.FC<FlexProps & React.HTMLAttributes<HTMLDivElement>> =
	(props: FlexProps) => {
		const { sx, children, className, direction } = props
		return (
			<Container sx={sx} className={className} direction={direction}>
				{children}
			</Container>
		)
	}
