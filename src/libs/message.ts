import chalkAnimation from 'chalk-animation'

import sleep from './sleep.js'

interface Props {
  message: string
}

export default async function message({ message }: Props) {
  const neonTitle = chalkAnimation.neon(`${message}\n`)

  await sleep({ ms: 1000 })
  neonTitle.stop()
}
