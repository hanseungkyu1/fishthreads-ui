// import "./../public/static/scss/common.scss";
import React, { useEffect, useState } from "react";
import Header from "../components/ui/common/header.jsx";

function Index() {
  const [testMessage, setTestMessage] = useState([]);

  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_API_HOST;
    fetch(host + "/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTestMessage(data);
      });
  }, []);

  return (
    <>
      <Header />
      <div>메인 페이지</div>
      <ul>
        {testMessage.map((val, idx) => (
          <li key={`${idx}-${val}`}>{val}</li>
        ))}
      </ul>
    </>
  );
}

export default Index;
