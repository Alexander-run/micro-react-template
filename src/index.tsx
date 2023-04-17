import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './public-path'
let root: any = null
function render(props: any) {
  const { container } = props;
  root = ReactDOM.createRoot( 
    container ? container.querySelector('#rrrrr') : document.getElementById('rrrrr')
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react16] props from main framework');
  render(props);
}

export async function unmount(props: any) {
  console.log('react-app unmount')
  root.unmount()  
}
