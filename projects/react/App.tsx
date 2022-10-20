import React, { useLayoutEffect, useRef, useState } from 'react';
import {
  CdsAccordion,
  CdsAccordionPanel,
  CdsAccordionHeader,
  CdsAccordionContent,
} from './dist/lib/accordion/index.js';
import { CdsAlert, CdsAlertActions, CdsAlertGroup } from './dist/lib/alert/index.js';
import { CdsButton, CdsIconButton } from './dist/lib/button/index.js';
import { CdsBadge } from './dist/lib/badge/index.js';
import { CdsCheckbox } from './dist/lib/checkbox/index.js';
import { CdsControl, CdsControlMessage, CdsFormGroup } from './dist/lib/forms/index.js';
import { CdsDatalist } from './dist/lib/datalist/index.js';
import { CdsDate } from './dist/lib/date/index.js';
import { CdsFile } from './dist/lib/file/index.js';
import { CdsIcon } from './dist/lib/icon/index.js';
import { CdsInput } from './dist/lib/input/index.js';
import { CdsModal, CdsModalActions, CdsModalContent, CdsModalHeader } from './dist/lib/modal/index.js';
import { CdsPassword } from './dist/lib/password/index.js';
import { CdsProgressCircle } from './dist/lib/progress-circle/index.js';
import { CdsRadio, CdsRadioGroup } from './dist/lib/radio/index.js';
import { CdsRange } from './dist/lib/range/index.js';
import { CdsSearch } from './dist/lib/search/index.js';
import { CdsSelect } from './dist/lib/select/index.js';
import { CdsTag } from './dist/lib/tag/index.js';
import { CdsTime } from './dist/lib/time/index.js';
import { CdsTextarea } from './dist/lib/textarea/index.js';
import { CdsToggle, CdsToggleGroup } from './dist/lib/toggle/index.js';
import { ClarityIcons, userIcon, timesIcon } from '@cds/core/icon';
import { CdsDivider } from './dist/lib/divider/index.js';
import { CdsCard } from './dist/lib/card/index.js';
import { CdsBreadcrumb } from './dist/lib/breadcrumb/index.js';
import {
  CdsNavigation,
  CdsNavigationGroup,
  CdsNavigationItem,
  CdsNavigationStart,
} from './dist/lib/navigation/index.js';
import { CdsTree, CdsTreeItem } from './dist/lib/tree-view/index.js';
import { CdsInternalVisualCheckbox } from './dist/lib/internal-components/visual-checkbox/index.js';
import { CdsInternalCloseButton } from './dist/lib/internal-components/close-button/index.js';
import { CdsDropdown } from './dist/lib/dropdown/index.js';
import { CdsSignpost } from './dist/lib/signpost/index.js';
import { CdsInternalPanel } from './dist/lib/internal-components/panel/index.js';
import { CdsGrid, CdsGridColumn, CdsGridRow, CdsGridCell, CdsGridFooter } from './dist/lib/grid/index.js';
import { CdsButtonAction } from './dist/lib/button-action/index.js';
import { CdsButtonSort } from './dist/lib/button-sort/index.js';
import { CdsButtonHandle } from './dist/lib/button-handle/index.js';
import { CdsButtonExpand } from './dist/lib/button-expand/index.js';
import { CdsPagination, CdsPaginationButton } from './dist/lib/pagination/index.js';

ClarityIcons.addIcons(userIcon, timesIcon);

