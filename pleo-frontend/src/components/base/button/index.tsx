import React from "react"
import styled from "styled-components"

enum ButtonVariant {
	"primary",
	"danger",
}

interface ButtonProps {
	variant?: ButtonVariant
}

const StyledButton = styled.button<ButtonProps>`
	${(props) => `
	color: ${props.theme.colors.primary};
	background-color: ${props.theme.colors.background.primary};
	border: ${props.theme.borders.thin};
	border-radius: ${props.theme.borderRadius.discrete};
	padding: ${props.theme.space[0]};
	cursor: pointer;
	box-shadow: ${props.theme.shadows.normal};
 `}
`

export const Button: React.FC<
	ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant, onClick, children }) => {
	return (
		<StyledButton onClick={onClick} variant={ButtonVariant.primary}>
			{children}
		</StyledButton>
	)
}
