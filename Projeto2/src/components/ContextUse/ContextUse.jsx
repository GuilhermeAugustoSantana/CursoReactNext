import '../../templates/App/App.css';
import { AppContext } from '../contexts/AppContext';
import { Div } from '../Div/Div.jsx';

export const ContexUse = () => {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
};
