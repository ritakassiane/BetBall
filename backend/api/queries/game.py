from queries.participation import addParticipation
from queries.core.db import executeQuery, executeSelection, connection
from queries.utils.service import format_date, tutple_to_dict
from queries.team import get_club_by_id

# @param nickname do colaborador, data de inicio do jogo/fim de aposta, status do jogo
def add_game(collaborator_nick, end_date, id_team1, id_team2, isDone=False):
    date = end_date #format_date(end_date) ainda falta ver como usar o format_date para o padrao "aaaa-mm-dd hh:mm:ss"
    queryNewGame = f"""
    INSERT INTO jogos (nick_colaborador, data_fim_aposta, isDone) VALUES
    (
        '{collaborator_nick}',
        '{date}',
        {isDone}
    );
    """
    if not executeQuery(connection, queryNewGame):
        return False

    queryGetNewGame = f"""
    SELECT j.id_jogo 
    FROM jogos j 
    WHERE j.id_jogo NOT IN (SELECT p.id_jogo 
	    					FROM participacao p);
    """
    id_newGame = executeSelection(connection, queryGetNewGame)[0][0]

    if not addParticipation(id_team1, id_newGame):
        return False
    if not addParticipation(id_team2, id_newGame):
        return False
    return True


# Retorna as informações de uma match cadastrada
# Desatualizada
# @return Dicionário. Id do jogo, times jogando, placar atual.
def get_match_by_id(game_id):
    data = {
            "game_id":game_id,
            "teams": {
                    {
                        "name": "",
                        "current_goals": 0,
                        "image_src": ""
                    },

                    {
                        "name": "",
                        "current_goals": 0,
                        "image_src": ""
                    }
                } 
    }

    query = f"""
    SELECT * FROM participacao WHERE id_jogo = '{ game_id }'
    """
    matchs = executeSelection(connection, query)
    match_list_dict = [tutple_to_dict('team_id', 'game_id', 'goals', tupla=match) for match in matchs]

    for match in match_list_dict:
        club = get_club_by_id(match['team_id'])
        club['goals'] = match['goals']
        data['teams'].add(club)
    return data


# Retorna uma lista com todos os jogos cadastrados.
# Desatualizada
# @return Lista de dicionário. Id do jogo, times jogando, placar atual.
def get_games():
    pass

# Desatualizada
def list_game_by_id(game_id):
    query = f"""
        SELECT * FROM jogos WHERE id_jogo = '{game_id}'
    """
    executeQuery(connection, query)
