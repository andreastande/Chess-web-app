import { isTileBlack } from "../utils/gameplayUtils"

const Play = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"]

  return (
    <div className="flex h-[calc(100vh-56px)] justify-center items-center">
      <div className="flex flex-col w-176 h-176">
        {rows.map((row) => (
          <div className="flex w-full h-22" key={row}>
            {cols.map((col) => {
              const coord = `${col}${row}`
              let cornerClass = ""
              if (coord === "a1") cornerClass = "rounded-bl-sm"
              if (coord === "a8") cornerClass = "rounded-tl-sm"
              if (coord === "h8") cornerClass = "rounded-tr-sm"
              if (coord === "h1") cornerClass = "rounded-br-sm"

              return (
                <div
                  key={coord}
                  className={`w-22 relative h-full ${cornerClass} ${isTileBlack(coord) ? "bg-[#AF8866]" : "bg-[#E6D5B2]"}`}
                >
                  {col === "a" && (
                    <div
                      className={`absolute top-1 left-2 select-none ${isTileBlack(coord) ? "text-[#E6D5B2]" : "text-[#AF8866]"}`}
                    >
                      {row}
                    </div>
                  )}
                  {row === 1 && (
                    <div
                      className={`absolute bottom-1 right-2 select-none ${isTileBlack(coord) ? "text-[#E6D5B2]" : "text-[#AF8866]"}`}
                    >
                      {col}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Play
