import React from "react";
import Users from "./users";
import { connect } from "react-redux";
import { followSuccess, unfollowSuccess, setCurrentPage,  toggleFollowingProgress,  follow, unfollow, requestUsers } from "../../Redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import { compose } from "redux";
import { getCurretPage, getFollowingInProgress, getIsFetching, getPageSize, getUsers, getTotalUsersCount } from "../../Redux/users-selectors";



class UsersContainer extends React.Component{

    
    componentDidMount(){
        let {currentPage, pageSize}=this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged=(pageNumber)=>{
        const {pageSize}=this.props;
        this.props.requestUsers(pageNumber, pageSize);
        this.props.setCurrentPage(pageNumber);
    }
    

    
    render(){
        
       
       return<>
       {this.props.isFetching ? <Preloader/> : null}
       <Users totalUsersCount={this.props.totalUsersCount} 
       pageSize={this.props.pageSize} 
       currentPage={this.props.currentPage} 
       onPageChanged={this.onPageChanged.bind(this)} 
       users={this.props.users}
       unfollow={this.props.unfollow}
       follow={this.props.follow}
       followingInProgress={this.props.followingInProgress}/>
      </>
    }
}

// let mapStateToProps=(state)=>{
    
//     return{
//         users:state.usersPage.users,
//         pageSize:state.usersPage.pageSize,
//         totalUsersCount:state.usersPage.totalUsersCount,
//         currentPage:state.usersPage.currentPage,
//         isFetching:state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress,
//     }
// }
let mapStateToProps=(state)=>{
    
    return{
        users:getUsers(state),
        pageSize:getPageSize(state),
        totalUsersCount:getTotalUsersCount(state),
        currentPage:getCurretPage(state),
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
}



    export default compose(
        
        connect(mapStateToProps, {
            followSuccess, 
            unfollowSuccess, 
            setCurrentPage,
            toggleFollowingProgress,
            requestUsers,
            follow,
            unfollow,
            }),
          
    )(UsersContainer)
