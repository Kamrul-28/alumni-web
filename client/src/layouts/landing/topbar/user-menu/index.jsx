import { Fragment } from "react";
import { Link } from "react-router-dom";

import { Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

import { TextButton } from "components/widgets/buttons";

import { AVATAR } from "assets/images";

import { useUserContext } from "store/context/user";

import _styles from "./_styles.module.css";

export default function UserMenu() {
  const { setLogout } = useUserContext();

  return (
    <Menu as="div" className={_styles.menu}>
      <Menu.Button>
        <img className={_styles.avatar} src={AVATAR} alt="avatar" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        leave="transition ease-in duration-75">
        <Menu.Items className={_styles.menu__items}>
          <Menu.Item>
            <Link to="/my-profile">
              <TextButton startIcon={CubeTransparentIcon}>My Profile</TextButton>
            </Link>
          </Menu.Item>
          <Menu.Item>
            <TextButton startIcon={ArrowRightOnRectangleIcon} onClick={setLogout}>
              Logout
            </TextButton>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
