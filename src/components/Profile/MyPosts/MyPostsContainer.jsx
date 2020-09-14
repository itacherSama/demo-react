
import { setAddPost } from '../../../redux/reducers/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    let profilePage = state.profilePage;
    return {
        posts: profilePage.posts
    }
}

let mapDispatchToProps = {
    setAddPost
};

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;