import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';


export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="kemps budget" />
                <button type="button">
                    Nova Transacao
                </button>
            </Content>
        </Container>


    )

}