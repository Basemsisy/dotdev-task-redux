// // import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

// // import {FETCH_POSTS} from './actions/types';

// // import {recivePosts} from './actions/postsAction';

// // import {fetchData} from './api'

// // function* getData(action) {
// //     try {
// //         const data = yield call(fetchData)
// //         yield put(recivePosts(data))
// //     }
// //     catch (e) {
// //         console.log(e)
// //     }
// // }

// // export default function* mySaga() {
// //     yield takeLatest(FETCH_POSTS, getData)
// // }

// // export function*  helloSaga() {

// //     const posts = yield call('')
// //     const api = fetch('https://jsonplaceholder.typicode.com/posts')
// //     .then(res => res.json())
// //     .then(data => console.log(data))
// //   }

// import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

