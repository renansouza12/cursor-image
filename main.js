const follower = document.querySelector(".cursor_outline");
const dot = document.querySelector(".cursor_dot");
const inner = document.querySelector('.inner');

const courses = document.querySelectorAll('.here')


gsap.set(dot, { xPercent: -50, yPercent: -50 });
gsap.set(follower, { xPercent: -50, yPercent: -50 });

document.addEventListener("mousemove", (event) => {
  gsap.to('.cursor_outline', 0.5, { x: event.clientX, y: event.clientY });
  gsap.to('.cursor_dot', 0.1, { x: event.clientX, y: event.clientY });
});

courses.forEach(course =>{
    course.addEventListener('mouseenter',()=>{
        console.log('entered');
        inner.classList.add('active');
    })
    course.addEventListener('mouseleave',()=>{
        console.log('leave');
        inner.classList.remove('active');
    })
})