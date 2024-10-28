document.addEventListener('DOMContentLoaded', () => {
    const skillsHeader = document.getElementById('skills-header') as HTMLElement;
    const skillsList = document.getElementById('skills-list') as HTMLElement;
    const toggleSign = document.getElementById('toggle-sign') as HTMLElement;

    skillsHeader.addEventListener('click', () => {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleSign.textContent = '-'; // Change to minus when expanded
        } else {
            skillsList.style.display = 'none';
            toggleSign.textContent = '+'; // Change to plus when collapsed
        }
    });
});
