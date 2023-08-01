import React from "react";

const contacts = {
  fullName: faker.person.fullName,
  jobTitle: faker.person.jobTitle,
};

function ContactUserCard() {
  return (
    <>
      <article>
        <img src="https://www.seekpng.com/png/full/349-3499598_portrait-placeholder-placeholder-person.png" />
        <h2>{contacts.fullName}</h2>
        <span>{contacts.jobTitle}</span>
        <span>Ullamco deserunt ullamco minim mollit irure.</span>
      </article>
    </>
  );
}

export default ContactUserCard;
