const menu = document.querySelector('.menu-block');
const menuMain = menu.querySelector('.site-menu-main');
const submenuAll = menu.querySelectorAll('.sub-menu');
const goBack = menu.querySelector('.go-back');
const menuTrigger = document.querySelector('.mobile-menu-trigger');
const closeMenu = menu.querySelector('.mobile-menu-close');
const navLinkItemAll = menuMain.querySelectorAll('.nav-link-item');

let subMenu;
let subMenuArray = [];
let subMenuTextArray = [];

function last(array) {
  return array[array.length - 1];
}
function last2(array) {
  return array[array.length - 2];
}

menuMain.addEventListener('click', e => {
  if (!menu.classList.contains('active')) {
    return;
  }
  if (e.target.closest('.nav-item-has-children')) {
    const hasChildren = e.target.closest('.nav-item-has-children');

    showSubMenu(hasChildren);
  }
});
goBack.addEventListener('click', () => {
  const lastItem = last(subMenuArray);
  const lastItemText = last2(subMenuTextArray);
  subMenuArray.pop();
  subMenuTextArray.pop();
  if (subMenuArray.length >= 0) {
    document.getElementById(lastItem).style.animation =
      'slideRight 0.5s ease forwards';
    menu.querySelector('.current-menu-title').innerHTML = lastItemText;
    setTimeout(() => {
      document.getElementById(lastItem).classList.remove('active');
    }, 300);
  }
  if (subMenuArray.length == 0) {
    menu.querySelector('.mobile-menu-head').classList.remove('active');
  }
});
menuTrigger.addEventListener('click', () => {
  toggleMenu();
});
closeMenu.addEventListener('click', () => {
  toggleMenu();
});

function navLinkItemToggleMenu(navLinkItemAll) {
  for (let i = 0; navLinkItemAll.length > i; i++) {
    if (!navLinkItemAll[i].classList.contains('drop-trigger')) {
      navLinkItemAll[i].addEventListener('click', () => {
        toggleMenu();
      });
    }
  }
}
navLinkItemToggleMenu(navLinkItemAll);

document.querySelector('.menu-overlay').addEventListener('click', () => {
  toggleMenu();
});
function toggleMenu() {
  menu.classList.toggle('active');
  document.querySelector('.menu-overlay').classList.toggle('active');
}
function showSubMenu(hasChildren) {
  for (let i = 0; submenuAll.length < i; i++) {
    submenuAll[i].classList.remove('active');
  }
  subMenu = hasChildren.querySelector('.sub-menu');
  subMenuArray.push(subMenu.id);
  subMenu.classList.add('active');
  subMenu.style.animation = 'slideLeft 0.5s ease forwards';
  const menuTitle = hasChildren.querySelector('.drop-trigger').textContent;
  subMenuTextArray.push(menuTitle);

  menu.querySelector('.current-menu-title').innerHTML = menuTitle;
  menu.querySelector('.mobile-menu-head').classList.add('active');
}
window.onresize = function () {
  if (this.innerWidth > 991) {
    if (menu.classList.contains('active')) {
      toggleMenu();
    }
  }
};

//---------------Video Modal-----------------------
let videoSrc;

document.querySelectorAll('.video-btn').forEach(button => {
  button.addEventListener('click', () => {
    videoSrc = button.dataset.src;
    // console.log(videoSrc);
  });
});

document.getElementById('myModal').addEventListener('shown.bs.modal', () => {
  document.getElementById('video').src =
    videoSrc + '?autoplay=1&amp;modestbranding=1&amp;showinfo=0';
});

document.getElementById('myModal').addEventListener('hide.bs.modal', () => {
  document.getElementById('video').src = videoSrc;
});

//--------------- Scroll to Top ---------------
let scrollButton = document.getElementById('scrollTopButton');
let topdistance = 600;

