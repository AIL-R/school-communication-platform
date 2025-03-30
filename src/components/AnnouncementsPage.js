import React from 'react';
import './AnnouncementsPage.css';

const announcements = [
  { title: '春季运动会通知', date: '2025-03-01', content: '亲爱的同学们，春季运动会将于下周举行，具体安排请参考学校通知。' },
  { title: '期末考试安排', date: '2025-06-15', content: '请注意，期末考试安排已出，考生需提前准备，详细安排请查看教务处网站。' },
  { title: '暑期班级活动', date: '2025-07-01', content: '暑期班级活动即将启动，请同学们提前报名参加，活动详情请与班主任联系。' },
];

const AnnouncementsPage = () => {
  return (
    <div className="announcements-page">
      <h1>最新公告</h1>
      <div className="announcement-list">
        {announcements.map((announcement, index) => (
          <div className="announcement-card" key={index}>
            <h3>{announcement.title}</h3>
            <p className="date">{announcement.date}</p>
            <p className="content">{announcement.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsPage;
