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
    title: "Política de cookies | Toldo Lux",
    description:
      "Política de cookies de Toldo Lux: qué son, para qué se utilizan y cómo deshabilitarlas en tu navegador.",
    alternates: {
      canonical: `/${locale}/politica-de-cookies`,
      languages: {
        "es-ES": "/es/politica-de-cookies",
        "ca-ES": "/ca/politica-de-cookies",
        "en-US": "/en/politica-de-cookies",
        "x-default": "/es/politica-de-cookies",
      },
    },
    robots: {
      index: false,
      follow: false,
    },
    metadataBase: new URL(siteUrl),
  };
}

type Block = { type: "p"; text: string } | { type: "ul"; items: string[] };

interface PolicySection {
  heading: string;
  blocks: Block[];
}

// Legal text copied from https://toldo-lux.com/Politica-de-cookies/
// It intentionally remains in Spanish regardless of the UI locale.
const sections: PolicySection[] = [
  {
    heading: "¿Qué son las cookies?",
    blocks: [
      {
        type: "p",
        text: "En inglés, el término «cookie» significa galleta, pero en el ámbito de la navegación web, una «cookie» es algo completamente distinto. Cuando accede a nuestro Sitio Web, en el navegador de su dispositivo se almacena una pequeña cantidad de texto que se denomina «cookie». Este texto contiene información variada sobre su navegación, hábitos, preferencias, personalizaciones de contenidos, etc…",
      },
      {
        type: "p",
        text: "Existen otras tecnologías que funcionan de manera similar y que también se usan para recopilar datos sobre tu actividad de navegación. Llamaremos «cookies» a todas estas tecnologías en su conjunto.",
      },
      {
        type: "p",
        text: "Los usos concretos que hacemos de estas tecnologías se describen en el presente documento.",
      },
    ],
  },
  {
    heading: "¿Para qué se utilizan las cookies en esta web?",
    blocks: [
      {
        type: "p",
        text: "Las cookies son una parte esencial de cómo funciona el Sitio Web. El objetivo principal de nuestras cookies es mejorar su experiencia en la navegación. Por ejemplo, para recordar sus preferencias (idioma, país, etc.) durante la navegación y en futuras visitas. La información recogida en las cookies nos permite además mejorar la web, adaptarla a sus intereses como usuario, acelerar las búsquedas que realice, etc..",
      },
      {
        type: "p",
        text: "En determinados casos, si hemos obtenido su previo consentimiento informado, podremos utilizar cookies para otros usos, como por ejemplo para obtener información que nos permita mostrarle publicidad basada en el análisis de sus hábitos de navegación.",
      },
    ],
  },
  {
    heading: "¿Para qué NO se utilizan las cookies en esta web?",
    blocks: [
      {
        type: "p",
        text: "En las cookies que utilizamos no se almacena información sensible de identificación personal como su nombre, dirección, tu contraseña, etc…",
      },
    ],
  },
  {
    heading: "¿Quién utiliza la información almacenada en las cookies?",
    blocks: [
      {
        type: "p",
        text: "La información almacenada en las cookies de nuestro Sitio Web es utilizada exclusivamente por nosotros, a excepción de aquellas identificadas más adelante como «cookie de terceros», que son utilizadas y gestionadas por entidades externas que nos proporcionan servicios que mejoran la experiencia del usuario. Por ejemplo las estadísticas que se recogen sobre el número de visitas, el contenido que más gusta, etc…",
      },
    ],
  },
  {
    heading: "¿Cómo puede evitar el uso de cookies en este Sitio Web?",
    blocks: [
      {
        type: "p",
        text: "Si prefiere evitar el uso de las cookies, puede RECHAZAR su uso o puede CONFIGURAR las que quiere evitar y las que permite utilizar (en este documento le damos información ampliada al respecto de cada tipo de cookie, su finalidad, destinatario, temporalidad, etc… ).",
      },
      {
        type: "p",
        text: "Si las ha aceptado, no volveremos a preguntarle a menos que borre las cookies en su dispositivo según se indica en el apartado siguiente. Si quiere revocar el consentimiento tendrá que eliminar las cookies y volver a configurarlas.",
      },
    ],
  },
  {
    heading: "¿Cómo deshabilito y elimino la utilización de cookies?",
    blocks: [
      {
        type: "p",
        text: "Para restringir, bloquear o borrar las cookies de este Sitio Web (y las usada por terceros) puede hacerlo, en cualquier momento, modificando la configuración de su navegador. Tenga en cuenta que esta configuración es diferente en cada navegador.",
      },
      {
        type: "p",
        text: "En los siguientes enlaces encontrará instrucciones para habilitar o deshabilitar las cookies en los navegadores más comunes.",
      },
      {
        type: "ul",
        items: [
          "Firefox",
          "Google Chrome",
          "Internet Explorer",
          "Microsoft Edge",
          "Safari",
        ],
      },
    ],
  },
  {
    heading: "¿Qué tipos de cookies se utilizan en esta página web?",
    blocks: [
      {
        type: "p",
        text: "Cada página web utiliza sus propias cookies. En nuestra web utilizamos las que se indican a continuación:",
      },
      {
        type: "p",
        text: "SEGÚN LA ENTIDAD QUE LO GESTIONA",
      },
      {
        type: "ul",
        items: [
          "Cookies propias: Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio gestionado por el propio editor y desde el que se presta el servicio solicitado por el Usuario.",
        ],
      },
      {
        type: "p",
        text: "Cookies de terceros: Son aquellas que se envían al equipo terminal del Usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad que trata los datos obtenidos través de las cookies.En el caso de que las cookies sean servidas desde un equipo o dominio gestionado por el propio editor, pero la información que se recoja mediante estas sea gestionada por un tercero, no pueden ser consideradas como cookies propias si el tercero las utiliza para sus propias finalidades (por ejemplo, la mejora de los servicios que presta o la prestación de servicios de carácter publicitario a favor de otras entidades).",
      },
      {
        type: "p",
        text: "SEGÚN SU FINALIDAD",
      },
      {
        type: "ul",
        items: [
          "Cookies técnicas: Son aquellas necesarias para la navegación y el buen funcionamiento de nuestro Sitio Web, como por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, realizar la solicitud de inscripción o participación en un evento, contar visitas a efectos de la facturación de licencias del software con el que funciona el servicio del Sitio Web, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de vídeos o sonido, habilitar contenidos dinámicos (por ejemplo, animación de carga de un texto o imagen).",
          "Cookies de análisis: Permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del Sitio Web.",
          "Cookies de preferencias o personalización: Son aquellas que permiten recordar información para que el Usuario acceda al servicio con determinadas características que pueden diferenciar su experiencia de la de otros usuarios, como, por ejemplo, el idioma, el número de resultados a mostrar cuando el Usuario realiza una búsqueda, el aspecto o contenido del servicio en función del tipo de navegador a través del cual el Usuario accede al servicio o de la región desde la que accede al servicio, etc.",
        ],
      },
      {
        type: "p",
        text: "SEGÚN EL PLAZO DE TIEMPO QUE PERMANECEN ACTIVADAS",
      },
      {
        type: "ul",
        items: [
          "Cookies de sesión: Son aquellas diseñadas para recabar y almacenar datos mientras el Usuario accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado por el Usuario en una sola ocasión (por ejemplo, una lista de productos adquiridos) y desaparecen al terminar la sesión.",
          "Cookies persistentes: Son aquellas en las que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años. A este respecto debe valorarse específicamente si es necesaria la utilización de cookies persistentes, puesto que los riesgos para la privacidad podrían reducirse mediante la utilización de cookies de sesión. En todo caso, cuando se instalen cookies persistentes, se recomienda reducir al mínimo necesario su duración temporal atendiendo a la finalidad de su uso. A estos efectos, el Dictamen 4/2012 del GT29 indicó que para que una cookie pueda estar exenta del deber de consentimiento informado, su caducidad debe estar relacionada con su finalidad. Debido a ello, es mucho más probable que se consideren como exceptuadas las cookies de sesión que las persistentes.",
        ],
      },
    ],
  },
];

export default function CookiePolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 dark:bg-primary-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-10 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            Política de cookies
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
