console.log("Change background based on the time of the day ");


const blogPart = document.querySelector('.blog-part');
const article = document.querySelectorAll('.article');
console.log(article)

var currentTime = new Date().getHours();
if (document.body) {
    if (7 <= currentTime && currentTime < 20) {
        blogPart.classList.add('night');
        article.forEach(element => {
            element.classList.add('night');
        });
    }
    else {
        blogPart.classList.remove('night');
        blogPart.classList.add('day');
    }
}