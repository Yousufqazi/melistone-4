const Form = document.getElementById('resume-form') as HTMLFormElement;
const ResumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;


Form.addEventListener('submit' , (event: Event)=> {
    event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experiance') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


    const resumeHtml =`
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b><span contenteditable="true">${name}</span></p>
    <p><b>Email : </b><span contenteditable="true">${email}</span></p>
    <p><b>Phone : </b><span contenteditable="true">${phone}</span></p>
    
    <h3>education</h3>
    <p span contenteditable="true">${education}</p>

    
    <h3>Experiance</h3>
    <p span contenteditable="true">${experiance}</p>

    
    <h3>Skills</h3>
    <p span contenteditable="true">${skills}</p>`;


    if(ResumeDisplayElement){
        ResumeDisplayElement.innerHTML = resumeHtml
    }else{
        console.error('The resume display element is missing.');
    }
});