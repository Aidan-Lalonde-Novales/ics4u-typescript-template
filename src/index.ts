/**
 * This program tells you the length
 * required for a board foot.
 *
 * By:      Aidan Lalonde-Novales
 * Version: 1.0
 * Since:   2022-09-24
 */

import promptSync from 'prompt-sync'

const prompt = promptSync()

/**
 * @param {number} width Width of the wood
 * @param {number} height Height of the wood
 * @returns {number} length Length of the wood
 */
function boardFoot(width: number, height: number): number {
  const BOARD_FOOT = 144
  const length = BOARD_FOOT / (width * height)
  return length
}

console.log('This program calculates the required length for a board foot.')

// Input
const widthString = prompt('Enter the width of the wood (in): ')
const width = parseFloat(widthString)
const heightString = prompt('Enter the height of the wood (in): ')
const height = parseFloat(heightString)

// Process and Output
if (isNaN(width) || isNaN(height)) {
  console.log('\nInvalid Input.')
} else {
  const length = boardFoot(width, height)
  console.log(`\nYour wood length should be ${length} inch(es) long.`)
}

console.log('\nDone.')
