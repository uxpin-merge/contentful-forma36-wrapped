import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Flex as FlexM, GridItem } from '@contentful/forma-36-react-components';


const Flex = (props) => (
    <FlexM {...props} />
);




Flex.propTypes = {

    /**
    * Class names to be appended to the className prop of the component: PropTypes.string,
    */
    className: PropTypes.string,

    /**
    * An ID used for testing purposes applied as a data attribute (data-test-id): PropTypes.string,
    */
    testId: PropTypes.string,

    // * exampleBoxesNumber

    /**
    * One of flex-direction css values: PropTypes.string,
    */
    flexDirection: PropTypes.oneOf(["-moz-initial", "inherit", "initial", "revert", "unset", "column", "column-reverse", "row"]),

    /**
    * One of justify-content css values: PropTypes.string,
    */
    justifyContent: PropTypes.oneOf([
        "space-around", "space-between", "space-evenly", "stretch", "center", "end", "flex-end", "flex-start", "start", "left", "normal", "right"
    ]),

    /**
    * One of align-items css values: PropTypes.string,
    */
    alignItems: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "unset"
    ]),

    /**
    * One of flex-wrap css values: PropTypes.string,
    */
    flexWrap: PropTypes.oneOf(["-moz-initial", "inherit", "initial", "revert", "unset", "nowrap", "wrap", "wrap-reverse"]),

    /**
    * Child nodes to be rendered in the component: PropTypes.string,
    * @uxpinignoreprop
    */
    children: PropTypes.node,

    /**
    * Html tag used as container:
    */
    htmlTag: PropTypes.string,

    /**
    * Sets width: 100%
    */
    fullWidth: PropTypes.bool,

    /**
    * Sets height: 100%: PropTypes.string,
    */
    fullHeight: PropTypes.bool,

    /**
    * Sets display:inline-flex: PropTypes.string,
    */
    inlineFlex: PropTypes.bool,

    /**
    * Sets flex-shrink: 0
    */
    noShrink: PropTypes.bool,

    /**
    * One of flex-grow css values
    */
    flexGrow: PropTypes.string,

    /**
    * One of justify-content css values: PropTypes.string,
    */
    justifyItems: PropTypes.oneOf([
        "space-around", "space-between", "space-evenly", "stretch", "center", "end", "flex-end", "flex-start", "start", "left", "normal", "right"
    ]),

    /**
    * One of justify-self css values: PropTypes.string,
    */
    justifySelf: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "unset"
    ]),

    justifyItems: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "left",
        "right",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "unset"
    ]),

    /**
    * One of align-self css values: PropTypes.string,
    */
    alignSelf: PropTypes.oneOf([
        "auto",
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "unset"
    ]),
    /**
    * sets margin to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    margin: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),
    /**
    * sets margin-top to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    marginTop: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets margin-right to one of the corresponding spacing tokens, default is none: PropTypes.string,
     */
    marginRight: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets margin-bottom to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    marginBottom: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets margin-left to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    marginLeft: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets padding to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    padding: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets padding-top to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    paddingTop: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),
    /**
    * sets padding-right to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    paddingRight: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets padding-bottom to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    paddingBottom: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * sets padding-left to one of the corresponding spacing tokens, default is none: PropTypes.string,
    */
    paddingLeft: PropTypes.oneOf([
        "none",
        "spacing2Xs",
        "spacingXs",
        "spacingS",
        "spacingM",
        "spacingL",
        "spacingXl",
        "spacing2Xl",
        "spacing3Xl",
        "spacing4Xl"
    ]),

    /**
    * style prop, for inline styles: PropTypes.string,
    */
    style: PropTypes.string

};

Flex.defaultProps = {

};

export { Flex as default };
