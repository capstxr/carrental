// Import icons
import { IoMdArrowDropdown } from "react-icons/io";

// Import packages / modules
import { useState } from "react";

// Import css
import './faq.scss';

interface TabProps {
    name: string;
    index: number;
}

interface QuestionProps {
    q: string;
    ans: string;
}

const Question = (props: QuestionProps) => {
    const { q, ans } = props;

    const [ isOpen, setIsOpen ] = useState<boolean>(false);

    return (
        <div className={`q-wrapper ${isOpen} w100`}>
            <div
                className="flex justify-space align-center b-4 p-8-24 c-pointer black-border"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="q fs-18 fw-400 ls-05 black q">
                    {q}
                </span>

                <IoMdArrowDropdown className='black fs-28 icon' />
            </div>

            <p className="fs-16 fw-400 ls-05 black a m-t-20">
                {ans}
            </p>
        </div>
    );
}

const FAQ = () => {
    const [ activeTab, setActiveTab ] = useState<number>(0);

    const Tab = (props: TabProps) => {
        const { name, index } = props;

        // Check if current tab is active
        const isTabActive = activeTab === index;
        
        // Change colors accordingly
        const colors = isTabActive
            ? 'gray-bg-1 black'
            : 'transparent gray-1';

        const handleClick = () => {
            setActiveTab(index);
        }

        return (
            <div
                className={`flex align-center justify-center b-4 p-8-16 fs-18 fs-05 text-center lh-150 ${colors} c-pointer fw-600`}
                onClick={() => handleClick()}
            >
                {name}
            </div>
        );
    }

    return (
        <section id="faq" className="wrapper m-t-40">
        <div className="content">
            <h2 className="fs-42 black fw-550 ls-1 capital text-center">
                Frequently asked questions
            </h2>

            <div className="flex justify-center align-center gap-36 m-t-20" id='tabs'>
                <Tab name='General' index={0} />
                <Tab name='Security' index={1} />
                <Tab name='Booking' index={2} />
                <Tab name='Payment' index={3} />
                <Tab name='Others' index={4} />
            </div>

            {activeTab === 0 && ( // General
            <div
                className="grid temp-columns-2 justify-space row-gap-24 w100 m-t-40 q-grid"
            >
                <Question
                    q='General 1??'
                    ans='Hello, World!'
                />

                <Question
                    q='General 2??'
                    ans='Hello, World!'
                />

                <Question
                    q='General 3??'
                    ans='Hello, World!'
                />

                <Question
                    q='General 4??'
                    ans='Hello, World!'
                />

                <Question
                    q='General 5??'
                    ans='Hello, World!'
                />

                <Question
                    q='General 6??'
                    ans='Hello, World!'
                />
            </div>
            )}

            {activeTab === 1 && ( // Security
            <div
                className="grid temp-columns-2 justify-space w100 row-gap-24 m-t-40 q-grid"
            >
                <Question
                    q='Security 1??'
                    ans='Hello, World!'
                />

                <Question
                    q='Security 2??'
                    ans='Hello, World!'
                />

                <Question
                    q='Security 3??'
                    ans='Hello, World!'
                />

                <Question
                    q='Security 4??'
                    ans='Hello, World!'
                />

                <Question
                    q='Security 5??'
                    ans='Hello, World!'
                />

                <Question
                    q='Security 6??'
                    ans='Hello, World!'
                />
            </div>
            )}

            {activeTab === 2 && ( // Booking
            <div
                className="grid temp-columns-2 justify-space w100 row-gap-24 m-t-40 q-grid"
            >
                <Question
                    q='Booking 1??'
                    ans='Hello, World!'
                />

                <Question
                    q='Booking 2??'
                    ans='Hello, World!'
                />

                <Question
                    q='Booking 3??'
                    ans='Hello, World!'
                />

                <Question
                    q='Booking 4??'
                    ans='Hello, World!'
                />

                <Question
                    q='Booking 5??'
                    ans='Hello, World!'
                />

                <Question
                    q='Booking 6??'
                    ans='Hello, World!'
                />
            </div>
            )}
            
            {activeTab === 3 && ( // Payment
            <div
                className="grid temp-columns-2 justify-space w100 row-gap-24 m-t-40 q-grid"
            >
                <Question
                    q='Payment 1??'
                    ans='Hello, World!'
                />

                <Question
                    q='Payment 2??'
                    ans='Hello, World!'
                />

                <Question
                    q='Payment 3??'
                    ans='Hello, World!'
                />

                <Question
                    q='Payment 4??'
                    ans='Hello, World!'
                />

                <Question
                    q='Payment 5??'
                    ans='Hello, World!'
                />

                <Question
                    q='Payment 6??'
                    ans='Hello, World!'
                />
            </div>
            )}

            {activeTab === 4 && ( // Other
            <div
                className="grid temp-columns-2 justify-space w100 row-gap-24 m-t-40 q-grid"
            >
                <Question
                    q='Other 1??'
                    ans='Hello, World!'
                />

                <Question
                    q='Other 2??'
                    ans='Hello, World!'
                />

                <Question
                    q='Other 3??'
                    ans='Hello, World!'
                />

                <Question
                    q='Other 4??'
                    ans='Hello, World!'
                />

                <Question
                    q='Other 5??'
                    ans='Hello, World!'
                />

                <Question
                    q='Other 6??'
                    ans='Hello, World!'
                />
            </div>
            )}
        </div>
    </section>
    );
}

export default FAQ;