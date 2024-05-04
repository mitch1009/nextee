import { OnBoardingPlaceHolder } from "../OnBoardingPlaceHolder";

export const OnBoardingSwitch = ({ activeTab }: any) => {

    return (
        <>
            {activeTab === "Profile" && <OnBoardingPlaceHolder imageSrc={'/onboarding/profile.svg'} description={'Profile'}/>}
            {activeTab === "Contact" && <OnBoardingPlaceHolder imageSrc={'/onboarding/contact.svg'} description={'Contact'}/>}   
            {activeTab === "Security" && <OnBoardingPlaceHolder imageSrc={'/onboarding/security.svg'} description={'Security'}/>}
            {activeTab === "Privacy" && <OnBoardingPlaceHolder imageSrc={'/onboarding/privacy.svg'} description={'Privacy'}/>}
            {activeTab === "Overview" && <OnBoardingPlaceHolder imageSrc={'/onboarding/overview.svg'} description={'Overview'}/>}
            {activeTab === "Team" && <OnBoardingPlaceHolder imageSrc={'/onboarding/team.svg'} description={'Team'}/>}
            {activeTab === "Projects" && <OnBoardingPlaceHolder imageSrc={'/onboarding/project.svg'} description={'Projects'}/>}
            {activeTab === "Tasks" && <OnBoardingPlaceHolder imageSrc={'/onboarding/task.svg'} description={'Tasks'}/>}
            {activeTab === "Accounts" && <OnBoardingPlaceHolder imageSrc={'/onboarding/calculator.svg'} description={'Accounts'}/>}
            {activeTab === "Transactions" && <OnBoardingPlaceHolder imageSrc={'/onboarding/transact.svg'} description={'Transactions'}/>}
            {activeTab === "Payments" && <OnBoardingPlaceHolder imageSrc={'/onboarding/payment.svg'} description={'Payments'}/>}
            {activeTab === "Statements" && <OnBoardingPlaceHolder imageSrc={'/onboarding/statement.svg'} description={'Statements'}/>}
        </>
    );
};