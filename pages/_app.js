import "antd/dist/antd.css";
import Conatiner from "../components/Container";

function MyApp({ Component, pageProps }) {
  return (
    <Conatiner>
      <Component {...pageProps} />
    </Conatiner>
  );
}

export default MyApp;
