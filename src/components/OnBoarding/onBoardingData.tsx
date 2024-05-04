import { IOnBoarding } from "./OnBoardingDTO";


let activeTab: string | undefined;
// Static data for the bio
export const biography: IOnBoarding[] = [
  {
    id: "1",
    image: "https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Personal Information",
    current: 5,
    target: 5,
    description: "Complete your personal details to set up your profile. Include information such as your name, contact details, address, and other relevant personal information. Providing accurate and up-to-date personal information ensures smooth communication and enhances your profile's credibility.",
    tabs: [
      { name: "Profile", href: "#profile", current: activeTab === "Profile" },
      { name: "Contact", href: "#contact", current: activeTab === "Contact" },
      { name: "Security", href: "#security", current: activeTab === "Security" },
      { name: "Privacy", href: "#privacy", current: activeTab === "Privacy" }
    ]
  },
  {
    id: "2",
    image: "https://media.istockphoto.com/id/638913398/photo/biography-concept-hand-with-alphabet-blocks.jpg?b=1&s=612x612&w=0&k=20&c=4qBfPAQWxdiE11YNF_Zb9HSxL922T9xglUPvF62p8zw=",
    title: "Department",
    current: 7,
    target: 10,
    description: "Explore and manage your department information. Gain insights into your team's structure, projects, and tasks. Efficient management of departmental details fosters collaboration, enhances productivity, and ensures effective project delivery.",
    tabs: [
      { name: "Overview", href: "#overview", current: activeTab === "Overview" },
      { name: "Team", href: "#team", current: activeTab === "Team" },
      { name: "Projects", href: "#projects", current: activeTab === "Projects" },
      { name: "Tasks", href: "#tasks", current: activeTab === "Tasks" }
    ]
  },
  {
    id: "3",
    image: "https://media.istockphoto.com/id/1699300359/photo/still-life-with-a-vintage-inkwell-a-quill-pen-and-an-old-book.jpg?b=1&s=612x612&w=0&k=20&c=fcUmaZOoDvdNdJAe1rKkcCP-na8p9LOlXMf7FrT4aGg=",
    title: "Banking Details",
    current: 6,
    target: 12,
    description: "Manage your banking information securely. Keep track of your accounts, transactions, payments, and statements. Ensuring accurate and up-to-date banking details is crucial for financial management, budgeting, and tracking your financial health.",
    tabs: [
      { name: "Accounts", href: "#accounts", current: activeTab === "Accounts" },
      { name: "Transactions", href: "#transactions", current: activeTab === "Transactions" },
      { name: "Payments", href: "#payments", current: activeTab === "Payments" },
      { name: "Statements", href: "#statements", current: activeTab === "Statements" }
    ]
  }
];



