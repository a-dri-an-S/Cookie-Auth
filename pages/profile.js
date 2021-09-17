import { useEffect } from 'react';

const Profile = () => {

    useEffect(() => {
        getUserProfile()
    }, [])

    return ( 
        <div>profile</div>
    );
}

export default Profile;