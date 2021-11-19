import logoImg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTrasactioModal: () => void;
}

export function Header ({onOpenNewTrasactioModal}: HeaderProps){
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money" />
            <button type="button" onClick={onOpenNewTrasactioModal}>
                Nova transação 
            </button>
        
            </Content>
        </Container>
    )
}