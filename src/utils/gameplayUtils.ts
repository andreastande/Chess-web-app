export const isTileBlack = (coord: string) => {
  const cols: Record<string, number> = { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7 }
  const col = cols[coord[0]]
  const row = parseInt(coord[1])

  return (row + col) % 2 !== 0
}
