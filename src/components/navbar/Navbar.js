import { useState } from "react";
import NavLayout from "../elements/NavLayout";
import { useMediaQuery } from "react-responsive";
import { breackpoints } from "../../config";
import cls from "classnames";
import {
  FiHome,
  FiMapPin,
  FiPlusCircle,
  FiHeart,
  FiMessageCircle,
  FiLink,
} from "react-icons/fi";
import HamburgerButton from "../elements/HamburgerButton";

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
              <FiLink /> <NavLayout.Title>Información Dana</NavLayout.Title>
            </>
          )}
          {isSmall && <HamburgerButton isActive={isActive} toggle={toggle} />}
        </NavLayout.Logo>
      </NavLayout.Header>
      <NavLayout.Menu>
        <NavLayout.Item text="¿Cómo puedo ayudar?" icon={FiHome} to="/" />
        <NavLayout.Item text="Ayudas o voluntariados" icon={FiMapPin} to="/ayudas" />
        <NavLayout.Item text="Donaciones" icon={FiPlusCircle} to="/donaciones" />
        <NavLayout.Item text="Protectoras y animales" icon={FiHeart} to="/animales" />
        <NavLayout.Item text="Contacto" icon={FiMessageCircle} to="/contacto" />
      </NavLayout.Menu>
    </NavLayout>
  );
}
