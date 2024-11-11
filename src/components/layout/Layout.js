import ContainerLayout from "../elements/ContainerLayout";
import Navbar from "../navbar/Navbar";
import Img from "../image/Img";
import MainLayout from "../elements/MainLayout";

export default function Layout() {
  return (
    <ContainerLayout>
      <Navbar />
      <MainLayout>
        <MainLayout.Wrapper>
          <h1 className="title">Links de ayuda para los afectados por la DANA</h1>
          <p>
            He creado esta página para intentar agrupar en un solo punto y que sea de más fácil acceso toda la información sobre organizaciones, páginas y otros sitios de interés en relación a la DANA.
          </p>

          <Img
            src="https://via.placeholder.com/600x300"
            title="Ejemplo de una imagen grande"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quam perferendis minus recusandae odit ipsa amet itaque aut
            architecto enim praesentium quae, temporibus alias inventore
            incidunt est repellat exercitationem tempora.
          </p>

          <Img
            src="https://via.placeholder.com/600x300"
            title="Ejemplo de una imagen grande"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quam perferendis minus recusandae odit ipsa amet itaque aut
            architecto enim praesentium quae, temporibus alias inventore
            incidunt est repellat exercitationem tempora.
          </p>

          <Img
            src="https://via.placeholder.com/600x300"
            title="Ejemplo de una imagen grande"
          />

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quam perferendis minus recusandae odit ipsa amet itaque aut
            architecto enim praesentium quae, temporibus alias inventore
            incidunt est repellat exercitationem tempora.
          </p>
        </MainLayout.Wrapper>
      </MainLayout>
    </ContainerLayout>
  );
}