function AccordionDemo() {
  const [panelsExpanded, setPanelsExpanded] = useState<Record<number, boolean>>({});

  const togglePanel = (panel: number) => {
    setPanelsExpanded({
      ...panelsExpanded,
      [panel]: !panelsExpanded[panel],
    });
  };

  return (
    <CdsAccordion>
      <CdsAccordionPanel expanded={panelsExpanded[1]} onExpandedChange={() => togglePanel(1)}>
        <CdsAccordionHeader>Item 1</CdsAccordionHeader>
        <CdsAccordionContent>Content 1</CdsAccordionContent>
      </CdsAccordionPanel>
      <CdsAccordionPanel expanded={panelsExpanded[2]} onExpandedChange={() => togglePanel(2)}>
        <CdsAccordionHeader>Item 2</CdsAccordionHeader>
        <CdsAccordionContent>
          <CdsAccordion>
            <CdsAccordionPanel expanded={panelsExpanded[4]} onExpandedChange={() => togglePanel(4)}>
              <CdsAccordionHeader>Item 2-1</CdsAccordionHeader>
              <CdsAccordionContent>
                <p cds-text="body">
                  Hundreds of thousands hydrogen atoms the sky calls to us not a sunrise but a galaxyrise culture
                  courage of our questions. Concept of the number one courage of our questions tingling of the spine
                  Flatland explorations are creatures of the cosmos. Finite but unbounded great turbulent clouds a still
                  more glorious dawn awaits corpus callosum vastness is bearable only through love dispassionate
                  extraterrestrial observer. The carbon in our apple pies extraordinary claims require extraordinary
                  evidence a very small stage in a vast cosmic arena gathered by gravity extraordinary claims require
                  extraordinary evidence permanence of the stars and billions upon billions upon billions upon billions
                  upon billions upon billions upon billions.
                </p>
              </CdsAccordionContent>
            </CdsAccordionPanel>
          </CdsAccordion>
        </CdsAccordionContent>
      </CdsAccordionPanel>
      <CdsAccordionPanel disabled expanded={panelsExpanded[3]} onExpandedChange={() => togglePanel(3)}>
        <CdsAccordionHeader>Item 3 – Should Not Open</CdsAccordionHeader>
        <CdsAccordionContent>Content 3</CdsAccordionContent>
      </CdsAccordionPanel>
    </CdsAccordion>
  );
}

function AlertDemo() {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <>
      <h3>Light Alerts</h3>
      {showAlert && (
        <CdsAlert status="info" onCloseChange={() => setShowAlert(false)}>
          Foobar
        </CdsAlert>
      )}
      <CdsAlert status="success">Foo</CdsAlert>
      <CdsAlert status="warning">Bar</CdsAlert>
      <CdsAlert status="danger">Baz</CdsAlert>

      <h3>Alert Group</h3>
      <div cds-layout="vertical gap:sm">
        <CdsAlertGroup status="info">
          <CdsAlert closable>This example is a closable alert inside an alert group with a status of "info".</CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="success">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "success".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="warning">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "warning".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup status="danger">
          <CdsAlert closable>
            This example is a closable alert inside an alert group with a status of "danger".
          </CdsAlert>
          <CdsAlert closable>
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
      </div>

      <h3>Banner Alerts</h3>
      <div cds-layout="vertical gap:sm">
        <CdsAlertGroup type="banner">
          <CdsAlert status="info">
            Foobar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup type="banner">
          <CdsAlert status="warning">
            Bar
            <CdsAlertActions>
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
        <CdsAlertGroup type="banner">
          <CdsAlert status="danger">
            Baz
            <CdsAlertActions type="banner">
              <CdsButton>Fix</CdsButton>
            </CdsAlertActions>
          </CdsAlert>
        </CdsAlertGroup>
      </div>
    </>
  );
}

function ButtonDemo() {
  return (
    <>
      <div cds-layout="horizontal gap:md">
        <CdsButton status="primary">primary</CdsButton>
        <CdsButton status="success">success</CdsButton>
        <CdsButton status="danger">danger</CdsButton>
        <CdsButton status="primary" disabled={true}>
          disabled
        </CdsButton>
        <CdsButton loadingState="loading">Loading</CdsButton>
        <CdsButton loadingState="success">Success</CdsButton>
        <CdsButton loadingState="error">Error</CdsButton>
      </div>

      <h3>Internal Close button</h3>
      <CdsInternalCloseButton />

      <h3>Icon Buttons</h3>
      <div cds-layout="horizontal gap:md">
        <CdsIconButton aria-label="My Icon Button">
          <CdsIcon shape="user" />
        </CdsIconButton>
      </div>
    </>
  );
}

