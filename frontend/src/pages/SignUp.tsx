import { Logo } from "../assets/Logo";
import {ICad} from "../assets/ICad"
import { Checkbox } from "../components/Checkbox";
import { Envelope, User,Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Link, Navigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import axios from "axios";


export function SignUp(){

    const [nick, setNick]  = useState('')
    const [email, setEmail]  = useState('')
    const [password, setPassword]  = useState('')
    const [ischecked, setchecked] = useState(true)
    const [isSignup, setSignUp] = useState(false)
    const [isValid, setValid] = useState(true)

    function check(){
        const checkbox = document.getElementById('remember');
        if(checkbox?.ariaChecked === 'true') 
            setchecked(true)
        else
            setchecked(false)
    }

    
    async function handleSignUp(event: FormEvent){
        event.preventDefault();

        if(ischecked){          
          axios({
              method: 'post',
              url: 'http://127.0.0.1:8000/register/punter',
              
              data: {
                nickname: nick,
                email: email,
                password: password
              }
            }).then(function (response) {
              if(response.data === true){
                setSignUp(true)
                setValid(true)
              }
              else{
                setValid(false)
                setSignUp(false)
              }
            });
        }
    }

    
    return(

        <div className="w-full h-full bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-start ">
          {isSignup && (
            <Navigate to="/signin" replace={true} />
          )}
            <header className="mt-4 ml-44">
                <Link to={"/"}>   
                    <Logo className="pt-3"/>
                </Link>
            </header>

            <div className="flex flex-row w-full px-14 justify-between p-10 ">
                <div className="img-teams bg-[url('../assets/sign-up-img.png')] bg-contain bg-no-repeat w-[500px] h-[500px]">
                </div>
                <form onSubmit={handleSignUp} className="bg-slate-50 bg-opacity-5 w-full max-w-md  h-screen flex flex-col items-center justify-center rounded-2xl gap-1 ">
                    <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                        <Heading size="lg"> Cadastre-se</Heading>
                        <Text>Crie uma conta para acessar</Text>
                    </div>

                <label htmlFor='text' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Nickname</Text>
                    <TextInput.Root valid={isValid} >
                    <TextInput.Icon>
                        <User/>
                    </TextInput.Icon>
                    <TextInput.Input autoComplete="off" required type='text' id='nick' placeholder='Digite seu Nickname'  value={nick} onChange={(e) => setNick(e.target.value)}  />
                    </TextInput.Root>
                </label>

                <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root valid={isValid}>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </TextInput.Root>
                </label>

              <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-sm'>
                <Text size="sm" className='font-semibold ' >Sua senha</Text>
                <TextInput.Root valid={true} >
                  <TextInput.Icon>
                    <Lock/>
                  </TextInput.Icon>
                  <TextInput.Input required minLength={8} type='password' id='password' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </TextInput.Root>
              </label>

              <label htmlFor='remember' className='flex flex-cow items-center w-full  max-w-sm gap-4 mt-2'>
                <Checkbox  id='remember' className="w-10 h-6 p-[2px] bg-green-700 rounded"/>
                <Text size='sm' className='text-white'>Ao se cadastrar no BetBall, você concorda com nossos termos de serviço e confirma ter 18 anos ou mais.</Text>
                
              </label>
              <div>{!ischecked && <Text className=" text-green-500 "> Checagem obrigatória</Text>
              }</div>

              <Button onClick={check} type='submit' className='mt-4 mb-12 w-fit' >Entrar na plataforma</Button>
            </form>
            </div>
            
        </div>
    )
}