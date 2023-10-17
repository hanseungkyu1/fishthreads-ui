import React, { useEffect, useState } from "react";
import Header from "../../components/ui/common/header.jsx";

function DashBoard() {
  const [testMessage, setTestMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
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

export default DashBoard;
