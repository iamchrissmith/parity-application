import { CheckIcon, CloseIcon } from './Icons';
import './Custom-Icon-styles.css';


const hasAttribute = (prop, props) => {
  if (prop) {
    return CheckIcon(props);
  } else {
    return CloseIcon(props);
  }
}

export default hasAttribute;