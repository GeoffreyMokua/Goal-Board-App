import React,  {useState} from 'react';


function GoalItem() {
     const {id, name, progress} = goal;
    const [progressBar, setProgressBar] = useState(progress);
     
    const handleChange = (e) => {
        setProgressBar(parseInt(e.target.value))
        fetch(`http://localhost:8000/goals/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({progress: progressBar})
        })
            .then(res => res.json())
            .then((updatedGoal) => {
                onUpdateGoal(updatedGoal)
            })
    }

    const handleDelete = () => {
        let type = "goals";
        onDeleteClick(id, type)
    }
    
    return (
    
)


}
export default GoalItem;