// import GUN from 'gun';
// import 'gun/sea';
// import 'gun/axe';
// import { createSlice } from '@reduxjs/toolkit'
//
// // Database
// export const db = GUN();
//
// // Gun User
// export const user = createSlice({
//     name: 'user',
//     initialState: {
//         userCreds: db.user().recall({sessionStorage: true})
//     },
//     reducers: {
//         changeCreds: (state, action) => {
//             state.user = action.user
//         }
//     }
// })
//
// user.get('alias').on(v => username.set(v))
//
// db.on('auth', async(event) => {
//     const alias = await user.get('alias'); // username string
//     username.set(alias);
//
//     console.log(`signed in as ${alias}`);
// });