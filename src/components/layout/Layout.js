import ContainerLayout from "../elements/ContainerLayout";
import Navbar from "../navbar/Navbar";
import Img from "../image/Img";
import MainLayout from "../elements/MainLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import styled from "styled-components";

// Estilos personalizados con styled-components
export const SectionTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

export const SectionDescription = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #666;
  line-height: 1.6;
`;

export const LinkList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LinkItem = styled.li`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    font-weight: bold;
    color: #007BFF;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin-top: 0.5rem;
    color: #555;
  }
`;
export const ContactInfo = styled.div`
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  text-align: center;
  color: #555;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 400px;
  margin: 0 auto;

  a {
    color: #007BFF;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Layout() {
  return (
    <ContainerLayout>
      <Navbar />
      <MainLayout>
        <MainLayout.Wrapper>
          <Route path="/" component={HomeLayout} exact />
          <Route path="/ayudas" component={AyudaLayout} />
          <Route path="/donaciones" component={DonationsLayout} />
          <Route path="/animales" component={AnimalesLayout} />
          <Route path="/contacto" component={ContactLayout} />


        </MainLayout.Wrapper>
      </MainLayout>
    </ContainerLayout>
  );
}


const HomeLayout = () => {
  return (
    <>
      <SectionTitle>Links de ayuda para los afectados por la DANA</SectionTitle>
      <SectionDescription>
        Esta página centraliza enlaces y recursos útiles relacionados con la DANA en la Comunidad Valenciana y áreas circundantes. A través de los apartados disponibles, podrás acceder a información sobre cómo ofrecer o solicitar ayuda, realizar donaciones a organizaciones y contribuir al cuidado de animales afectados. La intención es facilitar el acceso a recursos de ayuda en un solo lugar, contribuyendo a una respuesta rápida y eficaz ante esta situación.
      </SectionDescription>
    </>
  );
};

const AyudaLayout = () => {
  return (
    <>
      <SectionTitle>Links para ofrecer o solicitar ayuda y voluntariados</SectionTitle>
      <SectionDescription>
        Este apartado reúne enlaces a plataformas y organizaciones que coordinan la ayuda para los afectados por la DANA. Aquí encontrarás información tanto si estás buscando recibir apoyo como si deseas participar como voluntario. Los recursos están organizados para facilitar la búsqueda y el acceso a la ayuda necesaria o para colaborar en las tareas de recuperación.
      </SectionDescription>
      <LinkList>
        <LinkItem>
          <a href="https://ayudaterreta.com/">Ayuda Terreta</a>
          <p>Plataforma de voluntariado local que conecta a personas que desean ayudar con afectados por la DANA en la Comunidad Valenciana. Incluye oportunidades de voluntariado y recursos para quienes buscan apoyo.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://ayudadana.com/">Ayuda DANA</a>
          <p>Sitio web dedicado a la organización de ayuda y recursos para afectados por la DANA. Ofrece información sobre cómo solicitar ayuda y unirte a redes de voluntariado en la región.</p>
        </LinkItem>
      </LinkList>
    </>
  );
}

