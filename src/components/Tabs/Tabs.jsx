import classNames from 'classnames';

export const Tabs = ({ tabs, selectedTabId, onTabSelected }) => {
  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tabe => (
            <li
              className={classNames('no-active', {
                'is-active': tabe.id === selectedTabId,
              })}
              data-cy="Tab"
            >
              <a
                href={`#${tabe.id}`}
                data-cy="TabLink"
                onClick={e => {
                  e.preventDefault(); // Prevent default anchor behavior
                  onTabSelected(tabe); // Pass the selected tab to the callback
                }}
              >
                {tabe.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="block" data-cy="TabContent">
        {tabs.find(tab => tab.id === selectedTabId)?.content}
      </div>
    </div>
  );
};
