"use server";

import React from "react";
import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "../mocks/user";

import { NEWSLETTER_ITEMS } from "../mocks/newsletters";

interface INewsLetter {
  id: string;
  image: string;
  description: string;
  title: string;
  site: string;
  subscriptions: string[];
}

const Users = {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
};

const Block = ({ image, title, description, subscriptions }: INewsLetter) => {
  return (
    <div>
      <img {...{ title }} src={image} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button></button>
    </div>
  );
};

const Sites = [...new Set(NEWSLETTER_ITEMS.map((item) => item.site))];

const Loop = () =>
  Sites.map((e) => (
    <>
      <h1>{e}</h1>
      {NEWSLETTER_ITEMS.filter((c) => c.site === e).map((d) => {
        return <Block {...d} />;
      })}
    </>
  ));

const page = () => {
  return (
    <div>
      <Loop />
    </div>
  );
};

export default page;
