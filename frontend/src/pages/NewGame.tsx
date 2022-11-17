import { SetStateAction, useState } from "react";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { ITeam, useTeam } from "../hooks/useTeam";

export interface Game{
    nickColaborador : string;
    dataFimAposta : string;
    horaFimAposta : string;
    idTime1 : string;
    idTime2 : string;
}

export function getURL(team : ITeam[], id : string){
    var url : string = "";

    for (let index = 0; index < team.length; index++) {
        const element = team[index];
        if (element.idTeam == id) {
            url = element.icon;
            break;
        }
    }
    return url;
}

export function NewGame() {
    
    const [game, setGame] = useState<Game>({
        nickColaborador : "",
        dataFimAposta : "",
        horaFimAposta : "",
        idTime1 : "1",
        idTime2 : "2",
    });

    const { team } = useTeam();

    const sendNewGame = (event : any) => {
        event.preventDefault();
        console.log(game);
    }

    return(
        <div className="w-screen h-auto min-h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black items-center flex flex-col justify-center">
            <div className="bg-black bg-opacity-50 w-full max-w-6xl rounded-2xl">
                <form className="mx-16 my-16 flex flex-col justify-evenly">
                    <div className="flex justify-between">
                        <Heading classname="text-5xl">
                            Novo Jogo
                        </Heading>
                        <Button mode="closer" className=" px-[19px]">
                            X
                        </Button>
                    </div>

                    <div className="flex justify-center pt-3">
                        <div className="bg-[#24242E] rounded-full h-24 w-24 items-center flex flex-col justify-center">
                            <img className="scale-75" 
                                 src={getURL(team, game.idTime1)}/>
                        </div>
                        <div className="items-center flex flex-col justify-center">
                            <p className="text-white mx-4">
                                vs
                            </p>
                        </div>
                        <div className="bg-[#24242E] rounded-full h-24 w-24 items-center flex flex-col justify-center">
                            <img className="scale-75" 
                                 src={getURL(team, game.idTime2)}/>
                        </div>
                    </div>

                    <div className="flex justify-center pt-11 gap-28">
                        <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-96" 
                                name="TimeEsquerda" 
                                id="leftTeamSelect" 
                                onChange={(event) => 
                                    setGame({
                                        ...game,
                                        idTime1 : event.target.value
                                    })}>
                            <option value="">--Selecione um time--</option>
                            {team.map((team) => <option value={team.idTeam}> {team.name} </option>)}
                        </select>
                        <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-96 sele" 
                                name="TimeDireita" 
                                id="rightTeamSelect" 
                                onChange={(event) => 
                                    setGame({
                                        ...game,
                                        idTime2 : event.target.value
                                    })}>
                            {team.map((team) => <option value={team.idTeam}> {team.name} </option>)}
                        </select>
                    </div>

                    <Text className="pl-2 pt-10">
                        Data final para aposta:
                    </Text>

                    <div className="flex gap-10 pt-5">
                        <div className="flex flex-col gap-1">
                            <input  id="dateGame" 
                                    type="date" 
                                    required 
                                    min={"2022-11-11"} 
                                    onChange={(event) => 
                                        setGame({
                                            ...game,
                                            dataFimAposta : event.target.value
                                        })} 
                                    className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg p-2.5 focus:ring-green-700 focus:ring-[3px]"/>
                            <Text className="pl-2">
                                Data
                            </Text>
                        </div>
                        <div className="flex flex-col gap-1">
                            <input  id="timeGame" 
                                    type="time" 
                                    required 
                                    onChange={(event) => 
                                        setGame({
                                            ...game,
                                            horaFimAposta : event.target.value
                                        })} 
                                    className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg p-2.5 focus:ring-green-700 focus:ring-[3px]"/>
                            <Text className="pl-2">
                                Hora
                            </Text>
                        </div>
                    </div>

                    <div className="flex justify-center pt-12">
                        <Button type='submit' 
                                onClick={sendNewGame} 
                                className='mt-4 min-w-fit max-w-xs'>
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}