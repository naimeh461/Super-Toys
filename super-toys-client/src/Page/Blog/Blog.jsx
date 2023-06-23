import useTitle from "../../hooks/useTitle";

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="w-[80%] mx-auto min-h-screen mt-20 flex flex-col gap-10 ">
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is an access token and refresh token? How do they work and where should we store them on the client-side?
            </div>
            <div className="collapse-content">
                <p>Access Token: An access token is a credential that is issued to a client  by an authentication server after the client successfully authenticates itself.how they work: <br />

                <span className="font-medium">Authentication:</span> When a user logs in to a client application, their credentials are sent to the authentication server. If the credentials are valid, the server generates an access token and a refresh token.Access tokens have a relatively short expiration time, typically ranging from a few minutes to several hours, depending on the security requirements. After the access token expires, the client must obtain a new one. <br />

                    Refresh Token:
                    When the access token expires, the client sends a request to the server with the refresh token. The server verifies the refresh token and, if valid, issues a new access token to the client. The client continues using the new access token until it expires, at which point it repeats the process by sending the refresh token to obtain another new access token.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            Compare SQL and NoSQL databases?
            </div>
            <div className="collapse-content">
                <p>Differences between SQL and NoSQL are: <br />
                    SQL databases are primarily called RDBMS or Relational Databases, and NoSQL databases are primarily called as Non-relational or distributed database <br />
                    SQL databases use structured query language (SQL) and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data. <br />
                    SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. <br />
                    SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. <br />
                    SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is express js? What is Nest JS
            </div>
            <div className="collapse-content">
                <p>Express.js and Nest.js are both web application frameworks used for building server-side applications in JavaScript/TypeScript. <br />
                <span className="font-medium">Express.js : </span>Express.js is a minimalist web framework for Node.js. It provides a set of features and middleware to simplify the creation of web servers and APIs. Express.js is known for its simplicity, flexibility, and lightweight nature, making it a popular choice for building small to medium-sized applications. <br />
                <span className="font-medium">Nest.js : </span>Nest.js is a full-featured, scalable, and opinionated framework for building server-side applications using TypeScript. It is built on top of Express.js and provides an additional layer of abstraction and structure to organize our application code. Nest.js follows the modular architecture and is inspired by Angular, making it suitable for building large-scale, enterprise-grade applications.
                    .</p>
            </div>
            </div>
            <div tabIndex={0} className="collapse border border-base-300 bg-base-100 rounded-box">
            <div className="collapse-title text-xl font-medium">
            What is MongoDB aggregate and how does it work
            </div>
            <div className="collapse-content">
                <p>In MongoDB, the aggregate function is a powerful tool used to perform advanced data processing and analysis on collections. It allows us to apply a sequence of data transformations, known as pipeline stages, to the documents in a collection and retrieve the aggregated results.</p>
            </div>
            </div>
        </div>
    );
};

export default Blog;