import React from "react";
import Link from "next/link";

export default class extends React.Component {
  static getInitialProps() {
    console.log("getInitialProps index");
    return {};
  }

  render() {
    return (
      <ul>
        <li>
          <Link href="/b" as="/a">
            <a>a</a>
          </Link>
        </li>
        <li>
          <Link href="/a" as="/b">
            <a>b</a>
          </Link>
        </li>
        <li>
          <Link href={{ pathname: "/posts", query: { id: "2" } }} as="/posts/2">
            <a>post #2</a>
          </Link>
        </li>
      </ul>
    );
  }
}
