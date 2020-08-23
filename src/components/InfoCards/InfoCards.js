import React from 'react';

const InfoCards = () => {
  const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news', expression: 'Catagories' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: "What's up with PlayStation 5", expression: 'Terms' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN', expression: 'Sources' },
  ];

  return (
    <div className='cards-container'>
      {infoCards.map((infoCard) => (
        <div className='info-card' style={{ backgroundColor: infoCard.color }}>
          <h3 className='title'>{infoCard.title}</h3>

          <div className='info'>
            <h4>{infoCard.expression}</h4>
            <p>{infoCard.info}</p>
          </div>

          <div className='text'>
            <h4>Try Saying:</h4>
            <p>{infoCard.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
