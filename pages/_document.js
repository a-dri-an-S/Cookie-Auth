import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getServerSideToken, getUserScript } from '../lib/auth';

export default class MyDocument extends Document {

    static async getInitialProps(ctx) {
        const props = await Document.getInitialProps(ctx);
        const userData = await getServerSideToken(ctx.req);

        return { ...props, ...userData }
    }

    render() {
        const { user = {} } = this.props.__NEXT_DATA__.props;

        return (
            <Html>
                <Head />
                <body>
                    <Main />
                    <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }}/>
                    <NextScript />
                </body>
            </Html>
        )
    }
}