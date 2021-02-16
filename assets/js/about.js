const skills=
[
    80, //IS
    75, //NS
    80, //WS
    70, //DF
    85, //DEVOPS
    60, //FIREWALLS
    85,  //VAPT
    70,  //PYTHON
    65,  //JAVA
    80,  //LINUX
    80,  //WINDOWS
    65,  //BASH
    70,  //DATABASES
    75,  //HTML
    60,  //JAVASCRIPT
    75   //PHOTOSHOP
];

const skillLength = skills.length;

function skillPercentage()
{
    for(i = 0; i< skillLength; i++)
    {   
        const varname = "--skill" +  (i+1);
        document.documentElement.style.setProperty(varname, skills[i] +"%")
    }
}

skillPercentage();


const flowIns = document.querySelectorAll('.skill-bar');

const flowInOptions = {
    root: null, // it is the viewport
    threshold: 0,
    rootMargin: "0px" //negative pulls the margin inside from the corner
};

const flowInScroll = new IntersectionObserver(function(entries, flowInScroll ){
    entries.forEach(entry =>{
        if(entry.isIntersecting)
        {
            entry.target.classList.add("flow-in");
            flowInScroll.unobserve(entry.target);
        }
        else
            return;
        });
}, flowInOptions);

flowIns.forEach(flowIn =>
    {
        flowInScroll.observe(flowIn);
    });
