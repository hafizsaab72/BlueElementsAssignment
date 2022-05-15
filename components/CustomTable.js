import react from "react";
import Image from "next/image";
import { Table, Tag, Space } from "antd";

const CustomTable = ({ data }) => {
  const columns = [
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Images",
      dataIndex: "urlToImage",
      key: "urlToImage",
      render: (url) => (
        <Image width="200" height="200" layout="responsive" src={url} />
      ),
    },
    {
      title: "Published At",
      key: "publishedAt",
      dataIndex: "publishedAt",
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default CustomTable;
