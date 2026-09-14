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
    title: "Aviso legal | Toldo Lux",
    description:
      "Aviso legal de Toldo Lux: condiciones de uso, propiedad intelectual y responsabilidades del sitio web.",
    alternates: {
      canonical: `/${locale}/aviso-legal`,
      languages: {
        "es-ES": "/es/aviso-legal",
        "ca-ES": "/ca/aviso-legal",
        "en-US": "/en/aviso-legal",
        "x-default": "/es/aviso-legal",
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

interface LegalSection {
  heading: string;
  blocks: Block[];
}

// Legal text copied from https://toldo-lux.com/Aviso-legal/
// Sanitized: the Plesk temporary domain (festive-neumann...) was replaced with
// https://toldo-lux.com and the leftover contact email info@typmallorca.com with
// info@toldo-lux.com. It intentionally remains in Spanish regardless of the UI locale.
const sections: LegalSection[] = [
  {
    heading: "Datos identificativos",
    blocks: [
      {
        type: "ul",
        items: [
          "Nombre del dominio: https://toldo-lux.com/",
          "Nombre / Denominación social: Toldo Lux",
          "Teléfono: +34 680 78 79 90",
          "NIF / CIF: 47633968W",
          "Dirección: C/ Rumania 22, 43882 Segur de Calafell (Tarragona)",
          "Correo electrónico: info@toldo-lux.com",
        ],
      },
    ],
  },
  {
    heading: "Condiciones de uso",
    blocks: [
      {
        type: "p",
        text: "El acceso, navegación y utilización del sitio web https://toldo-lux.com es (en adelante, el “Sitio Web”) implica la aceptación expresa y sin reservas de todos los términos de las presentes Condiciones de Uso y su observancia y cumplimiento será exigible respecto de cualquier persona que acceda, navegue o utilice el Sitio Web.",
      },
      {
        type: "p",
        text: "A efectos de la interpretación de las presentes Condiciones de Uso, entendemos que una persona pasa a ser “Usuario” en el momento en el que acepta las Condiciones de Uso expuestas en el Sitio Web, bastando para ello que lo visite. Si usted no está de acuerdo con los términos expuestos, no acceda, navegue o utilice el Sitio Web.",
      },
      {
        type: "p",
        text: "El acceso y uso de este Sitio Web por parte del Usuario es gratuito y libre, no obstante, el Usuario asume la responsabilidad en el uso del presente Sitio Web y se compromete a navegar de buena fe y de forma diligente.",
      },
      {
        type: "p",
        text: "En cualquier momento, el RESPONSABLE puede modificar unilateralmente y sin previo aviso la presentación y/o configuración del Sitio Web, así como los servicios y contenidos que se ofertan y se reserva el derecho a modificar los términos aquí estipulados.",
      },
    ],
  },
  {
    heading: "Derechos de propiedad intelectual e industrial",
    blocks: [
      {
        type: "p",
        text: "El Sitio Web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores.",
      },
      {
        type: "p",
        text: "Todos los contenidos del Sitio Web se encuentran debidamente protegidos por la normativa de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.",
      },
      {
        type: "p",
        text: "Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso, explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por parte del RESPONSABLE.",
      },
      {
        type: "p",
        text: "Cualquier uso no autorizado previamente se considera un incumplimiento grave de los derechos de propiedad intelectual o industrial del autor.",
      },
      {
        type: "p",
        text: "Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el Sitio Web, pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia que pudiera suscitarse respecto a los mismos.",
      },
      {
        type: "p",
        text: "El RESPONSABLE autoriza expresamente a que terceros puedan redirigir directamente a los contenidos concretos del Sitio Web, y en todo caso redirigir al sitio web principal.",
      },
      {
        type: "p",
        text: "El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e industrial, no implicando su sola mención o aparición en el Sitio Web la existencia de derechos o responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del mismo.",
      },
      {
        type: "p",
        text: "Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del Sitio Web, puede hacerlo a través del correo electrónico info@toldo-lux.com",
      },
    ],
  },
  {
    heading: "Exención de responsabilidades",
    blocks: [
      {
        type: "p",
        text: "El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su Sitio Web, siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.",
      },
      {
        type: "p",
        text: "El RESPONSABLE no puede garantizar la invulnerabilidad absoluta de sus sistemas de seguridad, por lo que excluye cualquier tipo de responsabilidad por daños y perjuicios de toda naturaleza que puedan deberse a la presencia de virus u otros elementos que puedan producir alteraciones en el sistema informático (software y hardware), documentos electrónicos y ficheros del Usuario o de cualquier tercero.",
      },
      {
        type: "p",
        text: "El Usuario queda informado de que la utilización de los sistemas electrónicos de transmisión de datos y el correo electrónico no ofrecen garantías absolutas de seguridad.",
      },
      {
        type: "p",
        text: "El RESPONSABLE no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al Sitio Web, así como tampoco responde por la legalidad de otros sitios web de terceros que pudieran estar vinculados o enlazados desde el Sitio Web.",
      },
      {
        type: "p",
        text: "El RESPONSABLE no será responsable del uso que terceros hagan de la información publicada en el Sitio Web, ni tampoco de los daños sufridos o pérdidas económicas que, de forma directa o indirecta, produzcan o puedan producir perjuicios económicos, materiales o sobre datos, provocados por el uso de dicha información.",
      },
    ],
  },
  {
    heading: "Política de cookies",
    blocks: [
      {
        type: "p",
        text: "Puede consultar nuestra Política de Cookies para obtener más información al respecto al uso de cookies en el Sitio Web: https://toldo-lux.com/politica-de-cookies/",
      },
    ],
  },
  {
    heading: "Política de enlaces",
    blocks: [
      {
        type: "p",
        text: "Desde el Sitio Web es posible que se redirija a contenidos de terceros sitios web.",
      },
      {
        type: "p",
        text: "Dado que el RESPONSABLE no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no asume ningún tipo de responsabilidad respecto a dichos contenidos.",
      },
      {
        type: "p",
        text: "En todo caso, procederá a la retirada inmediata de cualquier contenido que pudiera contravenir la legislación nacional o internacional, la moral o el orden público, procediendo a la retirada inmediata de la redirección a dicho sitio web, poniendo en conocimiento de las autoridades competentes el contenido en cuestión.",
      },
      {
        type: "p",
        text: "El RESPONSABLE no se hace responsable de la información y contenidos almacenados, a título enunciativo pero no limitativo, en foros, chats, generadores de sitios, comentarios, redes sociales o cualquier otro medio que permita a terceros publicar contenidos de forma independiente en el Sitio Web del RESPONSABLE.",
      },
      {
        type: "p",
        text: "Sin embargo, se pone a disposición de todos los Usuarios, Autoridades y Fuerzas de seguridad, colaborando de forma activa en la retirada o, en su caso, bloqueo de todos aquellos contenidos que puedan afectar o contravenir la legislación nacional o internacional, los derechos de terceros o la moral y el orden público.",
      },
      {
        type: "p",
        text: "En caso de que el Usuario considere que existe en el Sitio Web algún contenido que pudiera ser susceptible de esta clasificación, se ruega lo notifique de forma inmediata al administrador del Sitio Web.",
      },
      {
        type: "p",
        text: "Este Sitio Web ha sido revisado y probado para que funcione correctamente.",
      },
      {
        type: "p",
        text: "Sin embargo, el RESPONSABLE no descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza mayor, catástrofes naturales, huelgas o circunstancias semejantes que hagan imposible el acceso al Sitio Web.",
      },
    ],
  },
  {
    heading: "Política de privacidad y protección de datos personales",
    blocks: [
      {
        type: "p",
        text: "Puede consultar nuestra Política de Privacidad para obtener más información sobre el tratamiento de sus datos personales en el Sitio Web: https://toldo-lux.com/politica-de-privacidad/",
      },
    ],
  },
  {
    heading: "Redes sociales",
    blocks: [
      {
        type: "p",
        text: "El RESPONSABLE, según su criterio, puede proceder a crear un perfil en las siguientes Redes Sociales: Facebook, Instagram, X (Twitter), LinkedIn, Youtube y TikTok.",
      },
      {
        type: "p",
        text: "Por ello, expone, a continuación, las condiciones de uso que rigen respecto a perfiles en Redes Sociales:",
      },
    ],
  },
  {
    heading: "Utilización del perfil",
    blocks: [
      {
        type: "p",
        text: "El RESPONSABLE realizará las siguientes actuaciones:",
      },
      {
        type: "ul",
        items: [
          "Acceso a la información pública del perfil.",
          "Publicación en el perfil del Usuario de toda aquella información ya publicada en la red social del RESPONSABLE.",
          "Enviar mensajes personales e individuales a través de los canales de la red social.",
          "Actualizaciones del estado de la página que se publicarán en el perfil del Usuario.",
        ],
      },
      {
        type: "p",
        text: "El Usuario siempre puede controlar sus conexiones, eliminar los contenidos que dejen de interesarle y restringir con quién comparte sus conexiones; para ello deberá acceder a su configuración de privacidad.",
      },
    ],
  },
  {
    heading: "Publicaciones",
    blocks: [
      {
        type: "p",
        text: "El Usuario, una vez sea seguidor o se haya unido a la red social del RESPONSABLE, podrá publicar en esta comentarios, enlaces, imágenes, fotografías o cualquier otro tipo de contenido multimedia soportado por la misma.",
      },
      {
        type: "p",
        text: "El Usuario, en todos los casos, debe ser el titular del contenido publicado, gozar de los derechos de autor y de propiedad intelectual o contar con el consentimiento de los terceros afectados.",
      },
      {
        type: "p",
        text: "Se prohíbe expresamente cualquier publicación en la red social, ya sean textos, gráficos, fotografías, vídeos, etc. que atenten o sean susceptibles de atentar contra la moral, la ética, el buen gusto o el decoro, y/o que infrinjan, violen o quebranten los derechos de propiedad intelectual o industrial, el derecho a la imagen o la Ley.",
      },
      {
        type: "p",
        text: "En estos casos, el RESPONSABLE se reserva el derecho a retirar de inmediato el contenido, sin comunicación previa, pudiendo solicitar el bloqueo permanente del Usuario.",
      },
      {
        type: "p",
        text: "El RESPONSABLE no se hará responsable de los contenidos que libremente ha publicado un Usuario.",
      },
      {
        type: "p",
        text: "El Usuario debe tener presente que sus publicaciones serán conocidas por otros usuarios, por lo que él mismo es el principal responsable de su privacidad.",
      },
      {
        type: "p",
        text: "Las imágenes que puedan publicarse en la red social no serán almacenadas en ningún fichero por parte del RESPONSABLE, pero sí que permanecerán en la red social.",
      },
    ],
  },
  {
    heading: "Datos de menores de edad o personas con capacidades especiales",
    blocks: [
      {
        type: "p",
        text: "El acceso y registro a través de la redes sociales del RESPONSABLE está prohibido a menores de 14 años.",
      },
      {
        type: "p",
        text: "Por su parte, si el Usuario tiene capacidades especiales, será necesaria la intervención del titular de su patria potestad o tutela, o de su representante legal mediante documento válido que acredite la representación.",
      },
      {
        type: "p",
        text: "El RESPONSABLE quedará expresamente exonerado de cualquier responsabilidad que pudiera derivarse del uso de las redes sociales por parte de menores o personas con capacidades especiales.",
      },
      {
        type: "p",
        text: "Las redes sociales del RESPONSABLE no recogen conscientemente ninguna información personal de menores de edad, por ello, si el Usuario es menor de edad, no debe registrarse, ni utilizar las redes sociales del RESPONSABLE ni tampoco proporcionar ninguna información personal.",
      },
    ],
  },
  {
    heading: "Ley aplicable y jurisdicción",
    blocks: [
      {
        type: "p",
        text: "El presente Aviso Legal se rige en todos y cada uno de sus extremos por la ley española y para la resolución de todas las controversias o cuestiones relacionadas con el presente Sitio Web o de las actividades desarrolladas en el mismo, las partes se someterán a los juzgados y tribunales del domicilio del Usuario o al lugar del cumplimiento de la obligación.",
      },
    ],
  },
];

export default function LegalNoticePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white py-16 dark:bg-primary-950">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-10 text-3xl font-bold text-primary-900 dark:text-white sm:text-4xl">
            Aviso legal
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
