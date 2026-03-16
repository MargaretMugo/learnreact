import Player from "./components/Player";
function App() {


  return (
    <main>
      <div id='game-container'>
        {/* Players */}
        <ol id='players'>
          <Player name={name} symbol={symbol}/>
          <Player name={name} symbol={symbol}/>
        </ol>
        {/* Game board */}
      </div>
      {/* Log */}
    </main>
  )
}

export default App