function ModalDemo() {
  // const buttonRef = useRef<typeof CdsButton & HTMLButtonElement>();
  const [modalReady, setModalReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [modal2Open, setModal2Open] = useState(false);
  return (
    <>
      <div cds-layout="horizontal gap:lg p-y:md">
        <CdsButton
          onClick={() => {
            setModalReady(true);
            const timer = setTimeout(() => {
              setModalOpen(true);
              clearTimeout(timer);
            }, 25);
          }}
        >
          Open Modal
        </CdsButton>
      </div>
      {modalReady ? (
        <div>
          <CdsModal
            hidden={!modalOpen}
            onCloseChange={() => setModalOpen(false)}
            onCdsMotionChange={e => {
              const motionMsg = (e as CustomEvent).detail;
              if (motionMsg === 'cds-modal-enter-reverse animation done') {
                setModalReady(false);
              }
            }}
          >
            <CdsModalHeader>
              <h3 cds-text="title" cds-first-focus="">
                My Modal
              </h3>
            </CdsModalHeader>
            <CdsModalContent>
              <div cds-layout="vertical gap:md p-y:xs">
                <p cds-text="body">Lorem Ipsum</p>
                <CdsButton onClick={() => setModal2Open(true)}>Open Modal 2</CdsButton>
              </div>
            </CdsModalContent>
            <CdsModalActions>
              <div cds-layout="horizontal gap:sm align:right">
                <CdsButton onClick={() => setModalOpen(false)} action="outline">
                  Cancel
                </CdsButton>
                <CdsButton onClick={() => setModalOpen(false)}>Ok</CdsButton>
              </div>
            </CdsModalActions>
          </CdsModal>
          <CdsModal hidden={!modal2Open} onCloseChange={() => setModal2Open(false)}>
            <CdsModalHeader>
              <h3 cds-text="title">My Modal</h3>
            </CdsModalHeader>
            <CdsModalContent>
              <div cds-layout="vertical gap:md p-y:xs">
                <p cds-text="body">Focus trap inception!</p>
              </div>
            </CdsModalContent>
            <CdsModalActions>
              <div cds-layout="horizontal gap:sm align:right">
                <CdsButton onClick={() => setModal2Open(false)}>Ok</CdsButton>
              </div>
            </CdsModalActions>
          </CdsModal>
        </div>
      ) : (
        <br />
      )}
    </>
  );
}

function DropdownDemo() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [responsiveDropdownOpen, setResponsiveDropdownOpen] = useState(false);
  const [signpostOpen, setSignpostOpen] = useState(false);

  return (
    <>
      <div cds-layout="horizontal gap:lg p-y:md">
        <CdsButton
          id="dropdown-btn"
          aria-controls="my-dropdown"
          onClick={() => {
            const timer = setTimeout(() => {
              setDropdownOpen(true);
              clearTimeout(timer);
            }, 25);
          }}
        >
          Open Dropdown
        </CdsButton>
        <CdsButton
          id="resp-dropdown-btn"
          aria-controls="my-resp-dropdown"
          onClick={() => {
            const timer = setTimeout(() => {
              setResponsiveDropdownOpen(true);
              clearTimeout(timer);
            }, 25);
          }}
        >
          Open Responsive Dropdown
        </CdsButton>
        <CdsButton
          id="signpost-btn"
          aria-controls="my-signpost"
          onClick={() => {
            const timer = setTimeout(() => {
              setSignpostOpen(true);
              clearTimeout(timer);
            }, 25);
          }}
        >
          Open Signpost
        </CdsButton>
      </div>
      <div>
        <CdsDropdown
          id="my-dropdown"
          anchor="dropdown-btn"
          orientation="only:top"
          hidden={!dropdownOpen}
          onCloseChange={() => {
            setDropdownOpen(false);
          }}
        >
          <div cds-layout="p:lg" style={{ height: '150px', width: '150px' }}>
            <p cds-text="body">Ohai</p>
          </div>
        </CdsDropdown>
      </div>

      <div>
        <CdsDropdown
          id="my-resp-dropdown"
          anchor="resp-dropdown-btn"
          orientation="none"
          hidden={!responsiveDropdownOpen}
          onCloseChange={() => setResponsiveDropdownOpen(false)}
        >
          <div cds-layout="p:lg vertical gap:md">
            <h3 cds-first-focus="">Title</h3>
            <p cds-text="body">
              Paroxysm of global death Sea of Tranquility culture science Apollonius of Perga the sky calls to us. Bits
              of moving fluff a mote of dust suspended in a sunbeam concept of the number one globular star cluster with
              pretty stories for which there's little good evidence made in the interiors of collapsing stars. Citizens
              of distant epochs vastness is bearable only through love the ash of stellar alchemy rich in heavy atoms
              muse about rich in mystery and billions upon billions upon billions upon billions upon billions upon
              billions upon billions.
            </p>
            <CdsButton onClick={() => setResponsiveDropdownOpen(false)}>Close Dropdown</CdsButton>
          </div>
        </CdsDropdown>
      </div>

      <div>
        <CdsSignpost
          id="my-signpost"
          anchor="signpost-btn"
          orientation="right bottom"
          hidden={!signpostOpen}
          onCloseChange={() => setSignpostOpen(false)}
        >
          <div cds-layout="p:lg" style={{ height: '150px', width: '150px' }}>
            <h3 cds-first-focus="">Title</h3>
            <p cds-text="body">Ohai</p>
          </div>
        </CdsSignpost>
      </div>
    </>
  );
}

