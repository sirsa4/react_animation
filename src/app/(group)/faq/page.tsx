import Users from "@/components/Users";
import React from "react";

const FAQPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return (
    <div>
      <Users users={users} />
    </div>
  );
};

export default FAQPage;
