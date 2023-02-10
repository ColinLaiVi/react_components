import Accordion from "../components/Accordion"

function AccordionPage() { 
    const items = [
        {
            id: '1',
            label: 'label-1',
            content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
        },
        {
            id: '2',
            label: 'label-2',
            content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
        },
        {
            id: '3',
            label: 'label-3',
            content: 'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent'
        }
    ]

    return <Accordion items={items} />
}

export default AccordionPage
