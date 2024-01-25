import React from 'react';
import './Cards.css';
import CardsItem from './CardsItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Appointment Types</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardsItem
              src='/services_1.jpg'
              text='Wellness Exams'
              path='/services'
            />
            <CardsItem
              src='/services_2.jpg'
              text='Diagnostic and Surgery Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardsItem
              src='/services_3.jpg'
              text='Grooming Services'
              path='/services'
            />
            <CardsItem
              src='/services_4.jpg'
              text='Health Insurance Assistance'
              path='/products'
            />
            <CardsItem
              src='/services_5.png'
              text='Therapy and Rehabilitation'
              path='/log-in'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;