function IconDemo() {
  return (
    <>
      <CdsIcon size="lg" shape="user"></CdsIcon>
      <CdsIcon size="lg" shape="user" badge="info"></CdsIcon>
      <CdsIcon size="lg" shape="user" badge="success"></CdsIcon>
      <CdsIcon size="lg" shape="user" badge="danger"></CdsIcon>
      <CdsIcon size="lg" shape="user" badge="warning-triangle"></CdsIcon>
      <br />
      <br />
      <CdsIcon size="lg" shape="user" solid></CdsIcon>
      <CdsIcon size="lg" shape="user" solid badge="info"></CdsIcon>
      <CdsIcon size="lg" shape="user" solid badge="success"></CdsIcon>
      <CdsIcon size="lg" shape="user" solid badge="danger"></CdsIcon>
      <CdsIcon size="lg" shape="user" solid badge="warning-triangle"></CdsIcon>
    </>
  );
}

function ProgressDemo() {
  return (
    <>
      <h3>Circular</h3>
      <div cds-layout="horizontal gap:sm">
        <CdsProgressCircle size="xl" value={0}></CdsProgressCircle>
        <CdsProgressCircle size="xl" value={49}></CdsProgressCircle>
        <CdsProgressCircle size="xl" value={100}></CdsProgressCircle>
        <CdsProgressCircle size="xl"></CdsProgressCircle>
      </div>
    </>
  );
}

function CardDemo() {
  return (
    <>
      <div cds-layout="vertical gap:lg">
        <CdsCard> Placeholder </CdsCard>

        <CdsCard>
          <div cds-layout="vertical gap:md">
            <div cds-text="section" cds-layout="p-y:sm">
              Card Title
            </div>

            <CdsDivider cds-card-remove-margin></CdsDivider>

            <div cds-text="body" cds-layout="p-y:md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eum id alias aliquid, natus veritatis
              aperiam repudiandae rem porro non, accusamus officia culpa maiores! Quis possimus ea hic laborum dicta!
            </div>

            <CdsDivider cds-card-remove-margin></CdsDivider>

            <div cds-layout="horizontal gap:sm p-y:sm align:vertical-center">
              <CdsButton action="flat-inline">View</CdsButton>
            </div>
          </div>
        </CdsCard>
      </div>

      <h3>Internal Panel</h3>
      <CdsInternalPanel>Hello!</CdsInternalPanel>
    </>
  );
}

function BadgeDemo() {
  return (
    <div cds-layout="horizontal gap:sm">
      <CdsBadge status="info">2</CdsBadge>
      <CdsBadge status="success">3</CdsBadge>
      <CdsBadge status="warning">12</CdsBadge>
      <CdsBadge status="danger">15</CdsBadge>
      <CdsBadge color="gray">1</CdsBadge>
      <CdsBadge color="purple">1</CdsBadge>
      <CdsBadge color="blue">15</CdsBadge>
      <CdsBadge color="orange">2</CdsBadge>
      <CdsBadge color="light-blue">3</CdsBadge>
    </div>
  );
}

function TagDemo() {
  return (
    <>
      <div cds-layout="horizontal gap:md p-b:md">
        <CdsTag readonly status="info">
          Info
        </CdsTag>
        <CdsTag readonly status="success">
          Success
        </CdsTag>
        <CdsTag readonly status="warning">
          Warning
        </CdsTag>
        <CdsTag readonly status="danger">
          Danger
        </CdsTag>
      </div>
      <div cds-layout="horizontal gap:md">
        <CdsTag readonly color="gray">
          Austin <CdsBadge>1</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="purple">
          New York <CdsBadge>2</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="blue">
          Palo Alto <CdsBadge>3</CdsBadge>{' '}
        </CdsTag>
        <CdsTag readonly color="orange">
          San Francisco <CdsBadge>12</CdsBadge>
        </CdsTag>
        <CdsTag readonly color="light-blue">
          Seattle <CdsBadge>15</CdsBadge>
        </CdsTag>
      </div>
    </>
  );
}

