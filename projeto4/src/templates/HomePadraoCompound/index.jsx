import { Children, cloneElement, createContext, useContext, useState } from 'react';
import './styles.css';

const s = {
  style: {
    fontSize: '60px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);
  const onTurn = () => setIsOn((s) => !s);

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};
const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? null : children;
};
const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
  return (
    <button onClick={onTurn} {...props}>
      Turn {isOn ? 'Off' : 'On'}
    </button>
  );
};

export const HomePadraoCompound = () => {
  return (
    <TurnOnOff>
      <div>
        <TurnedOn>
          <p {...s}>on</p>
        </TurnedOn>
        <TurnedOff>
          <p {...s}>Off</p>
        </TurnedOff>
        <TurnButton {...s} />
      </div>
    </TurnOnOff>
  );
};
