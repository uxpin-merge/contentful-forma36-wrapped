import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Modal } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';

function FormaModal(props) {
  const [isShown, setShown] = React.useState(false);
  React.useEffect(() => setShown(props.isShown), [props]);

  const {   hasCloseButton, closeButtonText, hasActionButton, actionButtonText, ...other } = props;


  return (
    <React.Fragment>
      {/* <Button onClick={() => setShown(true)}>{props.buttonText}</Button> */}

      {/* <Modal
      modalContentProps={{
        className: 'additional-modal-content-class'
      }}
      modalHeaderProps={{
        className: 'additional-modal-header-class'
      }}
      onAfterOpen={function noRefCheck(){}}
      onClose={() => setShown(false)}
      title="Default modal"
      isShown={isShown}
    >
      Modal content. It is centered by default.
    </Modal> */}


      <Modal isShown={isShown} >
        {() => (
          <React.Fragment>
            <Modal.Header title={props.title} onClose={() => setShown(false)}/>
            <Modal.Content>{props.content}</Modal.Content>
            
           
 { (!hasActionButton && !hasCloseButton ) ? null : 

            <Modal.Controls>
            
            { 
            // If hasActionButton = true, then display it
            hasActionButton &&  
            <Button buttonType="positive" onClick={props.onClick}>{actionButtonText}</Button>
            }
            { 
            // If hasCloseButton = true, then display it
            hasCloseButton &&  
            <Button buttonType="muted" onClick={() => setShown(false)}>{closeButtonText}</Button>
            }              

            </Modal.Controls>

          }

          </React.Fragment>
        )}
      </Modal> 
    </React.Fragment>
  );
}

FormaModal.propTypes = {
  position: PropTypes.oneOf(["center", "top"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.string,
  isShown: PropTypes.bool,
  content: PropTypes.string,
  shouldCloseOnEscapePress: PropTypes.bool,

  hasCloseButton: PropTypes.bool,
  closeButtonText: PropTypes.string,
  hasActionButton:  PropTypes.bool,
  actionButtonText: PropTypes.string,
  onClick: PropTypes.func,
};

FormaModal.defaultProps = {
  isShown: false,
  title: "Default modal",
  content: "Hello from controlled modal window",
  hasCloseButton: true,
  closeButtonText: "close",
  hasActionButton:  true,
  actionButtonText: "confirm",
};

export { FormaModal as default };
