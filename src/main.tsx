import ReactDOM from 'react-dom/client';
import App from './App'
import { ConfigProvider } from 'antd';
// import { store } from './state/store';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Inter, sans-serif',
          // colorPrimary: '#0071c5',
        },
        components: {
          Table: {
            headerBg: 'rgb(103, 117, 122)',
            headerColor: 'rgb(255, 255, 255)',
            cellPaddingBlockSM: 7,
            cellPaddingInlineSM: 5,
            fontSize: 12,
            bodySortBg: 'rgb(255, 255, 255)',
            headerSortActiveBg: 'rgb(0, 113, 197)',
            headerSortHoverBg: 'rgb(0, 113, 197)',
          },

        },
      }}
    >
      
        <App />
    </ConfigProvider>
  // </Provider>,
);