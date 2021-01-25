import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import "../components/box.css";
import {Jumbotron} from 'react-bootstrap'
import styled from 'styled-components';

const Styles = styled.div`
  .jumbotron {
    background-image: url(https://images.pexels.com/photos/5725833/pexels-photo-5725833.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size:cover;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  .jumbotron h1, p {
    text-align: center;
    color:azure;
  }
`;

// this page renders top products in all categories. 

function Home() {
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
        <div>
            <Styles>
            <Jumbotron>
            <h1>The Four Star Plus Store</h1>
            <p>
                Home to the top reviewed products on the Internet.
            </p>
            </Jumbotron>
            </Styles>
            <div className="grid">
                    {listing.map(listing => (
                    <ProductCard key={listing.id} listing={listing} />
                    ))}
            </div>
        </div>}
        
    </div>
    );
}
export default Home

