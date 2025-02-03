import Tile from "../components/gameplay/Tile"

const Play = () => {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1]
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"]

  return (
    <div className="flex h-[calc(100vh-56px)] justify-center items-center">
      <div className="flex flex-col w-176 h-176">
        {rows.map((row) => (
          <div className="flex w-full h-22" key={row}>
            {cols.map((col) => (
              <Tile col={col} row={row} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Play
