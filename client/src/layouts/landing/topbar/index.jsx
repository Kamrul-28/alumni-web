import { Fragment, useState } from "react";

import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import {
  ArrowRightIcon,
  Bars3Icon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import TOP_NAV_ITEMS from "routes/navigations/topbar";
import {
  OutlinedButton,
  FilledButton,
  IconButton,
} from "components/widgets/buttons";

import { APP_LOGO } from "assets/images";
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
          <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
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
          <Link to="/register">
            <FilledButton endIcon={UserPlusIcon}>Register</FilledButton>
          </Link>
          <Link to="/login">
            <OutlinedButton endIcon={ArrowRightIcon}>Login</OutlinedButton>
          </Link>
        </div>
      </nav>
      {/* mobile */}
      <Dialog
        as="aside"
        open={openMobileMenu}
        onClose={setOpenMobileMenu}
        className={_styles.mobile_menu_root}>
        <div className={_styles.mobile_menu_header}>
          <Link to="/">
            <img className={_styles.logo} src={APP_LOGO} alt={SITE_CONFIG.title} />
          </Link>
          <IconButton
            className={_styles.mobile_menu}
            onClick={handleCloseMobileMenu}
            icon={XMarkIcon}
          />
        </div>
        <div className={_styles.mobile_menu_container}>
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
                Login
              </FilledButton>
            </Link>
            <Link to="/register">
              <FilledButton
                endIcon={ArrowRightIcon}
                className={_styles.button_nav_link}>
                Register
              </FilledButton>
            </Link>
          </div>
        </div>
      </Dialog>
    </header>
  );
}

export default Topbar;
