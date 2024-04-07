from dotenv import load_dotenv
import os

load_dotenv()

class AppConfig:
    #Configuring the database
    SQLALCHEMY_TRACK_MODIFICATION=False
    SQLALCHEMY_ECHO=False
    SQLALCHEMY_DATABASE_URI="sqlite:///liteflux.db"