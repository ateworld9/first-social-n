import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (event) => {
            let text = event.target.value;
            dispatch(updateNewPostTextActionCreator(text));
        }
    }

}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

/*
const MyPostsContainer = (props) => {

    return <StoreContext.Consumer>
            {store => {
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action)
                };

                let state = store.getState();
                return <MyPosts posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                addPost={addPost}
                                updateNewPostText={onPostChange}/>
                }
            }
        </StoreContext.Consumer>

}

export default MyPostsContainer;*/


/*
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updateNewPostText(text);
    };*/