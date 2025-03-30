import React from 'react';
import './EventsPage.css';

const events = [
  { title: '春季运动会', date: '2025-04-05', location: '体育场', description: '一年一度的春季运动会，欢迎大家踊跃参加。' },
  { title: '科技创新大赛', date: '2025-05-20', location: '实验楼', description: '举办科技创新大赛，展示你的创造力，赢取奖品！' },
  { title: '暑期夏令营', date: '2025-07-10', location: '校外夏令营基地', description: '暑期特别活动，集合了丰富的课外活动和学习项目。' },
];

const EventsPage = () => {
  return (
    <div className="events-page">
      <h1>学校活动</h1>
      <div className="event-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <h3>{event.title}</h3>
            <p className="date">{event.date}</p>
            <p className="location">地点: {event.location}</p>
            <p className="description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
