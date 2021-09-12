import React, {
	Dispatch,
	ReactNode,
	SetStateAction,
	useRef,
	useState,
} from "react"
import styled from "styled-components"
import Dismiss from "../assets/svg/dismiss.svg"
import { Flex } from "../components/base/flex"
import { DivOnClick } from "../global-types/types"

interface DrawerContainerProps {
	visible: boolean
	onClick: DivOnClick
}

const DrawerContainer = styled(Flex)<DrawerContainerProps>`
	z-index: 10000;
	transition: all 400ms ease-in;
	visibility: visible;
	justify-content: flex-end;
	position: fixed;
	right: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: ${(props) => props.theme.colors.background.primary_faded};

	.content {
		transition: all 400ms;
		transform: translateX(0%);
	}

	${(props) =>
		!props.visible &&
		`
     visibility: hidden;
     background-color: transparent;

     .content {
        transform: translateX(100%);
     }
  `}
`

interface ContentProps {
	ref: React.RefObject<HTMLDivElement>
}

const Content = styled.div<ContentProps>`
	background-color: ${(props) => props.theme.colors.background.primary};
	overflow: scroll;
	height: 100%;

	${(props) => props.theme.bp.desktop} {
		width: 60%;
		padding: 0px 5%;
	}
`

const DismissContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: 16px;
	margin-right: 16px;
	margin-bottom: 90px;

	svg {
		cursor: pointer;
	}

	${(props) => props.theme.bp.desktop} {
		margin-right: 0px;
	}
`

interface DrawerProps {
	initialComponent?: ReactNode
}

interface DrawerResult {
	drawerContent: ReactNode
	setDrawerContent: Dispatch<SetStateAction<ReactNode | null>>
	drawerVisible: boolean
	setDrawerVisible: Dispatch<SetStateAction<boolean>>
}

export const useDrawer = ({
	initialComponent = null,
}: DrawerProps): DrawerResult => {
	const [content, setContent] = useState<ReactNode>(initialComponent || null)
	const [visible, setVisible] = useState<boolean>(false)
	const contentRef = useRef<HTMLDivElement>(null)

	const handleMouseClick: DivOnClick = (e) => {
		const node = contentRef.current!
		if (node) {
			if (!node.contains(e.target as Node)) {
				setVisible(false)
			}
		}
	}

	const Component = () => {
		return (
			<DrawerContainer visible={visible} onClick={handleMouseClick}>
				<Content ref={contentRef} className="content">
					<DismissContainer className="dismiss-container">
						<Flex onClick={() => setVisible(false)}>
							<Dismiss />
						</Flex>
					</DismissContainer>
					{content}
				</Content>
			</DrawerContainer>
		)
	}

	return {
		drawerContent: Component,
		setDrawerContent: setContent,
		drawerVisible: visible,
		setDrawerVisible: setVisible,
	}
}
