import "antd/dist/antd.css";
import Conatiner from "../components/Container";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import "../styles/articles.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Conatiner>
        <Component {...pageProps} />
      </Conatiner>
    </Provider>
  );
}

export default MyApp;
