import ContainerLayout from "../elements/ContainerLayout";
import Navbar from "../navbar/Navbar";
import MainLayout from "../elements/MainLayout";
import { Switch, Route } from "react-router-dom";
export default function Layout() {
  return (
    <ContainerLayout>
      <Navbar />
      <MainLayout>
        <MainLayout.Wrapper>
          <Switch>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/ayudas" element={<AyudaLayout />} />
            <Route path="/donaciones" element={<DonationsLayout />} />
            <Route path="/protectoras" element={<ProtectorasLayout />} />
            <Route path="/contact" element={<ContactLayout />} />
          </Switch>

        </MainLayout.Wrapper>
      </MainLayout>
    </ContainerLayout>
  );
}

const HomeLayout = () => {
  return (
    <><h1 className="title">Links de ayuda para los afectados por la DANA</h1>
      <p>
        He creado esta página para intentar agrupar en un solo punto y que sea de más fácil acceso toda la información sobre organizaciones, páginas y otros sitios de interés en relación a la DANA.
      </p>

      <p>
        Si quieres ofrecer o solicitar ayuda puedes acceder a estas páginas donde podrás encontrar gente que ofrece y solicita diferentes tipos de ayuda.</p>

      <a
        href="https://ayudaterreta.com/"
      >Ayuda Terreta</a>
      <br></br>
      <a
        href="https://ayudadana.com/"
      >Ayuda DANA</a></>)
}

const AyudaLayout = () => {
  return (
    <><p>
      Si quieres ofrecer o solicitar ayuda puedes acceder a estas páginas donde podrás encontrar gente que ofrece y solicita diferentes tipos de ayuda: </p>

      <a
        href="https://ayudaterreta.com/"
      >Ayuda Terreta</a>
      <br></br>
      <a
        href="https://ayudadana.com/"
      >Ayuda DANA</a></>
  )
}

const DonationsLayout = () => {
  return (
    <>
      <p>
        Si quieres ofrecer o solicitar ayuda puedes acceder a estas páginas donde podrás encontrar gente que ofrece y solicita diferentes tipos de ayuda: </p>

      <a
        href="https://cercadeti.cruzroja.es/ayudaafectadosinundacionesdana"
      >Cruz Roja</a>
      <br></br>
      <a
        href="https://accioncontraelhambre.org/es/landing/emergencia-valencia"
      >Acción contra el hambre</a>
      <br></br>
      <a
        href="https://www.oxfamintermon.org/es/emergencia/personas-vulnerables-afectadas-dana?hsCtaTracking=ac4e066e-fb8f-49e3-a8bb-d29229a67f74%7C88b672e7-f748-4ece-a92d-1ab56ec1e302"
      >Oxfam</a>
      <br></br>
      <a
        href="https://www.bancdelsaliments.org/ca/blog/lajuntament-de-barcelona-i-el-banc-dels-aliments-de-barcelona-inicien-una-recollida-daliments-i-productes-basics-per-als-afectats-per-la-dana/"
      >Banc dels alimnets</a>
    </>
  )
}

const ProtectorasLayout = () => {

}

const ContactLayout = () => {

}