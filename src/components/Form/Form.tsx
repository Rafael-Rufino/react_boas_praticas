import * as Button from '../Button'
import * as Input from '../Input'
import * as S from './Form.styles'

export const Form = () => {
  return (
    <S.Container>
      <Input.FormGroup>
        <Input.Label htmlFor="name">Nome</Input.Label>
        <Input.FormField placeholder="Digite seu nome!" type="text" />
        <Input.ErrorMessage message="nome é obrigatório!" />
      </Input.FormGroup>

      <Input.FormGroup>
        <Input.Label htmlFor="email">E-mail</Input.Label>
        <Input.FormField placeholder="exemple@email" type="email" />
        <Input.ErrorMessage message="e-mail é obrigatório!" />
      </Input.FormGroup>

      <Input.FormGroup>
        <Input.Label htmlFor="password">Senha</Input.Label>
        <Input.FormField placeholder="Digite sua senha" type="password" />
        <Input.ErrorMessage message="Senha é obrigatória!" />
      </Input.FormGroup>

      <Button.Root type="submit">
        <Button.TextLabel text="Cadastrar" />
        <Button.Icon>
          <span>🔸</span>
        </Button.Icon>
      </Button.Root>
    </S.Container>
  )
}
