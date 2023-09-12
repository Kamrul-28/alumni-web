import { Link } from "react-router-dom";

import { TextButton } from "components/widgets/buttons";
import { LinkButton } from "components/widgets/buttons";

import { ChevronRightIcon } from "@heroicons/react/24/outline";

import BOTTOMBAR_NAVIGATIONS from "routes/navigations/bottombar";
import { UNIVERSITY_NAVIGATIONS } from "routes/navigations/bottombar";

import SITE_CONFIG, { SOCIAL_CONTACTS } from "data/site.config";

import _styles from "./_styles.module.css";

function Bottombar() {
  return (
    <footer className={_styles.container}>
      <div className={_styles.logo_container}>
        <h1 className={_styles.logo_title}>{SITE_CONFIG.title}</h1>
        <p className={_styles.description}>{SITE_CONFIG.description}</p>
        <div className={_styles.social_icons}>
          {SOCIAL_CONTACTS?.map(({ link, icon: Icon }) => (
            <a href={link} key={link} className={_styles.social_link}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
      <div className={_styles.section_container}>
        <div className={_styles.link_container}>
          <h2 className={_styles.link_title}>Contacts</h2>
          <LinkButton href={`mailto:${SITE_CONFIG.contacts.email}`}>
            Email:<span> {SITE_CONFIG.contacts.email}</span>
          </LinkButton>
          <LinkButton href={`tel:${SITE_CONFIG.contacts.phone}`}>
            Phone:<span>{SITE_CONFIG.contacts.phone}</span>
          </LinkButton>
          <LinkButton href={SITE_CONFIG.contacts.map_link}>
            Address:<span> {SITE_CONFIG.contacts.address}</span>
          </LinkButton>
        </div>
        <div className={_styles.link_container}>
          <h2 className={_styles.link_title}>Useful Links</h2>
          {BOTTOMBAR_NAVIGATIONS?.map(({ title, path }) => (
            <Link to={path} key={title}>
              <TextButton
                className={_styles.link_button}
                startIcon={ChevronRightIcon}>
                {title}
              </TextButton>
            </Link>
          ))}
        </div>
        <div className={_styles.link_container}>
          <h2 className={_styles.link_title}>University</h2>
          {UNIVERSITY_NAVIGATIONS?.map(({ title, path }) => (
            <Link to={path} key={title}>
              <TextButton
                className={_styles.link_button}
                startIcon={ChevronRightIcon}>
                {title}
              </TextButton>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Bottombar;
