import react from "react";
import Image from "next/image";
import { Table, Tag, Space } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setVisible } from "../redux/articles";

const AuthorsTable = () => {
  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  const onClick = (text) => {
    const temp = articles.filter((item) => item.author === text);
    {
      dispatch(setVisible(temp));
    }
  };
  const columns = [
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
      render: (text) => (
        <Link href="#">
          <a onClick={() => onClick(text)}>{text}</a>
        </Link>
      ),
    },
  ];
  return <Table columns={columns} dataSource={articles} />;
};

export default AuthorsTable;
