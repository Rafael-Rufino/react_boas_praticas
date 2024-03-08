import * as S from './TextLabel.styles'
import { TextLabelProps } from './TextLabel.Type'

export const TextLabel = ({ text }: TextLabelProps) => {
  return <S.TextLabel>{text}</S.TextLabel>
}
