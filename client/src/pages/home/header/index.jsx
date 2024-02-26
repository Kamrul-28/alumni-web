import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";

import { OutlinedButton } from "components/widgets/buttons";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

import { COVER1, COVER2, COVER3 } from "assets/images";

import { SOCIAL_CONTACTS } from "data/site.config";

import DATA from "./_data_";
import _styles from "./_styles.module.css";

const Header = () => {
  const images = [COVER1, COVER2, COVER3];
  const random_index = Math.floor(Math.random() * images.length);
  const [index, setIndex] = useState(() => random_index);

  return (
    <header className={_styles.root}>
      <img src={images[index]} alt="csekuaa" className={_styles.img_cover} />
      <section className={_styles.container}>
        <div className={_styles.social_icons}>
          {SOCIAL_CONTACTS?.map(({ link, icon: Icon }) => (
            <a href={link} key={link} className={_styles.social_link}>
              <Icon />
            </a>
          ))}
        </div>
        <div>
          <h1 className={_styles.title}>{DATA.title}</h1>
          <h2 className={_styles.sub_title}>{DATA.sub_title}</h2>
          <p className={_styles.description}>{DATA.description}</p>
          <div className={_styles.action_buttons}>
            <Link to="/join-now">
              <OutlinedButton
                endIcon={ArrowRightIcon}
                className={_styles.action_button}>
                Join Now
              </OutlinedButton>
            </Link>
          </div>
        </div>
        <div className={_styles.dot_buttons}>
          {images?.map((item, indx) => (
            <button
              key={item}
              className={clsx(
                _styles.dot_button,
                indx === index && _styles.dot_button__selcted,
              )}
              onClick={() => setIndex(indx)}
            />
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
