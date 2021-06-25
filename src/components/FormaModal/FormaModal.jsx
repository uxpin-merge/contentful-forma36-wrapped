import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Modal as ModalM } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';

function Modal(props) {

  const [isShown, setShown] = React.useState(props.isShown);

  React.useEffect(() => setShown(props.isShown), [props]);

  const { hasCloseBtn, hasCtaButton, clsBtnText, ctaBtnText, ...other } = props;

  return (
    <React.Fragment >

      <ModalM
        isShown={isShown}
        parentSelector={() => document.querySelector('#canvas')}
        size={props.size}
        position={props.position}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEscapePress={true}
      >

        <React.Fragment>
          <ModalM.Header title={props.title} onClose={() => setShown(false)} />
          <ModalM.Content>{props.content}
          {props.children}</ModalM.Content>

          {/* If both  hasActionButton hasCloseBtn are false then hide Modal controls*/}
          {(!hasCtaButton && !hasCloseBtn) ? null :

            <ModalM.Controls>

              {
                // If hasActionButton = true, then display it
                hasCtaButton &&
                <Button buttonType="positive" onClick={props.ctaOnClick}>{ctaBtnText}</Button>
              }
              {
                // If hasCloseBtn = true, then display it
                hasCloseBtn &&
                <Button buttonType="muted" onClick={() => setShown(false)}
                // onClick={() => setShown(false)}
                >{clsBtnText}</Button>
              }

            </ModalM.Controls>

          }

        </React.Fragment>

      </ModalM>
    </React.Fragment>
  );
}

Modal.propTypes = {

  /**
    Modal title that is used in header
  */
  title: PropTypes.string,

  /**
   Modal title that is used in header
  * @uxpincontroltype textfield(4)
  */
  content: PropTypes.string,

  /**
  Size of the modal window
  */
  size: PropTypes.oneOf(["small", "medium", "large", "fullWidth", "zen"]),

  /**
  * Indicating if modal is centered or linked to the top
  */
  position: PropTypes.oneOf(["center", "top"]),



  /**
  * When true, the dialog is shown.
  */
  isShown: PropTypes.bool,

  //////////////////////////////////////////////////////////////////
  // These props are used in UXPin Merge
  //////////////////////////////////////////////////////////////////

  /**
  * If true will display close button
  */
  hasCloseBtn: PropTypes.bool,

  /**
  * Label of close button if shown
  */
  clsBtnText: PropTypes.string,

  /**
  * If true will display action button
  */
  hasCtaButton: PropTypes.bool,

  /**
  * Label of close button if shown
  */
  ctaBtnText: PropTypes.string,

  ctaOnClick: PropTypes.func,

  //////////////////////////////////////////////////////////////////
  // End of UXPin Merge props
  //////////////////////////////////////////////////////////////////

  /**
  * Function that will be called when the exit is complete.
  * @uxpinignoreprop 
  */
  onClose: PropTypes.func,

  /**
  * Function that will be called when the enter is complete.
  * @uxpinignoreprop 
  */
  onAfterOpen: PropTypes.func,
  /**
  * Boolean indicating if clicking the overlay should close the overlay.
  * @uxpinignoreprop 
  */
  shouldCloseOnOverlayClick: PropTypes.bool,

  /**
  * Boolean indicating if pressing the esc key should close the overlay.
  * @uxpinignoreprop 
  */
  shouldCloseOnEscapePress: PropTypes.bool,

  /**
  Top offset if position is 'top'
  * @uxpinignoreprop 
  */
  topOffset: PropTypes.string,

  /**
   * Are modals higher than viewport allowed
   * @uxpinignoreprop 
   */
  allowHeightOverflow: PropTypes.bool,

  /**
  *  @uxpinignoreprop 
  */
  className: PropTypes.string,
  /**
   *  @uxpinignoreprop 
   */
  testId: PropTypes.string,

  /**
   *  @uxpinignoreprop 
   */
  children: PropTypes.node,

  /** 
  * Function that will be called to get the parent element that the modal will be attached to.
  *  @uxpinignoreprop 
  */

  /**
  * Optional props to override ModalHeader behaviour
  *  @uxpinignoreprop 
  */
  modalHeaderProps: PropTypes.object,

  /**
  * Optional props to override ModalContent behaviour
  *  @uxpinignoreprop 
  */
  modalContentProps: PropTypes.object,

  /**
  *  @uxpinignoreprop 
  */
  parentSelector: PropTypes.node,

};

Modal.defaultProps = {
  // isShown: false,
  title: "This is a title",
  content: "This is the modal's content text, but you can also nest components.",
  position: "top",
  hasCloseBtn: true,
  clsBtnText: "Close",
  hasCtaButton: true,
  ctaBtnText: "Confirm",
};

export { Modal as default };
