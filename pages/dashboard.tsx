import auth0 from '../utils/auth0';


export default function DashBoard(props) {

  console.log(props);
  return (<h1>Dashboard</h1>)
}



export async function getServerSideProps({req, res}) {

  const session = await auth0.getSession(req);
  if (!session || !session.user) {
    res.writeHead(302, {
      Location: '/api/login'
    });
    res.end();
    return {props: {}};
  }
  return { props: {idToken: session.idToken }};

}
