import React from "react"
import styled from "styled-components"

enum ButtonVariant {
	"primary",
	"danger",
}

interface ButtonProps {
	variant?: ButtonVariant
}

const StyledButton = styled.button`
	color: ${(props) => props.theme.colors.main};
	border: ${(props) => props.theme.borders.thin};
`

export const Button: React.FC<
	ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ variant, onClick, children }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>
}
