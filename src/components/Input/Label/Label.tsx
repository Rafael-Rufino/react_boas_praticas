import { LabelProps } from './Label.type'

export const Label = ({ children, ...props }: LabelProps) => {
  return <label {...props}>{children}</label>
}
