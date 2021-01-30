import React from 'react';

//componets
import Table from './components/Table'
import StickyTable from './components/StickyTable'
import SpanTable from './components/SpanTable'
import CustomizedTable from './components/CustomizedTable'

const App = () => {
  return (
    <div>
      <h1>일반 테이블</h1>
      <Table />
      <h1>Sticky 속성을 이용한 Header 고정 테이블</h1>
      <StickyTable />
      <h1>Span 속성으로 Header 두 개 테이블 </h1>
      <SpanTable />
      <h1>Header 두 개 고정 테이블</h1>
      <CustomizedTable />
    </div>
  );
};

export default App;