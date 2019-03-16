// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import { expect } from 'chai';

// import * as actions from './../../src/actions';
// import * as types from './../../src/constants/ActionTypes';

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// // describe('async actions', () => {
// //   afterEach(() => {
// //     fetchMock.restore()
// //   })

// //   it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', () => {
// //     fetchMock.getOnce('/', {
// //       body: { todos: ['do something'] },
// //       headers: { 'content-type': 'text/html' }
// //     })
// //       .catch()
// //       ;

// //     const expectedActions = [
// //       { type: types.CUSTOMERS_FETCH_INIT },
// //       { type: types.CUSTOMERS_FETCH_SUCCESS, body: { todos: ['do something'] } }
// //     ]
// //     const store = mockStore({ todos: [] })

// //     return store.dispatch(actions.fetchTodos()).then(res => {
// //       console.log(234, res);
// //     //   // return of async actions
// //       expect(store.getActions()).equal(expectedActions)
// //     })
// //   })
// // })

// describe('actions', () => {
//   it('calls request and success actions if the fetch response was successful', () => {
//     const store = mockStore({ todos: [] });
//     window.fetch = jest.fn().mockImplementation(() =>
//       Promise.resolve(mockResponse(200, null, '{"ids":{"provider":' + id + '}}')));

//     return store.dispatch(fetchData(id))
//       .then(() => {
//         const expectedActions = store.getActions();
//         expect(expectedActions.length).toBe(2);
//         expect(expectedActions).toContainEqual({ type: types.CUSTOMERS_FETCH_INIT });
//         expect(expectedActions).toContainEqual({ type: types.CUSTOMERS_FETCH_SUCCESS, data });
//       });
//   });
// })