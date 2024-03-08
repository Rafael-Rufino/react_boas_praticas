import * as S from './Root.styles'
import { ButtonProps } from './Root.type'

export const Root = ({ children, ...rest }: ButtonProps) => {
  return <S.Button {...rest}>{children}</S.Button>
}
