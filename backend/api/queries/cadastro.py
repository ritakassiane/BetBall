from queries.core.db import  executeQuery, connection

# @param nickname, email, e senha.
def register_user(nickname, email, password):
    query = f"""
    INSERT INTO usuario (nickname, email, senha) VALUES
    (
        '{nickname}',
        '{email}',
        '{password}'
    );
    """
    return executeQuery(connection, query)

def register_apostador(nickname):
    query = f"""
        INSERT INTO apostador (nickname, credito) VALUES
        (
            '{nickname}',
            '{0}'
        )
    """
    return executeQuery(connection, query)