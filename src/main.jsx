import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React, { useEffect } from 'react';


document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('root');
  const root = ReactDOM.createRoot(rootElement);

  const RootComponent = () => {
    useEffect(() => {
      const loadingElement = document.getElementById('loading');
      const rootElement = document.getElementById('root');
  
      // 로딩 창을 서서히 숨기기
      setTimeout(() => {
        loadingElement.classList.add('hidden');
        loadingElement.style.marginLeft = '2px';
        rootElement.style.display = 'block';
        document.body.style.overflow = 'auto';
      }, 1000); // 1초 후에 실행
      
      // 일정 시간 후에 로딩 창을 완전히 제거하고 실제 콘텐츠를 표시
      setTimeout(() => {
        loadingElement.style.display = 'none';
      }, 2000); // 1초 후에 실행
    }, []);
  
    return <App />;
  };
  
  
  root.render(
    <React.StrictMode>
      <RootComponent />
    </React.StrictMode>
  );
});
