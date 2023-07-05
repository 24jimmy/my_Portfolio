
    
  

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="contact-slider2__item swiper-slide">
        <div class="contact-slider2__img">
            <img src="${image}" alt="">
        </div>
        <div class="contact-slider2__content">
          <div class="contact-slider2__title">${title}</div>
          <span class="contact-slider2__code">${subtitle}</span>
          <div class="contact-slider2__text">${desp}</div>
          <a href="${href}" class="contact-slider2__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
