import profileReducer, {setUserStatus} from "./profile-reducer";

let state = {
    posts: [
        { id: 0, message: 'Hi, how are you', likesCount: 12 },
        { id: 1, message: 'Hi, how are you2', likesCount: 12 },
        { id: 2, message: 'Hi, how are you3', likesCount: 12 },
        { id: 3, message: 'It\'s my first post', likesCount: 17 }
    ],
    profile: null,
    status: ''
};

test('renders learn react link', () => {
    let message = 'Мое сообщение';
    let action = setUserStatus(message);

    let newState = profileReducer(state, action);
    expect(newState.status).toBe(message);
});