if (scrollButton) {
  window.addEventListener('scroll', function () {
    if (
      document.body.scrollTop > topdistance ||
      document.documentElement.scrollTop > topdistance
    ) {
      scrollButton.classList.add('scrolltop-show');
      scrollButton.classList.remove('scrolltop-hide');
    } else {
      scrollButton.classList.add('scrolltop-hide');
      scrollButton.classList.remove('scrolltop-show');
    }
  });

  scrollButton.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

//--------------- Scroll On Count Up ---------------
let nums = document.querySelectorAll('.num');
let container = document.querySelector('.counter-wrapper');

let test = false; // when the function doesn't start

window.onscroll = () => {
  if ((window.screenY = container.offsetTop)) {
    if (!test) {
      nums.forEach(e => {
        let start = 0;
        let end = e.dataset.num;

        let count = setInterval(() => {
          start++;
          e.textContent = start;
          if (start == end) {
            clearInterval(count);
          }
        }, 4000 / end);
      });
    }
    test = true;
  }
};

//--------------- Skill Progress bar On Scroll Animation ---------------//

function isScrolledIntoView(elem) {
  const rect = elem.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  return elemTop < window.innerHeight && elemBottom >= 0;
}

const skillsProgressWrapper = document.querySelector('.skills-progress-wrapper');

window.addEventListener('scroll', function () {
  if (isScrolledIntoView(skillsProgressWrapper)) {
    const progressAnimatedLines = document.querySelectorAll('.progress-animated-line');
    progressAnimatedLines.forEach(line => {
      const progress = line.getAttribute('data-progress');
      line.style.width = progress + '%';
    });
  }
});

// Trigger the scroll event on load to handle cases where the element is already in view
window.dispatchEvent(new Event('scroll'));


//--------------- TimeLine On Scroll Animation ---------------//
const timelineWrapper = document.querySelector('.timeline-wrapper');

window.addEventListener('scroll', function () {
  if (isScrolledIntoView(timelineWrapper)) {
    const progressAnimatedLine = document.querySelector('.timeline');
    progressAnimatedLine.classList.add('line-movedown');

    const singleExp = document.querySelectorAll('.timeline-item-wrapper');
    singleExp[0].classList.add('single-exprnce-movedown');
    singleExp[1].classList.add('single-exprnce-movedown');
  }
});

// year update
function updateYearsOfExperience() {
  
  let startDate = new Date('2020-01-01'); 
  let currentDate = new Date();
  let diffYears = currentDate.getFullYear() - startDate.getFullYear();

  // Update the displayed years
  document.getElementById('yearsOfExperience').textContent = '+' + diffYears;
}

// Initial call to update years on page load
updateYearsOfExperience();

// Automatically update every year
setInterval(function() {
  // Update the years annually
  updateYearsOfExperience();
}, 1000 * 60 * 60 * 24 * 365); // Update every year (approx. 365 days)


// Function to update current year in the footer
function updateFooterYear() {
  // Get the current date
  let currentDate = new Date();

  // Update the current year in the footer
  let currentYearElement = document.getElementById('currentYear');
  let currentYear = currentDate.getFullYear();
  currentYearElement.textContent = currentYear;

  // Check if the year has changed to update the copyright year
  if (currentDate.getMonth() === 11 && currentDate.getDate() === 31) {
      // Update the copyright year on December 31st
      currentYearElement.textContent = currentYear + 1;
  }
}

// Initial call to update footer year on page load
updateFooterYear();

// Automatically update every day to check for year change
setInterval(function() {
  // Update footer year daily to check for year change
  updateFooterYear();
}, 1000 * 60 * 60 * 24); // Update every day (86400000 milliseconds)

//Email Sender

function sendMail(event){
  event.preventDefault();
  let params = {
      fname : document.getElementById("fname").value,
      lname : document.getElementById("lname").value,
      email : document.getElementById("mail").value,
      telNo : document.getElementById('telNo').value,
      msg : document.getElementById("msg").value
  }
  emailjs.send("service_38bxscp","template_x6i4pku",params).then(function(response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email Sent!");
  }, function(error) {
      console.log("FAILED...", error);
      alert("Email Failed to Send.");
  });
}

