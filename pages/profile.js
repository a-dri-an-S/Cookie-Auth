import { useEffect, useState } from 'react';
import { getUserProfile, authInitialProps } from '../lib/auth';
import Layout from '../components/Layout';

const Profile = (props) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        getUserProfile()
        .then(user => setUser({ user }))
    }, [])

    return ( 
        <Layout title="profile" {...props}>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </Layout>
    );
}

Profile.getInitialProps = authInitialProps();

export default Profile;