function FormsDemo() {
  // react doesn't support the indeterminate prop
  const ref = useRef<HTMLInputElement>(null);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.indeterminate = true;
    }
  });

  function onExpandedChange(e: any) {
    const myTreeItem = e.target as any;
    myTreeItem.expanded = e.detail;
  }

  function onSelectedChange(e: any) {
    console.log(e);
  }

  return (
    <>
      <h3>CdsControl</h3>
      <div cds-layout="vertical gap:lg">
        <CdsControl layout="compact">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="error">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsControl>

        <CdsControl layout="compact" status="success">
          <label>label</label>
          <input placeholder="some custom control" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsControl>
      </div>

      <h3>Checkbox</h3>
      <CdsFormGroup>
        <CdsCheckbox>
          <label>checked</label>
          <input type="checkbox" defaultChecked />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox>
          <label>un-checked</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox status="error">
          <label>error</label>
          <input type="checkbox" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox status="success">
          <label>success</label>
          <input type="checkbox" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox>
          <label>indeterminate</label>
          {/* the ref is to set the indeterminate value */}
          <input type="checkbox" ref={ref} />
          <CdsControlMessage>indeterminate message</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox>
          <label>disabled</label>
          <input type="checkbox" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsCheckbox>

        <CdsCheckbox>
          <label>checked disabled</label>
          <input type="checkbox" disabled checked />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsCheckbox>
      </CdsFormGroup>

      <h3>Visual Checkbox</h3>
      <CdsFormGroup>
        <CdsInternalVisualCheckbox />
      </CdsFormGroup>

      <h3>Datalist</h3>
      <CdsDatalist>
        <label>datalist</label>
        <input placeholder="placeholder text" />
        <datalist>
          <option value="Item 1"></option>
          <option value="Item 2"></option>
          <option value="Item 3"></option>
        </datalist>
        <CdsControlMessage>message text</CdsControlMessage>
      </CdsDatalist>

      <h3>File</h3>
      <CdsFormGroup layout="vertical">
        <CdsFile layout="vertical">
          <label>label</label>
          <input type="file" multiple />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsFile>

        <CdsFile layout="vertical">
          <label>disabled</label>
          <input type="file" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsFile>

        <CdsFile layout="vertical" status="error">
          <label>error</label>
          <input type="file" multiple />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsFile>

        <CdsFile layout="vertical" status="success">
          <label>success</label>
          <input type="file" multiple />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsFile>
      </CdsFormGroup>

      <h3>Input</h3>
      <CdsFormGroup layout="vertical">
        <CdsInput layout="vertical">
          <label>label</label>
          <input placeholder="name" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsInput>

        <CdsInput layout="vertical">
          <label>disabled</label>
          <input placeholder="name" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsInput>

        <CdsInput layout="vertical">
          <label>error</label>
          <input placeholder="name" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsInput>

        <CdsInput layout="vertical">
          <label>success</label>
          <input placeholder="name" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsInput>
      </CdsFormGroup>

      <h3>Password</h3>
      <CdsFormGroup layout="vertical">
        <CdsPassword layout="vertical">
          <label>label</label>
          <input type="password" defaultValue="123456" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsPassword>

        <CdsPassword layout="vertical">
          <label>disabled</label>
          <input type="password" value="123456" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsPassword>

        <CdsPassword layout="vertical" status="error">
          <label>error</label>
          <input type="password" defaultValue="123456" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsPassword>

        <CdsPassword layout="vertical" status="success">
          <label>success</label>
          <input type="password" defaultValue="123456" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsPassword>
      </CdsFormGroup>

      <h3>Radio</h3>
      <CdsRadioGroup>
        <label>radio group</label>
        <CdsRadio>
          <label>radio 1</label>
          <input type="radio" defaultChecked />
        </CdsRadio>

        <CdsRadio>
          <label>radio 2</label>
          <input type="radio" />
        </CdsRadio>

        <CdsRadio>
          <label>radio 3</label>
          <input type="radio" />
        </CdsRadio>
      </CdsRadioGroup>

      <CdsFormGroup>
        <CdsPassword layout="vertical">
          <label>disabled</label>
          <input type="password" value="123456" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsPassword>

        <CdsPassword layout="vertical" status="error">
          <label>error</label>
          <input type="password" defaultValue="123456" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsPassword>

        <CdsPassword layout="vertical" status="success">
          <label>success</label>
          <input type="password" defaultValue="123456" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsPassword>
      </CdsFormGroup>

      <h3>Radio</h3>
      <CdsRadioGroup>
        <label>radio group</label>
        <CdsRadio>
          <label>radio 1</label>
          <input type="radio" defaultChecked />
        </CdsRadio>

        <CdsRadio>
          <label>radio 2</label>
          <input type="radio" />
        </CdsRadio>

        <CdsRadio>
          <label>radio 3</label>
          <input type="radio" />
        </CdsRadio>
      </CdsRadioGroup>

      <h3>Tree View</h3>
      <CdsTree multiSelect>
        <CdsTreeItem
          expanded
          onExpandedChange={(e: any) => onExpandedChange(e)}
          onSelectedChange={(e: any) => onSelectedChange(e)}
        >
          1
          <CdsTreeItem
            onExpandedChange={(e: any) => onExpandedChange(e)}
            onSelectedChange={(e: any) => onSelectedChange(e)}
          >
            1-1
            <CdsTreeItem
              onExpandedChange={(e: any) => onExpandedChange(e)}
              onSelectedChange={(e: any) => onSelectedChange(e)}
            >
              1-1-1
            </CdsTreeItem>
            <CdsTreeItem
              onExpandedChange={(e: any) => onExpandedChange(e)}
              onSelectedChange={(e: any) => onSelectedChange(e)}
            >
              1-1-2
            </CdsTreeItem>
          </CdsTreeItem>
          <CdsTreeItem
            onExpandedChange={(e: any) => onExpandedChange(e)}
            onSelectedChange={(e: any) => onSelectedChange(e)}
          >
            1-2
          </CdsTreeItem>
          <CdsTreeItem
            onExpandedChange={(e: any) => onExpandedChange(e)}
            onSelectedChange={(e: any) => onSelectedChange(e)}
          >
            1-3
          </CdsTreeItem>
        </CdsTreeItem>
        <CdsTreeItem
          onExpandedChange={(e: any) => onExpandedChange(e)}
          onSelectedChange={(e: any) => onSelectedChange(e)}
        >
          2
          <CdsTreeItem
            onExpandedChange={(e: any) => onExpandedChange(e)}
            onSelectedChange={(e: any) => onSelectedChange(e)}
          >
            2-1
          </CdsTreeItem>
          <CdsTreeItem
            onExpandedChange={(e: any) => onExpandedChange(e)}
            onSelectedChange={(e: any) => onSelectedChange(e)}
          >
            2-2
          </CdsTreeItem>
        </CdsTreeItem>
        <CdsTreeItem
          onExpandedChange={(e: any) => onExpandedChange(e)}
          onSelectedChange={(e: any) => onSelectedChange(e)}
        >
          3
        </CdsTreeItem>
      </CdsTree>

      <h3>Toggles</h3>
      <CdsToggleGroup>
        <label>A toggle group</label>
        <CdsToggle>
          <label>Toggle 1</label>
          <input type="checkbox" />
        </CdsToggle>
        <CdsToggle>
          <label>Toggle</label>
          <input type="checkbox" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsToggle>
      </CdsToggleGroup>

      <h3>Date Inputs</h3>
      <CdsDate layout="horizontal" control-width="shrink">
        <label>Date input</label>
        <input type="date" defaultValue="2018-07-22" min="2018-01-01" max="2019-12-31" />
        <CdsControlMessage>message text</CdsControlMessage>
      </CdsDate>

      <h3>Time Inputs</h3>
      <CdsTime control-width="shrink">
        <label>time</label>
        <input type="time" min="09:00" max="18:00" defaultValue="11:00" />
        <CdsControlMessage>message text</CdsControlMessage>
      </CdsTime>

      <h3>Search Inputs</h3>
      <h4>Vertical</h4>
      <CdsFormGroup layout="vertical">
        <CdsSearch>
          <label>label</label>
          <input type="search" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSearch>

        <CdsSearch status="error">
          <label>error</label>
          <input type="search" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsSearch>

        <CdsSearch status="success">
          <label>success</label>
          <input type="search" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsSearch>
      </CdsFormGroup>

      <h4>Horizontal</h4>
      <CdsFormGroup layout="horizontal">
        <CdsSearch layout="horizontal">
          <label>label</label>
          <input type="search" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSearch>

        <CdsSearch layout="horizontal" status="error">
          <label>error</label>
          <input type="search" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsSearch>

        <CdsSearch layout="horizontal" status="success">
          <label>success</label>
          <input type="search" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsSearch>
      </CdsFormGroup>

      <h4>Compact</h4>
      <CdsFormGroup layout="compact">
        <CdsSearch layout="compact">
          <label>label</label>
          <input type="search" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSearch>

        <CdsSearch layout="compact" status="error">
          <label>error</label>
          <input type="search" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsSearch>

        <CdsSearch layout="compact" status="success">
          <label>success</label>
          <input type="search" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsSearch>
      </CdsFormGroup>

      <h3>Range Inputs</h3>
      <CdsFormGroup layout="horizontal">
        <CdsRange layout="horizontal">
          <label>label</label>
          <input type="range" />
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal">
          <label>disabled</label>
          <input type="range" disabled />
          <CdsControlMessage>disabled message</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal" status="error">
          <label>error</label>
          <input type="range" />
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsRange>

        <CdsRange layout="horizontal" status="success">
          <label>success</label>
          <input type="range" />
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsRange>
      </CdsFormGroup>

      <h3>Textareas</h3>
      <h4>Vertical</h4>
      <CdsFormGroup layout="vertical">
        <CdsTextarea layout="vertical">
          <label>label</label>
          <textarea></textarea>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTextarea>

        <CdsTextarea layout="vertical" status="error">
          <label>error status</label>
          <textarea></textarea>
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsTextarea>

        <CdsTextarea layout="vertical" status="success">
          <label>success status</label>
          <textarea></textarea>
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsTextarea>
      </CdsFormGroup>

      <h4>Horizontal</h4>
      <CdsFormGroup layout="horizontal">
        <CdsTextarea layout="horizontal">
          <label>label</label>
          <textarea></textarea>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsTextarea>

        <CdsTextarea layout="horizontal" status="error">
          <label>error status</label>
          <textarea></textarea>
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsTextarea>

        <CdsTextarea layout="horizontal" status="success">
          <label>success status</label>
          <textarea></textarea>
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsTextarea>
      </CdsFormGroup>

      <h3>Selects</h3>
      <h4>Select Inputs</h4>
      <CdsFormGroup>
        <CdsSelect>
          <label>label</label>
          <select>
            <option>option one</option>
            <option>option two</option>
            <option>option three</option>
          </select>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSelect>

        <CdsSelect status="error">
          <label>error status</label>
          <select>
            <option>option one</option>
            <option>option two</option>
            <option>option three</option>
          </select>
          <CdsControlMessage status="error">error message</CdsControlMessage>
        </CdsSelect>

        <CdsSelect status="success">
          <label>success status</label>
          <select>
            <option>option one</option>
            <option>option two</option>
            <option>option three</option>
          </select>
          <CdsControlMessage status="success">success message</CdsControlMessage>
        </CdsSelect>
      </CdsFormGroup>

      <h4>Multi-Select</h4>
      <CdsFormGroup layout="horizontal">
        <CdsSelect layout="horizontal">
          <label>label</label>
          <select multiple>
            <option>option one</option>
            <option>option two</option>
            <option>option three</option>
          </select>
          <CdsControlMessage>message text</CdsControlMessage>
        </CdsSelect>
      </CdsFormGroup>
    </>
  );
}

