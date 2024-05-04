import { ITabsProps } from "../OnBoardingDTO";


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const OnBoardingTabs: React.FC<ITabsProps> = ({ activeTab, handleTabChange, tabs, styleConfig }) => {
  return (
    <div>
      <div className="">
        <div className=" ">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => handleTabChange(tab.name)}
                className={classNames(
                  tab.current ? styleConfig.active : styleConfig.default,
                  
                )}
                aria-current={tab.current ? 'page' : undefined}
              >
               <div className="text-sm sm:text-base">
               {tab.name}
               </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

