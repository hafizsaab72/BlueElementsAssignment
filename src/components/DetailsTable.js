import Image from "next/image";
import { Table } from "antd";
import { useSelector } from "react-redux";

const DetailsTable = () => {
  const { visible } = useSelector((state) => state.articles);
  const columns = [
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
        <Image width="300" height="300" layout="responsive" src={url} />
      ),
    },
    {
      title: "Published At",
      key: "publishedAt",
      dataIndex: "publishedAt",
    },
  ];
  return (
    <>
      <h1 className="heading">
        {visible ? visible[0].author : "Authors Name"}
      </h1>
      <Table columns={columns} dataSource={visible} />
    </>
  );
};

export default DetailsTable;
