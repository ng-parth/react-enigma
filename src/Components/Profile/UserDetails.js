import React from 'react';

class UserProfile extends React.Component {
    render() {
        let user = this.props.userDetails;
        return (
            <div className="row">
                <div className="small-10 medium-6 columns">
                    <div className="card">
                        <a href={user.html_url} target="_blank">
                            <img src={user.avatar_url} alt={user.login}/>
                        </a>
                        Its <span className='strong'>
                            <a href={user.html_url} target="_blank">{user.name}'s</a>
                        </span> profile
                    </div>
                </div>
                <div className="small-12 medium-6 columns">
                    <div className="row">
                        <div className="small-6 medium-6 columns">
                            Username
                        </div>
                        <div className="small-6 medium-6 columns">
                            {user.login}
                        </div>
                    </div>
                    {
                        user.email &&
                        <div className="row">
                            <div className="small-6 medium-6 columns">
                                Email
                            </div>
                            <div className="small-6 medium-6 columns">
                                {user.email}
                            </div>
                        </div>
                    }
                    {
                        user.company &&
                        <div className="row">
                            <div className="small-6 medium-6 columns">
                                Company
                            </div>
                            <div className="small-6 medium-6 columns">
                                {user.company}
                            </div>
                        </div>
                    }
                    {
                        user.blog &&
                        <div className="row">
                            <div className="small-6 medium-6 columns">
                                Blog
                            </div>
                            <div className="small-6 medium-6 columns">
                                <a href={user.blog} target="_blank"> {user.blog} </a>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="small-6 medium-6 columns">
                            Public repos
                        </div>
                        <div className="small-6 medium-6 columns">
                            {user.public_repos}
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-6 medium-6 columns">
                            Public gists
                        </div>
                        <div className="small-6 medium-6 columns">
                            {user.public_gists}
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-6 medium-6 columns">
                            Followers
                        </div>
                        <div className="small-6 medium-6 columns">
                            {user.followers}
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-6 medium-6 columns">
                            Following
                        </div>
                        <div className="small-6 medium-6 columns">
                            {user.following}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile;
