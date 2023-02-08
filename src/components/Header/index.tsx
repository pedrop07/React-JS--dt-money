import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <div>Logo</div>

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}