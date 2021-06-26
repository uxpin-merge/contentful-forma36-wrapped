import * as PropTypes from 'prop-types';
import * as React from 'react';
import  { Workbench, Icon, Button }  from '@contentful/forma-36-react-components';

const buttonIcons = [
  'Heading',
  'ArrowDown',
  'ArrowDownTrimmed',
  'ArrowUp',
  'ArrowUpTrimmed',
  'Asset',
  'AssetTrimmed',
  'Calendar',
  'ChatBubble',
  'ChatBubbleTrimmed',
  'CheckCircle',
  'CheckCircleTrimmed',
  'ChevronDown',
  'ChevronDownTrimmed',
  'ChevronLeft',
  'ChevronLeftTrimmed',
  'ChevronRight',
  'ChevronRightTrimmed',
  'ChevronUp',
  'ChevronUpTrimmed',
  'Clock',
  'ClockTrimmed',
  'Close',
  'CloseTrimmed',
  'CloudUpload',
  'Code',
  'CodeTrimmed',
  'Copy',
  'CopyTrimmed',
  'Cycle',
  'CycleTrimmed',
  'Delete',
  'DeleteTrimmed',
  'Done',
  'DoubleArrow',
  'Download',
  'DownloadTrimmed',
  'Drag',
  'DragTrimmed',
  'Edit',
  'EditTrimmed',
  'EmbeddedEntryBlock',
  'EmbeddedEntryBlockTrimmed',
  'EmbeddedEntryInline',
  'EmbeddedEntryInlineTrimmed',
  'Entry',
  'EntryTrimmed',
  'Environment',
  'EnvironmentAlias',
  'ErrorCircle',
  'ErrorCircleOutline',
  'ErrorCircleTrimmed',
  'ExternalLink',
  'ExternalLinkTrimmed',
  'FaceHappy',
  'FaceHappyTrimmed',
  'Filter',
  'FilterTrimmed',
  'Folder',
  'FolderCreate',
  'FolderCreateTrimmed',
  'FolderOpen',
  'FolderOpenTrimmed',
  'FolderTrimmed',
  'FormatBold',
  'FormatBoldTrimmed',
  'FormatItalic',
  'FormatItalicTrimmed',
  'FormatUnderlined',
  'FormatUnderlinedTrimmed',
  'Gift',
  'HeadingOne',
  'HeadingOneTrimmed',
  'HeadingTrimmed',
  'HeadingTwo',
  'HeadingTwoTrimmed',
  'HelpCircle',
  'HelpCircleInverted',
  'HelpCircleTrimmed',
  'HorizontalRule',
  'HorizontalRuleTrimmed',
  'InfoCircle',
  'InfoCircleTrimmed',
  'Language',
  'Link',
  'LinkAlternate',
  'LinkTrimmed',
  'ListBulleted',
  'ListBulletedTrimmed',
  'ListNumbered',
  'ListNumberedTrimmed',
  'Lock',
  'LockTrimmed',
  'Logout',
  'LooksOne',
  'LooksOneTrimmed',
  'LooksTwo',
  'LooksTwoTrimmed',
  'Menu',
  'MenuTrimmed',
  'Minus',
  'MoreHorizontal',
  'MoreHorizontalTrimmed',
  'MoreVertical',
  'MoreVerticalTrimmed',
  'Person',
  'Plus',
  'PlusCircle',
  'PlusCircleTrimmed',
  'PlusTrimmed',
  'Preview',
  'Quote',
  'QuoteTrimmed',
  'Receipt',
  'ReceiptTrimmed',
  'References',
  'Release',
  'ReleaseTrimmed',
  'Search',
  'SearchTrimmed',
  'Settings',
  'SettingsTrimmed',
  'ShoppingCart',
  'ShoppingCartTrimmed',
  'Star',
  'StarTrimmed',
  'Subscript',
  'SubscriptTrimmed',
  'Superscript',
  'SuperscriptTrimmed',
  'Tags',
  'Text',
  'TextTrimmed',
  'ThumbDown',
  'ThumbDownTrimmed',
  'ThumbUp',
  'ThumbUpTrimmed',
  'Users',
  'UsersTrimmed',
  'Warning',
  'WarningTrimmed',
  'Workflows'
]
const WorkbenchHeader = (props) => (
    <Workbench.Header
    title={props.title}
    description={props.description}
      actions={<Button buttonType="muted" onClick={props.onClick}>{props.buttonLabel}</Button>}
      icon={<Icon icon={props.icon} />}
      onBack={
        props.backBtn
        // If backBtn prop = true
        ? props.backClick
        //else
        : null}
    />
);

WorkbenchHeader.propTypes = {
/**
   * The title text of the header
   */
 title: PropTypes.string,

 /**
 * The description text of the header
 */
 description: PropTypes.string,

 /**
 * The icon of the header
 */
 icon: PropTypes.oneOf(buttonIcons),

 /**
 * Label of buttton in the header
 */
 buttonLabel: PropTypes.string,

 /**
 * Display Back button on header
 */
 backBtn: PropTypes.bool,

 /**
 * onClick function of the back button in the header
 */
 backClick: PropTypes.func,

 /**
 * @uxpinignoreprop
 */
 children: PropTypes.node,

 /**
  * An ID used for testing purposes applied as a data attribute (data-test-id)
  * @uxpinignoreprop
  */
 testId: PropTypes.string,
  /**
  * onClick function of the button in the header
  */
  onClick: PropTypes.func,
};

WorkbenchHeader.defaultProps = {
  description: "This is the description",
  buttonLabel: "Click",
  title: "Page title",
  icon:"ArrowDown",
  onClick: () => undefined
};

export { WorkbenchHeader as default };
