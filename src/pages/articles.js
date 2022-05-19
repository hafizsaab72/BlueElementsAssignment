import axios from "axios";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setArticles } from "../redux/articles";
import { Row, Col } from "antd";
import AuthorsTable from "../components/AuthorsTable";
import DetailsTable from "../components/DetailsTable";

const Articles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=37651ad0d8ed4393b6b35dcfcd297290"
      )
      .then((res) => {
        if (res.status === 200) {
          dispatch(setArticles(res.data.articles));
        }
      })
      .catch((e) => {
        console.log("Error : ", e);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Articles</title>
      </Head>
      <Row>
        <Col span={4}>
          <AuthorsTable />
        </Col>
        <Col span={20}>
          <DetailsTable />
        </Col>
      </Row>
    </>
  );
};
export default Articles;
