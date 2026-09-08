import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/sections/Footer";
import { locales, Locale } from "@/lib/i18n";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const siteUrl = "https://toldo-lux.com";

  return {
    title: "Política de privacidad | Toldo Lux",
    description:
      "Política de privacidad de Toldo Lux: tratamiento y protección de datos personales conforme al RGPD y la LOPD GDD.",
    alternates: {
      canonical: `/${locale}/politica-de-privacidad`,
      languages: {
        "es-ES": "/es/politica-de-privacidad",
        "ca-ES": "/ca/politica-de-privacidad",
        "en-US": "/en/politica-de-privacidad",
        "x-default": "/es/politica-de-privacidad",
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    metadataBase: new URL(siteUrl),
  };
}

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

interface PolicySection {
  heading: string;
  blocks: Block[];
}

// Legal text copied verbatim from https://toldo-lux.com/politica-de-privacidad/
// It intentionally remains in Spanish regardless of the UI locale.
const sections: PolicySection[] = [
  {
    heading: "Política de privacidad",
    blocks: [
      {
        type: "p",
        text: "El Titular le informa sobre su Política de Privacidad respecto del tratamiento y protección de los datos de carácter personal de los usuarios que puedan ser recabados durante la navegación a través del Sitio Web: https://toldo-lux.com/",
      },
      {
        type: "p",
        text: "En este sentido, el Titular garantiza el cumplimiento de la normativa vigente en materia de protección de datos personales, reflejada en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016 relativo a la protección de las personas físicas (RGPD).",
      },
      {
        type: "p",
        text: "El uso de sitio Web implica la aceptación de esta Política de Privacidad así como las condiciones incluidas en el Aviso Legal.",
      },
    ],
  },
  {
    heading: "Identidad del responsable",
    blocks: [
      {
        type: "ul",
        items: [
          "Nombre del dominio: https://toldo-lux.com/",
          "Nombre / Denominación social: Toldo Lux",
          "Teléfono: https://toldo-lux.com/",
          "NIF / CIF: 47633968W",
          "Dirección: C/ Rumania 22, 43882 Segur de Calafell (Tarragona)",
          "Correo electrónico: info@toldo-lux.com",
        ],
      },
    ],
  },
  {
    heading: "Principios aplicados en el tratamiento de datos",
    blocks: [
      {
        type: "p",
        text: "En el tratamiento de sus datos personales, el Titular aplicará los siguientes principios que se ajustan a las exigencias del nuevo reglamento europeo de protección de datos (RGPD):",
      },
      {
        type: "ul",
        items: [
          "Principio de licitud, lealtad y transparencia: El Titular siempre requerirá el consentimiento para el tratamiento de los datos personales que puede ser para uno o varios fines específicos sobre los que el Titular informará al Usuario previamente con absoluta transparencia.",
          "Principio de minimización de datos: El Titular solicitará solo los datos estrictamente necesarios para el fin o los fines que los solicita.",
          "Principio de limitación del plazo de conservación: El Titular mantendrá los datos personales recabados durante el tiempo estrictamente necesario para el fin o los fines del tratamiento. El Titular informará al Usuario del plazo de conservación correspondiente según la finalidad. En el caso de suscripciones, el Titular revisará periódicamente las listas y eliminará aquellos registros inactivos durante un tiempo considerable.",
          "Principio de integridad y confidencialidad: Los datos personales recabados serán tratados de tal manera que su seguridad, confidencialidad e integridad está garantizada. El Titular toma las precauciones necesarias para evitar el acceso no autorizado o uso indebido de los datos de sus usuarios por parte de terceros.",
        ],
      },
    ],
  },
  {
    heading: "Obtención de datos personales",
    blocks: [
      {
        type: "p",
        text: "Para navegar por el sitio Web no es necesario que facilite ningún dato personal.",
      },
    ],
  },
  {
    heading: "Derechos",
    blocks: [
      {
        type: "p",
        text: "El Titular le informa que sobre sus datos personales tiene derecho a:",
      },
      {
        type: "ul",
        items: [
          "Solicitar el acceso a los datos almacenados.",
          "Solicitar una rectificación o la supresión.",
          "Solicitar la limitación de su tratamiento.",
          "Oponerse al tratamiento.",
        ],
      },
      {
        type: "p",
        text: "No puede ejercitar el derecho a la portabilidad de los datos.",
      },
      {
        type: "p",
        text: "El ejercicio de estos derechos es personal y por tanto debe ser ejercido directamente por el interesado, solicitándolo directamente al Titular, lo que significa que cualquier cliente, suscriptor o colaborador que haya facilitado sus datos en algún momento, puede dirigirse al Titular y pedir información sobre los datos que tiene almacenados y cómo los ha obtenido, solicitar la rectificación de los mismos, oponerse al tratamiento, limitar su uso o solicitar la supresión de esos datos en los ficheros del Titular.",
      },
      {
        type: "p",
        text: "Para ejercitar sus derechos tiene que enviar su petición junto con una fotocopia del Documento Nacional de Identidad o equivalente a la dirección de correo electrónico que aparece en el pie de página de esta web.",
      },
      {
        type: "p",
        text: "El ejercicio de estos derechos no incluye ningún dato que el Titular esté obligado a conservar con fines administrativos, legales o de seguridad.",
      },
      {
        type: "p",
        text: "Tiene derecho a la tutela judicial efectiva y a presentar una reclamación ante la autoridad de control, en este caso, la Agencia Española de Protección de Datos, si considera que el tratamiento de datos personales que le conciernen infringe el Reglamento.",
      },
    ],
  },
  {
    heading: "Finalidad del tratamiento de datos personales",
    blocks: [
      {
        type: "p",
        text: "Cuando usted se conecta al Sitio Web para mandar un correo al Titular, se suscribe a su boletín está facilitando información de carácter personal de la que el responsable es el Titular. Esta información puede incluir datos de carácter personal como pueden ser su dirección IP, nombre y apellidos, dirección física, dirección de correo electrónico, número de teléfono, y otra información. Al facilitar esta información, da su consentimiento para que su información sea recopilada, utilizada, gestionada y almacenada por LA EMPRESA sólo como se describe en las páginas:",
      },
      {
        type: "ul",
        items: ["Aviso Legal", "Política de Privacidad."],
      },
      {
        type: "p",
        text: "Los datos personales y la finalidad del tratamiento por parte del Titular es diferente según el sistema de captura de información:",
      },
      {
        type: "p",
        text: "Existen otras finalidades por las que el Titular trata datos personales:",
      },
      {
        type: "ul",
        items: [
          "Para garantizar el cumplimiento de las condiciones recogidas en la página de Aviso Legal y de la ley aplicable. Esto puede incluir el desarrollo de herramientas y algoritmos que ayuden al Sitio Web a garantizar la confidencialidad de los datos personales que recoge.",
          "Para apoyar y mejorar los servicios que ofrece este Sitio Web.",
          "Para analizar la navegación de los usuarios. El Titular recoge otros datos no identificativos que se obtienen mediante el uso de cookies que se descargan en el ordenador del Usuario cuando navega por el Sitio Web cuyas características y finalidad están detalladas en la página de Política de Cookies.",
        ],
      },
    ],
  },
  {
    heading: "Seguridad de los datos personales",
    blocks: [
      {
        type: "p",
        text: "PARA PROTEGER SUS DATOS PERSONALES, EL TITULAR TOMA TODAS LAS PRECAUCIONES RAZONABLES Y SIGUE LAS MEJORES PRÁCTICAS DE LA INDUSTRIA PARA EVITAR SU PÉRDIDA, MAL USO, ACCESO INDEBIDO, DIVULGACIÓN, ALTERACIÓN O DESTRUCCIÓN DE LOS MISMOS.",
      },
      {
        type: "p",
        text: "Sus datos podrán ser incorporados a un fichero de lista de correo, del cual el Titular es responsable de su gestión y tratamiento. La seguridad de sus datos está garantizada, ya que el Titular toma todas las medidas de seguridad necesarias y le garantiza que los datos personales sólo se usarán para las finalidades dadas.",
      },
      {
        type: "p",
        text: "El Titular informa al Usuario de que sus datos personales no serán cedidos a terceras organizaciones, con la salvedad de que dicha cesión de datos esté amparada en una obligación legal o cuando la prestación de un servicio implique la necesidad de una relación contractual con un encargado de tratamiento. En este último caso, solo se llevará a cabo la cesión de datos al tercero cuando el Titular disponga del consentimiento expreso del Usuario.",
      },
      {
        type: "p",
        text: "Sin embargo, en algunos casos se pueden realizar colaboraciones con otros profesionales, en esos casos, se requerirá consentimiento al Usuario informando sobre la identidad del colaborador y la finalidad de la colaboración. Siempre se realizará con los más estrictos estándares de seguridad.",
      },
    ],
  },
  {
    heading: "Contenido de otros sitios web",
    blocks: [
      {
        type: "p",
        text: "Las páginas de este sitio Web pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si hubiera visitado la otra web.",
      },
      {
        type: "p",
        text: "Estos sitios Web pueden recopilar datos sobre usted, utilizar cookies, incrustar un código de seguimiento adicional de terceros, y supervisar su interacción usando este código.",
      },
    ],
  },
  {
    heading: "Política de cookies",
    blocks: [
      {
        type: "p",
        text: "Para que este sitio Web funcione correctamente necesita utilizar cookies, que es una información que se almacena en su navegador web. Puede consultar toda la información relativa a la política de recogida y tratamiento de las cookies en la página de Política de Cookies.",
      },
    ],
  },
  {
    heading: "Legitimación para el tratamiento de datos",
    blocks: [
      {
        type: "p",
        text: "La base legal para el tratamiento de sus datos es: El consentimiento del interesado.",
      },
    ],
  },
  {
    heading: "Categorías de datos personales",
    blocks: [
      {
        type: "p",
        text: "Las categorías de datos personales que trata el Titular son:",
      },
      {
        type: "ul",
        items: [
          "Datos identificativos.",
          "No se tratan categorías de datos especialmente protegidos.",
        ],
      },
    ],
  },
  {
    heading: "Conservación de datos personales",
    blocks: [
      {
        type: "p",
        text: "Los datos personales proporcionados al Titular se conservarán hasta que solicite su supresión.",
      },
    ],
  },
  {
    heading: "Navegación Web",
    blocks: [
      {
        type: "p",
        text: "Al navegar por el Sitio Web se pueden recoger datos no identificativos, que pueden incluir, la dirección IP, geolocalización, un registro de cómo se utilizan los servicios y sitios, hábitos de navegación y otros datos que no pueden ser utilizados para identificarle.",
      },
      {
        type: "p",
        text: "El sitio Web utiliza los siguientes servicios de análisis de terceros:",
      },
      {
        type: "ul",
        items: [
          "El Titular utiliza la información obtenida para obtener datos estadísticos, analizar tendencias, administrar el sitio, estudiar patrones de navegación y para recopilar información demográfica.",
          "El Titular no se hace responsable del tratamiento de los datos personales que realicen las páginas web a las que pueda acceder a través de los distintos enlaces que contiene el Sitio Web.",
        ],
      },
    ],
  },
  {
    heading: "Exactitud y veracidad de los datos personales",
    blocks: [
      {
        type: "p",
        text: "Usted se compromete a que los datos facilitados al Titular sean correctos, completos, exactos y vigentes, así como a mantenerlos debidamente actualizados.",
      },
      {
        type: "p",
        text: "Como Usuario del Sitio Web es el único responsable de la veracidad y corrección de los datos remitidos al Sitio Web exonerando al Titular de cualquier responsabilidad al respecto.",
      },
    ],
  },
  {
    heading: "Aceptación y consentimiento",
    blocks: [
      {
        type: "p",
        text: "Como Usuario del Sitio Web declara haber sido informado de las condiciones sobre protección de datos de carácter personal, acepta y consiente el tratamiento de los mismos por parte del Titular en la forma y para las finalidades indicadas en esta Política de Privacidad.",
      },
      {
        type: "p",
        text: "Para contactar con el Titular, suscribirse a un boletín o realizar comentarios en este sitio Web tiene que aceptar la presente Política de Privacidad.",
      },
    ],
  },
  {
    heading: "Cambios en la política de privacidad",
    blocks: [
      {
        type: "p",
        text: "El Titular se reserva el derecho a modificar la presente Política de Privacidad para adaptarla a novedades legislativas o jurisprudenciales, así como a prácticas de la industria.",
      },
      {
        type: "p",
        text: "Estas políticas estarán vigentes hasta que sean modificadas por otras debidamente publicadas.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 dark:bg-primary-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-10 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            Política de privacidad
          </h1>

          {sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-primary-900 dark:text-white">
                {section.heading}
              </h2>
              {section.blocks.map((block, index) =>
                block.type === "p" ? (
                  <p
                    key={index}
                    className="mb-4 leading-relaxed text-primary-600 dark:text-primary-200"
                  >
                    {block.text}
                  </p>
                ) : (
                  <ul
                    key={index}
                    className="mb-4 list-disc space-y-2 pl-6 text-primary-600 dark:text-primary-200"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
