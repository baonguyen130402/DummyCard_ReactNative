type RenderIfProps = {
  children: any,
  isTrue: boolean
}

export default function RenderIf(props: RenderIfProps) {
  const { children, isTrue } = props

  return isTrue ? children : null;
}