interface NavItem {
  name: string;
  target: string;
  component: () => JSX.Element;
  children?: NavItem[];
}

const menuItems: NavItem[] = [
  {
    name: 'Accordion',
    target: 'accordion',
    component: () => <AccordionDemo />,
  },
  {
    name: 'Alerts',
    target: 'alerts',
    component: () => <AlertDemo />,
  },
  {
    name: 'Badges',
    target: 'badges',
    component: () => <BadgeDemo />,
  },
  {
    name: 'Buttons',
    target: 'buttons',
    component: () => <ButtonDemo />,
  },
  {
    name: 'Icons',
    target: 'icons',
    component: () => <IconDemo />,
  },
  {
    name: 'Modal',
    target: 'modals',
    component: () => <ModalDemo />,
  },
  {
    name: 'Dropdown & Signpost',
    target: 'dropdown',
    component: () => <DropdownDemo />,
  },
  {
    name: 'Cards',
    target: 'cards',
    component: () => <CardDemo />,
  },
  {
    name: 'Tags',
    target: 'tags',
    component: () => <TagDemo />,
  },
  {
    name: 'Progress',
    target: 'progress',
    component: () => <ProgressDemo />,
  },
  {
    name: 'Forms',
    target: 'forms',
    component: () => <FormsDemo />,
  },
  {
    name: 'Grid',
    target: 'grid',
    component: () => <GridDemo />,
  },
];

