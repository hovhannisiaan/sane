import '../styles/globals.scss'
import Layout from "../Layout";
import Svg from "../components/Svg";
import {Cloudinary} from "@cloudinary/url-gen";

export default function App({Component, pageProps}) {
    const cld = new Cloudinary({cloud: {cloudName: 'deixdj0lx'}});
    return (
        <>
        <Svg/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </>
    )
}
