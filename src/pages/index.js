import Head from "next/head";

const Dashboard = ({ welcomeText }) => {
  Dashboard.getInitialProps = () => {
    const welcomeText = "Welcome to Dashboard";
    return { welcomeText: welcomeText };
  };
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <h1 className="welcome">{welcomeText}</h1>
      <p className="paragraph">
        Qui laboris labore duis reprehenderit duis dolore. Aliqua tempor tempor
        ipsum eiusmod amet nostrud culpa culpa dolore laborum sit aliqua do.
        Consectetur cillum minim dolor occaecat do consectetur ea eiusmod amet.
        Eiusmod voluptate in id cillum dolor ullamco voluptate velit anim Lorem
        labore. Cupidatat veniam in id reprehenderit esse qui amet et deserunt
        sunt pariatur cupidatat. Ad laborum dolor pariatur do irure elit ullamco
        elit.
      </p>
      <p className="paragraph">
        Qui laboris labore duis reprehenderit duis dolore. Aliqua tempor tempor
        ipsum eiusmod amet nostrud culpa culpa dolore laborum sit aliqua do.
        Consectetur cillum minim dolor occaecat do consectetur ea eiusmod amet.
        Eiusmod voluptate in id cillum dolor ullamco voluptate velit anim Lorem
        labore. Cupidatat veniam in id reprehenderit esse qui amet et deserunt
        sunt pariatur cupidatat. Ad laborum dolor pariatur do irure elit ullamco
        elit.
      </p>
      <p className="paragraph">
        Qui laboris labore duis reprehenderit duis dolore. Aliqua tempor tempor
        ipsum eiusmod amet nostrud culpa culpa dolore laborum sit aliqua do.
        Consectetur cillum minim dolor occaecat do consectetur ea eiusmod amet.
        Eiusmod voluptate in id cillum dolor ullamco voluptate velit anim Lorem
        labore. Cupidatat veniam in id reprehenderit esse qui amet et deserunt
        sunt pariatur cupidatat. Ad laborum dolor pariatur do irure elit ullamco
        elit.
      </p>
      <p className="paragraph">
        Qui laboris labore duis reprehenderit duis dolore. Aliqua tempor tempor
        ipsum eiusmod amet nostrud culpa culpa dolore laborum sit aliqua do.
        Consectetur cillum minim dolor occaecat do consectetur ea eiusmod amet.
        Eiusmod voluptate in id cillum dolor ullamco voluptate velit anim Lorem
        labore. Cupidatat veniam in id reprehenderit esse qui amet et deserunt
        sunt pariatur cupidatat. Ad laborum dolor pariatur do irure elit ullamco
        elit.
      </p>
    </>
  );
};

export default Dashboard;
