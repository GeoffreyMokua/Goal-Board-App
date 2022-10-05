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
    


    return (
        <section>
        
        
        </section>



    )
}