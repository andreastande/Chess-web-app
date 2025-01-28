export const isTileBlack = (row: number, col: number) => {
  return (row + col) % 2 === 1
}

export const determineCorner = (row: number, col: number) => {
  if (row === 0 && col === 0) return "tl" // Top-left
  if (row === 0 && col === 7) return "tr" // Top-right
  if (row === 7 && col === 0) return "bl" // Bottom-left
  if (row === 7 && col === 7) return "br" // Bottom-right

  return "" // Not a corner
}
