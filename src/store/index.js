import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;

// The procedure of redux
// Redux
    // Action
    // Reducers

// React components
    // Chiuld Components
        // Chiuld Components

// React-Redux connect
    // Provider component
        // Store
        // App component

// For getting data from redux
// mapStateToProps(state) return object

// For dispatching some action
// mapDispatchToProps(dispatch) return object

// connect(mapStateToProps)(component)
// connect(null, mapDispatchToProps)(component)