from pydantic import BaseModel


class Login(BaseModel):
    email: str
    password: str

class User(BaseModel):
    nickname: str
    email: str

class UserInDB(User):
    hashed_password: str

class Cadastro(BaseModel):
    nickname: str
    email: str
    password: str

class CadastroColaboratorAdmin(BaseModel):
    nickname: str
    email: str
    password: str
    isAdmin: int

class Game(BaseModel):
    collaborator_nickname: str
    start_datetime: str
    end_datetime: str
