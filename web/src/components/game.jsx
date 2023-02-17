import { useEffect, useState } from "preact/hooks"
import GrayBox from "./graybox";

const MAX_STEPS = 4;
const selector = ['w', 'a', 's', 'd'];

export default function Game({isActive}) {
    const [gameActive, setGameActive] = useState(isActive);

    if (!isActive) return;

    const [tiles, setTiles] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        let temp = [];
        for (let i = 0; i < MAX_STEPS + 1; i++) {
            temp.push(selector[Math.floor(Math.random() * MAX_STEPS)]);
        }

        setTiles(temp);
    }, [])

    useEffect(() => {
        function handleKeyPress(event) {
            console.log(currentStep);
            if (currentStep >= MAX_STEPS) {
                setGameActive(false);
                return;
            };

            if (event.key === tiles[currentStep]) {
                let element = document.getElementById(currentStep);
                if (currentStep < MAX_STEPS) {
                    let nextElement = document.getElementById(currentStep + 51);
                    nextElement.classList.remove("invisible");
                }

                element.classList.add("active");

                setCurrentStep(currentStep + 1);
            }
        }

        document.addEventListener("keypress", handleKeyPress);

        return () => {
            document.removeEventListener("keypress", handleKeyPress);
        };
    }, [tiles, currentStep]);

    if (gameActive) {
        return (
            <>
                <GrayBox />
                <div className="h-[auto] w-[auto] p-4
                                rounded bg-transparent flex items-center 
                                justify-center z-0 absolute top-[50%] left-[50%] 
                                translate-x-[-50%] translate-y-[-50%]">
        
                    {tiles.map((v, i) => {
                        if (!i) {
                            return (
                                <div id={i} className="h-[48px] w-[48px] border-2 border-gray-400
                                                        rounded grid place-content-center m-1 blur-none z-100">
        
                                    <p className="uppercase" id={i + 50}>{v}</p>
                                </div>
                            )
                        }
        
                        return (
                            <div id={i} className="h-[48px] w-[48px] border-2 border-gray-400
                                                    rounded grid place-content-center m-1 blur-none z-100">

                                <p className="uppercase invisible" id={i + 50}>{v}</p>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
   
}
