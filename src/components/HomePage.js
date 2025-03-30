import React, { useState } from 'react';
import './HomePage.css';

// 示例学生数据
const students = [
  { id: '2021001', name: '张三', grade: 'A', activities: '篮球, 游泳', health: '优', art: '良好', labor: '积极', description: '乐于助人，活泼开朗' },
  { id: '2021002', name: '李四', grade: 'B', activities: '足球, 绘画', health: '良', art: '优秀', labor: '一般', description: '勤奋好学，踏实肯干' },
  { id: '2021003', name: '王五', grade: 'C', activities: '音乐, 书法', health: '中', art: '一般', labor: '积极', description: '独立思考，富有创意' },
];

const HomePage = () => {
  const [studentId, setStudentId] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);

  // 处理搜索事件
  const handleSearch = () => {
    const student = students.find(s => s.id === studentId);
    setStudentInfo(student);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>东北育才沈抚示范学校家校互动平台</h1>
        <p>欢迎来到学校的互动平台，了解学校的最新动态和活动！</p>
      </header>

      {/* 学号查询功能 */}
      <div className="search-container">
        <input
          type="text"
          placeholder="输入学号查找学生"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button onClick={handleSearch}>查找</button>
      </div>

      {/* 显示学生信息 */}
      {studentInfo && (
        <div className="card-container">
          <div className="card">
            <h3>{studentInfo.name}</h3>
            <p><strong>学号：</strong>{studentInfo.id}</p>
            <div className="details">
              <p><strong>成绩：</strong>{studentInfo.grade}</p>
              <p><strong>活动：</strong>{studentInfo.activities}</p>
              <p><strong>德：</strong>{studentInfo.health}</p>
              <p><strong>智：</strong>{studentInfo.art}</p>
              <p><strong>体：</strong>{studentInfo.labor}</p>
              <p><strong>美：</strong>{studentInfo.description}</p>
            </div>
          </div>
        </div>
      )}

      <footer>
        东北育才沈抚示范学校家校互动平台 &copy; 2025
      </footer>
    </div>
  );
};

export default HomePage;
