import Layout from '../components/Layout';
import Link from 'next/link';
import { authInitialProps } from '../lib/auth';

const Index = (props) => {
    console.log(props)

    return ( 
        <Layout title="Home" {...props}>
            <Link href="/profile">
                <a>Go to profile</a>
            </Link>
        </Layout>
    );
}

Index.getInitialProps = authInitialProps();

export default Index;