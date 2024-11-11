import { useState } from "react";
import NavLayout from "../elements/NavLayout";
import { useMediaQuery } from "react-responsive";
import { breackpoints } from "../../config";
import cls from "classnames";
import {
  FiHome,
  FiHelpCircle,
  FiUser,
  FiSettings,
  FiLogOut,
  FiBox,
} from "react-icons/fi";
import HamburgerButton from "../elements/HamburgerButton";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isSmall = useMediaQuery({ query: `(max-width: ${breackpoints.md}px)` });
  const isMedium = useMediaQuery({
    query: `(min-width: ${breackpoints.md + 1}px)`,
  });
  const [isActive, setActive] = useState(false);
  const toggle = () => setActive(!isActive);

  return (
    <NavLayout
      aria-label="Menu de navegación"
      className={cls({ "is-active": isActive })}
    >
      <NavLayout.Header>
        <NavLayout.Logo>
          {isMedium && (
            <>
              <FiBox /> <NavLayout.Title>Ayudas para la DANA</NavLayout.Title>
            </>
          )}
          {isSmall && <HamburgerButton isActive={isActive} toggle={toggle} />}
        </NavLayout.Logo>
      </NavLayout.Header>
      <NavLayout.Menu>
        <NavLayout.Item>
          <Link to="/ayudas">
            <FiHome /> Ofrece o pide ayuda
          </Link>
        </NavLayout.Item>
        <NavLayout.Item>
          <Link to="/donaciones">
            <FiHelpCircle /> Donaciones a organizaciones
          </Link>
        </NavLayout.Item>
        <NavLayout.Item text="Donaciones a protectoras" icon={FiUser} to="/protectoras" />
        <NavLayout.Item text="Contacto" icon={FiSettings} to="/contact" />
        {/* <NavLayout.Item text="Logout" icon={FiLogOut} to="/" /> */}
      </NavLayout.Menu>
    </NavLayout>
  );
}
