import Nav from "./nav";
import Header from "./Header"

const Layout = ({ children, categories, seo }) => (
  <>
  	<Header />
    <Nav categories={categories} />
    {children}
  </>
);

export default Layout;