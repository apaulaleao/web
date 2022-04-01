import logo from "../../assets/img/logo.png"
import * as S from "./Styled"


export default function Header (){
    return (
      <S.Container>
          <S.LinkHome to ="/">
              <S.Img src = {logo} alt="RckandMorty"/>
              
          </S.LinkHome>

      </S.Container>
    )
}

