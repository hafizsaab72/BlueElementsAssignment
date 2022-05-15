import axios from "axios";
import Head from "next/head";
import react, { useState, useEffect } from "react";
import CustomTable from "../components/CustomTable";

const Articles = () => {
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=37651ad0d8ed4393b6b35dcfcd297290"
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.articles);
          setApiData(res.data.articles);
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
      <CustomTable data={apiData} />
    </>
  );
};
export default Articles;