const DonationsLayout = () => {
  return (
    <>
      <SectionTitle>Links para donar dinero, material o comida</SectionTitle>
      <SectionDescription>
        En esta sección se incluyen enlaces a diversas organizaciones que están recaudando fondos para apoyar a los afectados por la DANA. Las donaciones permiten cubrir necesidades básicas y apoyar en la recuperación de las zonas impactadas. Los enlaces facilitan el acceso directo a las páginas de estas organizaciones, donde podrás encontrar detalles sobre cómo contribuir económicamente.
      </SectionDescription>
      <LinkList>
        <LinkItem>
          <a href="https://cercadeti.cruzroja.es/ayudaafectadosinundacionesdana">Cruz Roja</a>
          <p>Organización humanitaria que brinda ayuda de emergencia a los afectados por las inundaciones. Tus donaciones se destinan a alimentos, refugio y asistencia médica.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://accioncontraelhambre.org/es/landing/emergencia-valencia">Acción contra el Hambre</a>
          <p>Organización internacional que ofrece ayuda a personas afectadas por desastres naturales. Aquí puedes contribuir a su labor en la Comunidad Valenciana.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://www.oxfamintermon.org/es/emergencia/personas-vulnerables-afectadas-dana">Oxfam Intermón</a>
          <p>ONG que trabaja para brindar asistencia a personas en situación de vulnerabilidad tras la DANA. Las donaciones apoyan a familias afectadas y otros grupos en riesgo.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://www.bancdelsaliments.org/ca/blog/lajuntament-de-barcelona-i-el-banc-dels-aliments-de-barcelona-inicien-una-recollida-daliments-i-productes-basics-per-als-afectats-per-la-dana/">Banc dels Aliments de Barcelona</a>
          <p>Banco de alimentos que colabora en la recogida y distribución de productos básicos para afectados. Puedes donar para apoyar esta iniciativa.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://bancodealimentosdevalencia.com/">Banco de alimentos de Valencia</a>
          <p>Institución que recolecta y distribuye alimentos básicos para las personas afectadas por la DANA. Su misión es garantizar que las familias en situación de necesidad reciban productos de primera necesidad durante este periodo de recuperación. Las donaciones ayudan a sostener sus operaciones y a ampliar su capacidad de ayuda.
          </p>
        </LinkItem>
        <LinkItem>
          <a href="https://www.caritas.es/emergencias/graves-inundaciones/">Cáritas</a>
          <p>Organización que brinda apoyo integral a las comunidades afectadas por las inundaciones de la DANA. Cáritas trabaja en la provisión de ayuda humanitaria, incluyendo refugio, alimentos y apoyo psicológico para los damnificados. Tus donaciones contribuyen a sus programas de emergencia y asistencia social.</p>
        </LinkItem>

      </LinkList>
    </>
  );
};


const AnimalesLayout = () => {
  return (
    <>
      <SectionTitle>Protectoras de animales</SectionTitle>
      <SectionDescription>
        Este apartado se enfoca en las organizaciones que están brindando asistencia a los animales afectados por la DANA. Las protectoras y refugios están trabajando para atender a animales que han perdido su hogar o que requieren atención veterinaria urgente. Los enlaces proporcionados dirigen a páginas de organizaciones que aceptan donaciones para cubrir las necesidades de estos animales durante y después de la emergencia.
      </SectionDescription>
      <LinkList>
        <LinkItem>
          <a href="https://faada.org/nuestra-accion-2039-difusion-para-los-refugios-y-animales-afectados-por-la-dana">FAADA</a>
          <p>Iniciativa de FAADA (Fundación para el Asesoramiento y Acción en Defensa de los Animales) para brindar apoyo y difusión a los refugios y animales afectados por la DANA. A través de esta campaña, buscan recaudar fondos y recursos para garantizar el bienestar de animales que han quedado en situación de vulnerabilidad tras las inundaciones.</p>
        </LinkItem>
        <LinkItem>
          <a href="https://bioparcvalencia.es/en/punto-de-recogida-de-ayuda-para-animales-dana-2024/">BIOPARC Valencia</a>
          <p>BIOPARC Valencia y HCV CEU coordinan la recogida y distribución de las ayudas recibidas para los animales afectados por la DANA</p>
        </LinkItem>
        <LinkItem>
          <a href="https://www.tiendanimal.es/articulos/como-ayudar-dana-comunidad-valenciana-animales-protectoras-donaciones/">Tienda Animal</a>
          <p>Con el objetivo de brindarles la ayuda que necesitan, desde Tiendanimal han puesto en marcha una campaña de donación extraordinaria. En la que puedes participar a través de cualquiera de sus tiendas.</p>
        </LinkItem>

      </LinkList>
    </>
  );
};

const ContactLayout = () => {
  return (
    <>
      <SectionTitle>Contacto</SectionTitle>
      <SectionDescription>
        Para consultas, sugerencias o colaboraciones, puedes ponerte en contacto a través del correo electrónico. Estamos disponibles para brindar más detalles sobre los recursos presentados en esta página o recibir información adicional que pueda ser útil para los afectados.
      </SectionDescription>
      <ContactInfo>
        Email: <a href="mailto:jsayudadana@gmail.com">jsayudadana@gmail.com</a>
      </ContactInfo>
    </>
  );
};