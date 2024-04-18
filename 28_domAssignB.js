

const myProfileDetailElement=document.querySelector('h2');
myProfileDetailElement.style.color='cadetblue';
myProfileDetailElement.style.fontFamily='Cambria';
myProfileDetailElement.style.fontSize='36px';

const parentUlElement=document.getElementById('technologies');
const secondLiElement=document.getElementById('secondChild');
parentUlElement.removeChild(secondLiElement);

// Changing the text of an element
const elementTechStackH3 = document.querySelector('.techStack');
elementTechStackH3.innerHTML = 'Complete Technology Stack is:';


const elementProfileLink = document.querySelector('#profileLink');
elementProfileLink.setAttribute('href', 'https://www.linkedin.com/');
