import auth0 from "../utils/auth0";
import Tabs from "../components/Tabs";
export default function DashBoard(props) {
  console.log(props);
  return (
    <div
      style={{
        display: "flex"
      }}
    >
      <Tabs currentPage="dashboard" />
      <h1>Hello, world!</h1>
    </div>
  );
  // Below tabs should be the actual dashboard
}

export async function getServerSideProps({ req, res }) {
  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: "/api/login"
    });
    res.end();
    return { props: {} };
  }
  return { props: { idToken: session.idToken } };
}
