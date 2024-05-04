
export declare interface ITab {
  name: string;
  href: string;
  current?: boolean;
}

export declare interface ITabsProps {
  activeTab: string;
  handleTabChange: (tabName: string) => void;
  tabs: ITab[];
  styleConfig: {
      default: string;
      active: string;
      hover: string;
  };
}
export declare interface IOnBoarding {
    id:string;
    image: string;
    title: string;
    current: any;
    target: any;
    description:string;
    tabs?:ITab[];
  }
  