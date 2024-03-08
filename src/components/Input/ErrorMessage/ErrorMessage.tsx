import * as S from './ErrorMessage.styles'
import { ErrorMessageProps } from './ErrorMessage.type'

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <S.Container>{message}</S.Container>
}
