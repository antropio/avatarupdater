import { Fragment, useState } from "react";
import { IntlProvider } from "react-intl";
import AvatarUpdater from "./components/avatarUpdater";

const language =
  (navigator.languages && navigator.languages[0]) || navigator.language;
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

const App = () => {
const [avatar, setAvatar] = useState(null)


  return (
    <Fragment>
      <IntlProvider
        locale={languageWithoutRegionCode}
        messages={{}}
        defaultLocale="es"
      >
        <AvatarUpdater  src="imagenpordefecto" setAvatar={setAvatar} />
        <p>Imagen de prueba:</p>
        <img src={avatarImg} />
      </IntlProvider>
    </Fragment>
  );
};

export default App;
