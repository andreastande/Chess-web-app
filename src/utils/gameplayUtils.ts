export const isTileBlack = (row: number, col: number) => {
  return (row + col) % 2 === 1
}
