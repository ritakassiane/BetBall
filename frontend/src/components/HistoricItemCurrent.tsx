import {Text} from "./Text"
import { Button } from "./Button"
import { ArrowDownIcon } from "@radix-ui/react-icons"

export interface ItemProps{
    action:string
}

export function HistoricItemCurrent(props:ItemProps){
    return(
        <div className="bg-blacktransparent w-full h-full flex flex-row items-center justify-between rounded-[10px] p-5">
            <div className="time flex flex-col items-center">
                <Text className=" text-green-700 text-xs font-bold">TEMPO</Text>
                <Text className=" text-green-700 text-xs font-bold">ESGOTADO</Text>
            </div>

            <div className="status bg-green-700 w-fit h-7 px-5 pt-[2px] ml-1 rounded-sm">
                <Text className=" text-xs font-bold">ROLANDO</Text>
            </div>

            <div className="team flex flex-row items-center gap-5">
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
                <Button mode="closer" className="rounded-sm bg-glass-300  text-xs px-[21px]">{ props.action }</Button>
            </div>
        </div>
    )
}