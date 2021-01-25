from flask import render_template, flash, redirect, url_for
from app import app
from app.models import Amazon


@app.route('/api/listing')
def get_products():
    listing = Amazon.query.order_by(Amazon.id).all()
    return {
        'success': True,
        'data': [amazon.format() for amazon in listing ]
    }

