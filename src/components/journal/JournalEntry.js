import React from 'react';

export const JournalEntry = () => {
  return (
  <div className='journal__entry pointer'>
      <div 
        className='journal__entry-picture'
        style={{
            backgroundSize: 'cover',
            backgroundImage: 'url(https://ichef.bbci.co.uk/news/640/cpsprodpb/FED1/production/_100933256_gettyimages-165964685.jpg)'
        }}
      ></div>

      <div className='journal__entry-body'>
          <p className='journal__entry-title'>
              Un nuevo dia
          </p>

          <p className='journal__entry-content'>
              Lorem Lorem
          </p>

      </div>

      <div className='journal__entry-date-box'>
          <span>Monday</span>
          <h4>28</h4>
      </div>

  </div>
  );
};
