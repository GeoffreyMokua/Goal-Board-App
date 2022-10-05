import React, {useState} from 'react';

function Form() {
    const [formType, setFormType] = useState(true);
    const [goalData, setGoalData] = useState({
        name: "",
        progess: ""
    })
    const [accomplishmmentData, setAccomplishmentData] = useState({
        name: "",
        completed: ""
    })
    const handleFormTypeChange = () => {
        setFormType(!formType);
    }
    const handleChange = (e) => {
        if (formType) {
            setGoalData({
                ...goalData,
                [e.target.name]: e.target.value,
            })
        } else {
            setAccomplishmentData({
                ...accomplishmmentData,
                [e.target.name]: e.target.value,
            })
        };
    };
    


    return (
        <section>
        
        
        </section>



    )
}