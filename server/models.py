from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

class Product(db.Model):

    __tablename__= 'products'
    id= db.Column(db.Integer, primary_key = True)
    name= db.Column(db.String(100), nullable=False)
    description= db.Column(db.String(250), nullable=False)
    price= db.Column(db.Float, nullable=False)
    stock_quantity= db.Column(db.Integer, nullable=False, server_default='100')  
    created_at= db.Column(db.DateTime, server_default=db.func.now())
    updated_at= db.Column(db.DateTime, server_default=db.func.now())
    
class Order(db.Model):

    __tablename__ = 'orders'
    id=db.Column(db.Integer,primary_key=True)
    first_name=db.Column(db.String(40),nullable=False)
    last_name=db.Column(db.String(40), nullable=False)
    email=db.Column(db.String, nullable=False)
    phone=db.Column(db.String(12), nullable=False)
    delivery_address=db.Column(db.String, nullable=False)
    amount=db.Column(db.Float, nullable=False)
    status=db.Column(db.Enum('Pending','Processing','Completed'), default='Pending')
    order_date=db.Column(db.DateTime, server_default=db.func.now())

class Admins(db.Model):

    __tablename__="admins"

    id=db.Column(db.Integer,primary_key=True)
    first_name=db.Column(db.String(40),nullable=False)
    last_name=db.Column(db.String(40), nullable=False)
    email=db.Column(db.String, unique=True, nullable=False)
    phone=db.Column(db.String(12), unique=True, nullable=False)
    password=db.Column(db.String, nullable=False)
    created_at= db.Column(db.DateTime, server_default=db.func.now())
    updated_at= db.Column(db.DateTime, server_default=db.func.now())
