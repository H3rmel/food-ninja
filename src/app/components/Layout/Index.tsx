// React Helmet
import { Helmet } from "react-helmet";

// Component(s)
import Account from "../Account/Index";

// Props
type Props = {
  children: JSX.Element;
  title: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className="px-16 py-6 bg-gray-100 md:col-span-4">
      <Helmet>
        <title>Food Ninja | {title}</title>
      </Helmet>
      <Account />
      {children}
    </div>
  );
};

export default Layout;