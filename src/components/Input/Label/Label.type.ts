import { ReactNode } from 'react'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: ReactNode
}
