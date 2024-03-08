import * as S from './FormGroup.styles'
import { FormGroupProps } from './FormGroup.type'

export const FormGroup = ({ children }: FormGroupProps) => {
  return <S.Container>{children}</S.Container>
}
