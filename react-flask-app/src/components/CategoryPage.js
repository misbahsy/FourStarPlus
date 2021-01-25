import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import "./box.css";

// this page renders top products in all categories. 

function CategoryPage({ term }) {
    const [listing, setListing] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  
  
    useEffect(() => {
      fetch('http://127.0.0.1:5000/api/listing')
        .then(res => res.json())
        .then(data => {
          setListing(data.data);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);



    return (
    <div>
        {isLoading ? 
        <h1 >Loading...</h1> : 
        <div className="grid">
                {listing.filter( (item)=> item.category=== `${term}`).map(listing => (
                <ProductCard key={listing.id} listing={listing} />
                ))}
        </div>
        }
    </div>
    );
}
export default CategoryPage