import * as React from 'react';
import PostDetail from '../post-detail';
import CommentList from '../common-list';
import UserInfo from '../user-info';
function PostDetailMain(props:any){
    console.log(props.match.params)
    return (
    <div className="container post-detail-main-container mtb-16px" >
        <div className="row">
            <div className="col-md-8 col-lg-9">
               <PostDetail {...props}/>
               <CommentList/>
            </div>
            <div className="col-md-4 col-lg-3 sm-mt-16px">
                <UserInfo/>
            </div>
        </div>
    </div>
    )
}
export default PostDetailMain