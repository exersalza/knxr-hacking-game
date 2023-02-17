import { useEffect, useState } from "preact/hooks"

const MAX_STEPS = 4;
const selector = ['w', 'a', 's', 'd'];

export default function Game() {
    const [gameActive, setGameActive] = useState(true);

    if (!gameActive) return;

    const [tiles, setTiles] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < 5; i++) {
            temp.push(selector[Math.floor(Math.random() * 4)]);
        }

        setTiles(temp);
    }, [])

    useEffect(() => {
        function handleKeyPress(event) {
          if (event.key === tiles[currentStep]) {
            console.log("correct", currentStep);
            setCurrentStep(currentStep + 1);
          }
        }
      
        document.addEventListener("keypress", handleKeyPress);
      
        return () => {
          document.removeEventListener("keypress", handleKeyPress);
        };
      }, [tiles, currentStep]);
    
    return (
        <div className="h-[auto] w-[auto] p-4 shadow- rounded bg-transparent  flex items-center justify-center z-0 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {tiles.map((v) => {
                return (
                    <div className="h-[48px] w-[48px] border-[1px] border-black rounded-sm grid place-content-center m-1 blur-none z-100">
                        <p className="uppercase">{v}</p>
                    </div>
                )
            })}
        </div>
    )
}