function GridDemo() {
  return (
    <>
      <CdsGrid aria-label="basic datagrid demo">
        <CdsGridColumn>Type</CdsGridColumn>
        <CdsGridColumn>Description</CdsGridColumn>
        <CdsGridColumn>Amount</CdsGridColumn>
        <CdsGridColumn>Balance</CdsGridColumn>
        <CdsGridRow>
          <CdsGridCell>Deposit</CdsGridCell>
          <CdsGridCell>Item</CdsGridCell>
          <CdsGridCell>$1,000,000.00</CdsGridCell>
          <CdsGridCell>$1,000,000.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Credit</CdsGridCell>
          <CdsGridCell>Billing</CdsGridCell>
          <CdsGridCell>$250.00</CdsGridCell>
          <CdsGridCell>$523,750.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Debit</CdsGridCell>
          <CdsGridCell>Renewal</CdsGridCell>
          <CdsGridCell>$9.00</CdsGridCell>
          <CdsGridCell>$163,262.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Credit</CdsGridCell>
          <CdsGridCell>Subscription</CdsGridCell>
          <CdsGridCell>$53.00</CdsGridCell>
          <CdsGridCell>$347,423.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Deposit</CdsGridCell>
          <CdsGridCell>Subscription</CdsGridCell>
          <CdsGridCell>$1239.00</CdsGridCell>
          <CdsGridCell>$564,772.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Deposit</CdsGridCell>
          <CdsGridCell>Service Fee</CdsGridCell>
          <CdsGridCell>$49.00</CdsGridCell>
          <CdsGridCell>$977,527.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Debit</CdsGridCell>
          <CdsGridCell>Account Transfer</CdsGridCell>
          <CdsGridCell>$2300.00</CdsGridCell>
          <CdsGridCell>$423,236.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Credit</CdsGridCell>
          <CdsGridCell>Payment</CdsGridCell>
          <CdsGridCell>$9.00</CdsGridCell>
          <CdsGridCell>$199,282.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Debit</CdsGridCell>
          <CdsGridCell>Unknown</CdsGridCell>
          <CdsGridCell>$9.00</CdsGridCell>
          <CdsGridCell>$929,741.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridRow>
          <CdsGridCell>Debit</CdsGridCell>
          <CdsGridCell>Provider</CdsGridCell>
          <CdsGridCell>$9203.00</CdsGridCell>
          <CdsGridCell>$239,120.00</CdsGridCell>
        </CdsGridRow>
        <CdsGridFooter>
          <CdsPagination aria-label="pagination">
            <CdsPaginationButton aria-label="go to first" action="first" disabled></CdsPaginationButton>
            <CdsPaginationButton aria-label="go to previous" action="prev" disabled></CdsPaginationButton>
            <span aria-label="current page">1 / 3</span>
            <CdsPaginationButton aria-label="go to next" action="next"></CdsPaginationButton>
            <CdsPaginationButton aria-label="go to last" action="last"></CdsPaginationButton>
          </CdsPagination>
        </CdsGridFooter>
      </CdsGrid>

      <h3>Button Actions</h3>
      <div cds-layout="horizontal gap:lg">
        <CdsButtonAction aria-label="open options"></CdsButtonAction>
        <CdsButtonAction aria-label="open menu" shape="bars"></CdsButtonAction>
        <CdsButtonSort aria-label="sort list"></CdsButtonSort>
        <CdsButtonHandle aria-label="move item"></CdsButtonHandle>
        <CdsButtonExpand aria-label="open item"></CdsButtonExpand>
      </div>
    </>
  );
}

