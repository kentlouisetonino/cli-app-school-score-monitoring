interface Props {
  ms: number
}

export default async function sleep({ ms }: Props) {
  return new Promise((r) => setTimeout(r, ms))
}
