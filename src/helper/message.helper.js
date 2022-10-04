import chalkAnimation from 'chalk-animation'

import sleep from './sleep.helper.js'

/**
 * This function will just provide a simple
 * animation and color to the winner's info.
 *
 * @param {String} message
 * @returns void
 */
const message = async (message) => {
  const neonTitle = chalkAnimation.neon(`${message}\n`)

  await sleep()
  neonTitle.stop()
}

export default message
