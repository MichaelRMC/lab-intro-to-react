import React from "react";
import ContactUserCard from "./ContactUserCard";


function contacts() {
  return (
    <>
      <section>
		<h1>Contacts</h1>
		<br />
        <ContactUserCard />
        <ContactUserCard />
        <ContactUserCard />
      </section>
    </>
  );
}
