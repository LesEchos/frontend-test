"use client";

import React, { Fragment, useState } from "react";
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

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
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
  Sites.map((e, i) => (
    <Fragment key={`Loop_${i}`}>
      <h1>{e}</h1>
      {NEWSLETTER_ITEMS.filter((c) => c.site === e).map((d, l) => {
        return <Block key={`Block_${l}`} {...d} />;
      })}
    </Fragment>
  ));

const page = () => {
  const [currentUser, setCurrentUser] = useState(
    "USER_WITH_MULTIPLE_SUBSCRIPTION"
  );
  return (
    <div>
      <h1>{currentUser}</h1>
      <select
        defaultValue={currentUser}
        onChange={(e) => setCurrentUser(() => e.target.value)}
      >
        {Object.keys(Users).map((user, l) => (
          <option key={`Option_User_${l}`} value={user}>
            {user}
          </option>
        ))}
      </select>
      <Loop />
    </div>
  );
};

export default page;
