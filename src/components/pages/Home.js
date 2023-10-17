import React, { useMemo } from 'react'
import { postServices } from '../../services/posts.services';
import { useQuery } from 'react-query';
import { UtilServices } from '../../utils/utils.services';
import { useNavigate } from 'react-router-dom';
import { UnAuthenticatedRoutesConstant } from '../../utils/nav.constant';

function Home() {
    const navigate = useNavigate();
    const { data: getAllPostsData } = useQuery('getPosts', postServices.getPostsdata);

    const getPostDataMemo = useMemo(
        () => getAllPostsData?.data?.results,
        [getAllPostsData?.data?.results]
    );

    return (
        <div>
            <h1 className="page-header">
                Page Home
                <small>Secondary Text</small>
            </h1>
            {getPostDataMemo?.map((singlePost) => {
                return (
                    <>
                        <h2>
                            <a 
                            className='cursor-pointer'
                            onClick={()=>{
                                navigate(
                                    UnAuthenticatedRoutesConstant.POST_DETAIL.replace(
                                        ':id',
                                        singlePost?.id
                                    )
                                )
                            }}
                            >{singlePost?.post_title}</a>
                        </h2>
                        <p className="lead">
                            by <a>{singlePost?.post_author}</a>
                        </p>
                        <p>
                            <span className="glyphicon glyphicon-time"></span> {UtilServices.convertDateFormate(singlePost?.post_date)}
                        </p>
                        <hr />
                        {singlePost?.image ? (
                            <img 
                            onClick={()=> {
                                navigate(
                                    UnAuthenticatedRoutesConstant.POST_DETAIL.replace(
                                        ':id',
                                        singlePost?.id
                                    )
                                )
                            }}
                            className="img-responsive cursor-pointer" 
                            src={singlePost?.image}
                            alt="" 
                            />

                        ) : (
                            <img 
                            onClick={()=> {
                                navigate(
                                    UnAuthenticatedRoutesConstant.POST_DETAIL.replace(
                                        ':id',
                                        singlePost?.id
                                    )
                                )
                            }}
                            className="img-responsive cursor-pointer" 
                            src="http://placehold.it/900x300"
                            alt="" 
                            />
                        )
                        }
                        <hr />
                        <p>
                            {singlePost?.post_content}
                        </p>
                        <a className="btn btn-primary">
                            Read More <span className="glyphicon glyphicon-chevron-right"></span>
                        </a>
                    </>

                );
            })}
        </div>
    )
}

export default Home