export default function App() {
  const [navigationOpen, setNavigationOpen] = React.useState(true);
  const [navigationGroupOpen] = React.useState(true);

  return (
    <article cds-layout="horizontal wrap:none">
      <CdsNavigation expanded={navigationOpen}>
        <CdsNavigationStart onClick={() => setNavigationOpen(s => !s)}>Root start</CdsNavigationStart>
        <CdsNavigationItem>
          <a>Root item</a>
        </CdsNavigationItem>
        <CdsNavigationGroup expanded={navigationGroupOpen}>
          <CdsNavigationStart>
            <CdsIcon size="md" shape="user" badge="info" cds-layout="m-r:md"></CdsIcon>
            Group start
          </CdsNavigationStart>
          <CdsNavigationItem>
            <a>Group item</a>
          </CdsNavigationItem>
        </CdsNavigationGroup>

        <CdsDivider></CdsDivider>
        {menuItems.map(i => (
          <CdsNavigationItem key={i.target}>
            <a href={`#demo-${i.target}`}>{i.name}</a>
          </CdsNavigationItem>
        ))}
        <CdsDivider></CdsDivider>

        <CdsNavigationItem slot="cds-navigation-end">
          <a>Last item</a>
        </CdsNavigationItem>
      </CdsNavigation>

      <main cds-layout="vertical gap:md p:md align:horizontal-stretch">
        <CdsBreadcrumb aria-label="breadcrumb">
          <a href="#" cds-text="link">
            Home
          </a>
          <a href="#" cds-text="link">
            Parent page
          </a>
          <span aria-current="page">Current page</span>
        </CdsBreadcrumb>
        <h1>Rendered by React!</h1>

        {menuItems.map(i => (
          <div key={i.target}>
            <h2 id={`demo-${i.target}`} tab-index={-1}>
              {i.name}
            </h2>
            {<i.component />}
          </div>
        ))}
      </main>
    </article>
  );
}
