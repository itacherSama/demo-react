let initialState = {
    links: [
        {
            name: 'Profile',
            path: '/profile',
        },{
            name: 'Dialogs',
            path: '/dialogs',
        },{
            name: 'News',
            path: '/news',
        },{
            name: 'Music',
            path: '/music',
        },{
            name: 'Settings',
            path: '/settings',
        },
    ]
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;