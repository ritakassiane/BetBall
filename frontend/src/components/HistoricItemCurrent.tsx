import {Text} from "./Text"
import { Button } from "./Button"

export function HistoricItemCurrent(){
    return(
        <div className="bg-blacktransparent w-full h-full flex flex-row justify-between pt-2">
            <div className="time flex flex-col items-center">
                <Text className=" text-green-700 text-xs font-bold">TEMPO</Text>
                <Text className=" text-green-700 text-xs font-bold">ESGOTADO</Text>
            </div>

            <div className="status bg-green-700 w-fit h-7 px-5 pt-[2px] ml-1 rounded-sm">
                <Text className=" text-xs font-bold">ROLANDO</Text>
            </div>

            <div className="team flex flex-row gap-5">
                <Text className="font-bold">Barcelona</Text>
                <div>
                    <img className="w-6" src="../src/assets/team/barcelonaIcon.png"/>
                </div>
                <div className="score">
                    <Text className=" font-bold">3 | 0</Text>
                </div>
                <Text className="font-bold">Real Madrid</Text>
                <div>
                    <img className="w-5" src="../src/assets/team/realMadridIcon.png"/>
                </div>
            </div>

            <div className="bets flex flex-col items-center">
                <Text>25 </Text>
                <Text>Apostas</Text>
            </div>

            <div className="finish">
                <Button mode="closer" className="rounded-sm text-xs px-[21px]">FINALIZAR</Button>
            </div>
        </div>
    )
}