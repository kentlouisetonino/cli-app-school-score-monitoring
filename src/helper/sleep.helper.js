/**
 * This just a simple function to control
 * code execution after a certain time.
 *
 * @param {Number} ms
 * @returns void
 */
const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms))

export default sleep
