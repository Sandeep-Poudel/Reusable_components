import Accordion from "../components/Accordion";
function AccordionPage() {
    const items=[
        {
            id:"sdjf324",
            label:"This is interesting",
            content:"This is an interesting Accordian.I love to make react projects.Yes.the dog is very big to lift up.I was not strong enough to lift the bigg doggo. Luffy will be the King of the pirates."
        },
        {
            id:"sjkdf3er8fd8",
            label:"Can i use React?",
            content:"Yes you can use react to make any thing"
        },
        {
            id:"aksjdfwerwer5643",
            label:"Really?",
            content:"Yes.the dog is very big to lift up.I was not strong enough to lift the bigg doggo. Luffy will be the King of the pirates."
        },
    ];
    return <Accordion items={items}/>
    
};
export default AccordionPage;
