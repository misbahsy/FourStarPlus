from app import db

class Amazon(db.Model):
    __tablename__ = 'amazon'

    id = db.Column(db.Integer, primary_key=True)
    index = db.Column(db.Integer)
    category = db.Column(db.String)
    product = db.Column(db.String)
    rating = db.Column(db.String)
    reviews = db.Column(db.Integer)
    price = db.Column(db.Float)
    image = db.Column(db.String)
    asin = db.Column(db.String, unique=True)
    link = db.Column(db.String)
    rating_int = db.Column(db.Float)

    def __init__ (sellf, id, index, category, product, rating, reviews, price, image, asin, link, rating_int):
        self.id = id
        self.index = index
        self.category = category
        self.product = product
        self.rating = rating
        self.reviews = reviews
        self.price = price
        self.image = image
        self.asin = asin 
        self.link = link
        self.rating_int = rating_int
    
    def format(self):
        return{
        'id': self.id,
        'index': self.index,
        'category': self.category,
        'product': self.product,
        'rating': self.rating,
        'reviews': self.reviews, 
        'price':self.price,
        'image':self.image,
        'asin':self.asin,
        'link': self.link,
        'rating_int':self.rating_int,
        }



