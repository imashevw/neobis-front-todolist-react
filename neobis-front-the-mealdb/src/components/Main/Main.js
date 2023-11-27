import React from 'react';

function Main() {
    return (
        <div className='main'>  
            <div className="container">
                <div className='main__block'>
                    <p className='subtitle'>Meal of the day</p>
                    <h2 className='main__title'>Fruit and Cream Cheese Breakfast Pastries</h2>
                    <p className='main__describe'>Breakfast | American</p>
                </div>
                <div>
                    <img src={img} alt="meal" />
                </div>
            </div>
        </div>
    );
  }

export default Main;
