
export async function generateMetadata() {
    // SEO DATA Fetch
    return {
      title: "Team",
      keyword: "",
    };
  }

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;