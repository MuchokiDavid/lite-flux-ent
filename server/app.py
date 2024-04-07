from flask import Flask, make_response, redirect, render_template, request, session, url_for
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from models import db, Order, Product, Admins as AdminModel
from config import AppConfig

app = Flask(__name__)
app.config.from_object(AppConfig)
api = Api(app)

migrate = Migrate(app, db)
db.init_app(app=app)

# Use a unique name for the Flask admin instance
adminView = Admin(app, name="Liteflux Admin", template_mode="bootstrap5")

# Registering the admin views
adminView.add_view(ModelView(Product, db.session))
adminView.add_view(ModelView(Order, db.session))
adminView.add_view(ModelView(AdminModel, db.session))

class Index(Resource):
    def get(self):
        return make_response("Welcome to the Liteflux API!")

api.add_resource(Index, "/")

class AdminLanding(Resource):
    def get(self):
        return render_template("index.html")
    
api.add_resource(AdminLanding, "/admin")

class AdminLogin(Resource):
    def post(self):
        email=request.form["email"]
        password=request.form["password"]

        admin=AdminModel.query.filter(AdminModel.email==email).first()

        if not admin:
            return render_template("admin.html", error_msg="No user exists with the given email")
        
        if admin.password != password:
            return render_template("admin.html", error_msg="Invalid Password")

        session['loggedin'] =True
        session["email"]=email
        return redirect(url_for("dashboard"))
    
api.add_resource(AdminLogin, "/admin/login")

@app.route("/admin/dashboard")
def dashboard():
    return render_template("Dashboard.html")

if __name__ == "__main__":
    app.run(port=5555, debug=True)
