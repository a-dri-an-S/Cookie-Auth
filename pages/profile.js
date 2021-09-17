import { useEffect, useState } from 'react';
import { getUserProfile } from '../lib/auth';
import Layout from '../components/Layout';

const Profile = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserProfile()
        .then(user => setUser({ user }))
    }, [])

    return ( 
        <Layout title="profile">
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Layout>
    );
}

export default Profile;