document.addEventListener('DOMContentLoaded', function () {
    var skillsHeader = document.getElementById('skills-header');
    var skillsList = document.getElementById('skills-list');
    var toggleSign = document.getElementById('toggle-sign');
    skillsHeader.addEventListener('click', function () {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';
            toggleSign.textContent = '-'; // Change to minus when expanded
        }
        else {
            skillsList.style.display = 'none';
            toggleSign.textContent = '+'; // Change to plus when collapsed
        }
    });
});
