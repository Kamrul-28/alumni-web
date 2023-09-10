import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { ArrowRightIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import TOP_NAV_ITEMS from "routes/navigations/topbar";
import { FilledButton, IconButton } from "components/widgets/buttons";

import { KU_LOGO } from "assets/images";
import SITE_CONFIG from "data/site.config";

import _styles from "./_styles.module.css";

function Topbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(true);
  };

  const handleCloseMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  return (
    <header>
      <nav className={_styles.navbar} aria-label="global">
        <Link to="/">
          <img className={_styles.logo} src={KU_LOGO} alt={SITE_CONFIG.title} />
        </Link>
        {/* mobile button*/}
        <IconButton
          className={_styles.mobile_menu_button}
          onClick={handleOpenMobileMenu}
          icon={Bars3Icon}
        />
        {/* desktop */}
        <div className={_styles.nav_items}>
          {TOP_NAV_ITEMS?.map((item, index) => (
            <Fragment key={index}>
              {item?.nested ? (
                <Link to={item.path} key={item.title} className={_styles.nav_link}>
                  {item.title}
                </Link>
              ) : (
                <Link to={item.path} key={item.title} className={_styles.nav_link}>
                  {item.title}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
        <div className={_styles.nav_actions}>
          <Link to="/login">
            <FilledButton endIcon={ArrowRightIcon}>Join Now</FilledButton>
          </Link>
        </div>
      </nav>
      {/* mobile */}
      <Dialog
        as="aside"
        className={_styles.mobile_menu_container}
        open={openMobileMenu}
        onClose={setOpenMobileMenu}>
        <div className={_styles.mobile_menu_header}>
          <Link to="/">
            <img className={_styles.logo} src={KU_LOGO} alt={SITE_CONFIG.title} />
          </Link>
          <IconButton
            className={_styles.mobile_menu}
            onClick={handleCloseMobileMenu}
            icon={XMarkIcon}
          />
        </div>
        <div className={_styles.mobile_menu_items}>
          {TOP_NAV_ITEMS?.map((item, index) => (
            <Fragment key={index}>
              {item?.nested ? (
                <Link to={item.path} key={item.title} className={_styles.nav_link}>
                  {item.title}
                </Link>
              ) : (
                <Link to={item.path} key={item.title} className={_styles.nav_link}>
                  {item.title}
                </Link>
              )}
            </Fragment>
          ))}
        </div>
        <div className={_styles.mobile_menu_items}>
          <Link to="/login">
            <FilledButton
              endIcon={ArrowRightIcon}
              className={_styles.button_nav_link}>
              Join Now
            </FilledButton>
          </Link>
        </div>
      </Dialog>
    </header>
  );
}

export default Topbar;
