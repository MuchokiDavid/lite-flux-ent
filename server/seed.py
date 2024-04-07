from app import app
from models import Admins, db

if __name__ == "__main__":
    with app.app_context():
        print("Seed file")

        new_admin=Admins(first_name="Samuel", last_name="Muigai", email="muigaisam65@gmail.com", phone="+254707251073", password="abc1234")
        db.session.add(new_admin)
        db.session.commit()