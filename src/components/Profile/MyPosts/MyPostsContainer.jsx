import {addPostActionCreator} from "../../../redux/profile-reducer";
import {updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

//dispatch - предназначен для передачи action хранилищам(state)
//В диспетчере state регистрируют свои функции обратного вызова (callback) и зависимости между хранилищами.
let mapDispatchToProps = (dispatch) => {
    return {
        //callback func
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        //callback func
        onPostChange: (event) => {
            let text = event.target.value;
            dispatch(updateNewPostTextActionCreator(text));
        }
    }

}

//connect- внутри него локальный Subscriber: каждый раз когда изменяется state
// запускается функция mapStateToProps(возвращает новый state)
// после формируется новый объект, который сравнивается со старым объектом,но сравнивается не весь state, а только нужная этой компоненте часть (users)
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