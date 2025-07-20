import { Provider } from 'react-redux';
import Router from './router/router'
import store from './redux/store';

import { ToastProvder } from './contexts/ToastContext'
import { SafeAreaProvider } from 'react-native-safe-area-context';
function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ToastProvder>
          <Router />
        </ToastProvder>
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;