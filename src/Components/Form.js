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
    const handleSubmit = (e) => {
        e.preventDefault()

        let type;
        if (formType) { type = "goals" }
        else { type = "accomplishments" }


        fetch(`http://localhost:8000/${type}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formType ? goalData : accomplishmentData)
            })
                .then(res => res.json())
                .then(newData => onFormSubmit(newData, type))

        formType ? 
        setGoalData({name: "", progress: ""}) : 
        setAccomplishmentData({name: "", completed: ""})
        
        
    }
    


    return (
        <section>
        
        
        </section>



    )
}