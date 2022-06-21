import { useState } from "react"

function Form(props) {
    const [userInput, setUserInput] = useState('')
    function handleChange(event) {
        console.log(event.target.value);
    }

    return (
        <section className="bobbaForm">
            <form>
                <label htmlFor="findMeABuddy">Find me a Buddy!</label>
                <input type="" name="location" value="Location" onChange={handleChange}/>
            </form>
            <button>
                Bobba Time!
            </button>

        </section>
    )
}

export default Form