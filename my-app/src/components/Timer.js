import React, { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0); // حالة لتتبع عدد الثواني المنقضية

  useEffect(() => {
    const timer = setTimeout(() => {
      const minutes = Math.floor(count / 60); // حساب عدد الدقائق
      const seconds = count % 60; // حساب عدد الثواني
      const formattedTime = `${padTime(minutes)}:${padTime(seconds)}`; // تنسيق الوقت في صيغة "دقائق:ثواني"
      setCount((prevCount) => prevCount + 1); // زيادة العداد بواحدة كل ثانية
    }, 1000);

    return () => {
      clearTimeout(timer); // تنظيف المؤقت عند ترك المكون
    };
  }, [count]);

  const padTime = (time) => {
    return String(time).padStart(2, '0'); // إضافة صفر إلى الأمام إذا كانت القيمة أقل من 10 لتنسيق الوقت
  };

  return (
    <div className="timer-container">
      <p className="timer-text">You've been my guest for {padTime(Math.floor(count / 60))}:{padTime(count % 60)} minutes</p>
      <p className="timer-text-two">All the errors you see here, you can write to me so I can pay attention to them</p>
      <p className='timer-text-two'>mhmdghsn700@gmail.com</p>
    </div>
  );
}

export default Timer;