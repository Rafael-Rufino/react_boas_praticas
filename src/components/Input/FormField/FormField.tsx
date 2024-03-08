import * as S from './FormField.styles'
import { FormFieldProps } from './FormField.type'

export const FormField = ({ ...rest }: FormFieldProps) => {
  return (
    <S.Container>
      <input {...rest} />
    </S.Container>
  )
}
