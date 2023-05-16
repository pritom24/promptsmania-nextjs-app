import Nav from "@components/Nav";
import "@styles/globals.css";

export const metadata = {
    title:"promptsmania",
    description:"discover and share new AI-Prompts"
}

const rootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            <Nav/>
        {children}
        </main>
      </body>
    </html>
  );
};

export default rootLayout;
