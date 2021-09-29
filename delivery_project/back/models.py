from db_connect import db

class testTable(db.Model):

    __tablename__ = 'testTable'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    store_name = db.Column(db.String(255), nullable =False)
    star = db.Column(db.Integer, nullable=False)