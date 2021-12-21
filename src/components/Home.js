import Notes from "./Notes";

const Home = () => {
  return (
    <>
      <Notes/>
    </>
  );
};

export default Home;

/*
useLocation --> react-router-dom
let location = useLocation() 
location.pathname --> / /about etc
<Link className={`nav-link ${location.pathname===/about ? "active: ""}`}.....
what active does it hight the on navbar the page we are on.
so to make it dynamic we use useLocation to get pathname, match it and use ternanry operator to make it
highlight. In react-bootsrtap it is done already.
*/
