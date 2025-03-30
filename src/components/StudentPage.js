import React, { useState } from 'react';
import './StudentPage.css';

const StudentPage = () => {
  const [studentId, setStudentId] = useState('');
  const [studentInfo, setStudentInfo] = useState(null);

  const handleChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleSearch = () => {
    // 假设学生信息数据
    const studentData = {
      '20230001': {
        name: '张三',
        de: '优',
        zhi: '良',
        ti: '中',
        mei: '优',
        lao: '良',
      },
      '20230002': {
        name: '李四',
        de: '良',
        zhi: '优',
        ti: '中',
        mei: '中',
        lao: '优',
      },
    };

    const data = studentData[studentId];
    if (data) {
      setStudentInfo(data);
    } else {
      alert('未找到该学生信息');
    }
  };

  return (
    <div className="student-page">
      <h1>学生信息查询</h1>
      <div className="search-box">
        <input
          type="text"
          placeholder="请输入学号"
          value={studentId}
          onChange={handleChange}
        />
        <button onClick={handleSearch}>查找</button>
      </div>
      {studentInfo && (
        <div className="student-info">
          <p><strong>姓名:</strong> {studentInfo.name}</p>
          <p><strong>德:</strong> {studentInfo.de}</p>
          <p><strong>智:</strong> {studentInfo.zhi}</p>
          <p><strong>体:</strong> {studentInfo.ti}</p>
          <p><strong>美:</strong> {studentInfo.mei}</p>
          <p><strong>劳:</strong> {studentInfo.lao}</p>
        </div>
      )}
    </div>
  );
};

export default StudentPage;
