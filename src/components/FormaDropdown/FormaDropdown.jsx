import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Button, Dropdown as DropdownM, DropdownList, DropdownListItem } from '@contentful/forma-36-react-components';

function Dropdown(props) {
  const [isOpen, setOpen] = React.useState(false);
   //On prop change (re render), set state 'open' to isOpen prop value
   React.useEffect(() => setOpen(props.isOpen), [props]);

  const { triggerText, uxpinRef, ...other } = props;
  return (

    <DropdownM
    {...other}

      isOpen={isOpen}
      onClose={() => setOpen(false)}
      toggleElement={
        <Button
          size="small"
          buttonType="muted"
          indicateDropdown
          onClick={() => setOpen(!isOpen)}

        >
          {triggerText}
        </Button>
      }
    >
      {props.children}

    </DropdownM>
  );
}


Dropdown.propTypes = {
  /**
  The label to be displayed above the dropdown
  * @uxpinpropname Label
  */
  submenuToggleLabel: PropTypes.string,

  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,

  isAutoalignmentEnabled: PropTypes.bool,

  isFullWidth: PropTypes.bool,

  isOpen: PropTypes.bool,

  onClose: PropTypes.func,

  position: PropTypes.oneOf(["default","left", "right", "top", "bottom"]),

  /**
   * @uxpinignoreprop
   */
  toggleElement: PropTypes.func,
  /**
  The text to be displayed on the button
  * @uxpinpropname Button Text
  */
  triggerText: PropTypes.string,
};



Dropdown.defaultProps = {
  triggerText: "This is the button text",
  submenuToggleLabel: "Dropdown label",
  isOpen:false
};

export { Dropdown as default };
