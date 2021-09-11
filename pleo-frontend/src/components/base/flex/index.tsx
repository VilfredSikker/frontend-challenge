import React, { ReactNode } from "react"
import styled from "styled-components"
import { ComponentStyles, SxProps } from "../sx"

interface FlexProps {
	children: ReactNode
	sx?: SxProps
	className?: any
}

const Container = styled.div<FlexProps>`
	display: flex;

	${(props) => ComponentStyles(props.sx || {})}
`

export const Flex: React.FC<FlexProps & React.HTMLAttributes<HTMLDivElement>> =
	(props: FlexProps) => {
		const { sx, children, className } = props
		return (
			<Container sx={sx} className={className}>
				{children}
			</Container>
		)
	}
