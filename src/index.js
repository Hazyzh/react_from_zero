import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
// AppContainer 是一个 HMR 必须的包裹(wrapper)组件

import App from './Router'; // 路由配置
import store from './Store'; // 引入Store

// 订阅state改变
store.subscribe(() => {
    console.log(store.getState());
});


const render = (Component) => {
  ReactDOM.render(
    <AppContainer >
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>, document.getElementById('root'));
};

render(App);

// 模块热替换的 API
if (module.hot) {
  module.hot.accept('./Router', () => {
    render(App);
  });
}
