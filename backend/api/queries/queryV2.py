import mysql.connector
from mysql.connector import Error

def createDBConnection(host_name, user_name, user_password, db_name):
    connection = None
    try:
        connection = mysql.connector.connect(
            host=host_name,
            user=user_name,
            passwd=user_password,
            database=db_name
        )
        print("MySQL Database connection successful")
    except Error as err:
        print(f"Error: '{err}'")

    return connection

def executeQuery(connection, query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        connection.commit()
        print("Query successful")
    except Error as err:
        print(f"Error: '{err}'")

def executeSelection(connection,query):
    cursor = connection.cursor()
    try:
        cursor.execute(query)
        myresult = cursor.fetchall()
        for x in myresult:
            print(x)
    except Error as err:
        print(f"Error: '{err}'")

query = """
INSERT INTO times  VALUES
('Vasco', '21','src assets brasoes vasco svg');
"""

query2 = """SELECT * FROM times"""

connection = createDBConnection("localhost", "root", '', 'betball')
# executeQuery(connection, query)
executeSelection( connection, query2)
