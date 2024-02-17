let scale = 1;

// 1 - Yes 
// 2 - No
// 3 - Thirsty
// 4 - Hungry
// 5 - Wine
// 6 - Tequila
// 7 - Sushi
// 8 - Shawerma

var stage = 0;
var choice = 0;
let descending_scale = 0.2;

//no-------------------------------------------------------
document.getElementById('no-btn').addEventListener('click', function() {
  
  if(stage == 0)
  {
    stage++;
    document.querySelector('.popup-content p').textContent = 'Are the flowers thirsty or hungry?';
    document.getElementById('yes-btn').textContent = 'Thirsty';
    document.getElementById('yes-btn').style.transform = 'scale(1)'; 
    this.textContent = 'Hungry'; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }

  else if(stage == 1)
  {
    stage++;
    document.querySelector('.popup-content p').textContent = 'What will the flowers eat, sushi or shawerma?';
    document.getElementById('yes-btn').textContent = 'Sushi';
    this.textContent = 'Shawerma';  

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }

  else if(stage == 2)
  {
    stage++;
    document.querySelector('.popup-content p').textContent = 'Great choice!';
    document.getElementById('no-btn').textContent = 'Close';
    document.getElementById('yes-btn').textContent = 'Additional wishes'; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }

  else if(stage == 3)
  {
    document.getElementById('popup').style.display = 'none';
  }
    
  });
//----------------------------------------------------


//yes-------------------------------------------------
document.getElementById('yes-btn').addEventListener('click', function() {
  if(stage == 0)
  {
    scale -= descending_scale;
    this.style.transform = `scale(${scale})`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }

  //Thirsty
  else if(stage == 1)
  {
    stage++;
    document.querySelector('.popup-content p').textContent = 'Are flowers going to drink tequila?';
    document.getElementById('no-btn').textContent = 'Tequila';
    this.textContent = 'Wine';  

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }
  else if(stage == 2)
  { 
    document.querySelector('.popup-content p').textContent = 'Great choice!';
    document.getElementById('no-btn').textContent = 'Close';
    document.getElementById('yes-btn').textContent = 'Additional wishes'; 

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "a.kapara2006@gmail.com",
        Password : "ur_password",
        To : 'a.kapara2006@gmail.com',
        From : "a.kapara2006@gmail.com",
        Subject : this.textContent,
        Body : this.textContent
    });
  }

  //additional info
  else if(stage == 3) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent)) {
        window.location.href = 'tg://resolve?domain=abdu1oo';
    } else {
        window.open('https://t.me/abdu1oo', '_blank');
    }
}
});
//----------------------------------------------------



	setTimeout(
  () => {
    document
      .querySelector('.not-loaded')
      .classList
      .remove('not-loaded');
  },
  1000,
);

window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('popup').style.display = 'block';
  }, 10000); // 10 sec = 10000
});

document.getElementById('close-popup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});