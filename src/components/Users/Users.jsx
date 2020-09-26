import React from 'react';
import Paginator from "../anotherComponents/Paginator/Paginator";
import User from "./User";

let Users = ({currentPage, totalUsersCount, pageSize, onChangePage, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} pageSize={pageSize} onChangePage={onChangePage}
        />

        <div>
            {props.users.map(u => <User user={u}
                                        key={u.id}
                                        arrFollowingInProgress={props.arrFollowingInProgress}
                                        follow={props.follow}
                                        unfollow={props.unfollow}/>
            )}
        </div>
    </div>
}

export default Users;
