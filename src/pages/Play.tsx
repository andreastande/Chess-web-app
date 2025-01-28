import { isTileBlack } from "../utils/gameplayUtils"

const Play = () => {
  const tiles = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ]

  return (
    <div className="flex h-[calc(100vh-56px)] justify-center items-center">
      <div className="flex flex-col w-176 h-176">
        {tiles.map((row: number[], rowNumber) => (
          <div className="flex w-full h-22">
            {row.map((_col: number, colNumber) => (
              <div
                className={`w-22 relative h-full ${isTileBlack(rowNumber, colNumber) ? "bg-[#AF8866]" : "bg-[#E6D5B2]"}`}
              >
                {colNumber === 0 && (
                  <div
                    className={`absolute top-1 left-2 ${isTileBlack(rowNumber, colNumber) ? "text-[#E6D5B2]" : "text-[#AF8866]"}`}
                  >
                    {8 - rowNumber}
                  </div>
                )}
                {rowNumber === 7 && (
                  <div
                    className={`absolute bottom-1 right-2 ${isTileBlack(rowNumber, colNumber) ? "text-[#E6D5B2]" : "text-[#AF8866]"}`}
                  >
                    {["a", "b", "c", "d", "e", "f", "g", "h"][colNumber]}
                  </div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Play
