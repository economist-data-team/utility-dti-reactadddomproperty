import 'react/lib/DOMProperty';
import DOMProperty from 'react/lib/DOMProperty';
import ReactInjection from 'react/lib/ReactInjection';

/**
 * adds a DOM property to React's list of recognized properties
 *
 * @param  {string} propertyKey - the key recognized by React
 * @param  {string} propertyName - the property name in the DOM
 */
export default function addDOMProperty(propertyKey, propertyName) {
  const MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE; // eslint-disable-line id-match
  const newProperty = { Properties: {}, DOMAttributeNames: {} };
  newProperty.Properties[propertyKey] = MUST_USE_ATTRIBUTE; // eslint-disable-line id-match
  newProperty.DOMAttributeNames[propertyKey] = propertyName;

  ReactInjection.DOMProperty.injectDOMPropertyConfig(newProperty);
}
