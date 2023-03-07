const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY)
  if(window.scrollY > 500){
    // 배지 숨기기
    // gsap.to(요소, 지속시간 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display:'none'
    });
    // badgeEl.style.display = 'none';
    //to top 버튼 보이기
    gsap.to('#to-top', 0.2, {
      x: 0
    });
  }else{
    // 배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    // badgeEl.style.display = 'block';
    //to top 버튼 숨기기
    gsap.to('#to-top', 0.2, {
      x: 100
    });
  }
}, 300));

// _.throttle(함수, 시간)

toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간 옵션)
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

// swiper
// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction:'vertical',
  autoplay: true,
  loop: true
});


new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라읻 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true, //반복
  // autoplay :{
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation:{
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});


new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
  }
})

// toggle-promotion

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromition = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromition = !isHidePromition
  if(isHidePromition) {
    //숨김처리
    promotionEl.classList.add('hide');
  } else {
    //보임처리
    promotionEl.classList.remove('hide');
  }
});

// 둥둥떠다니는 애니메이션

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selecter, delay, size){
  // gsap.to(요소, 시간, 옵션)
  gsap.to(
    selecter, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
      y: size,
      repeat: -1, //반복
      yoyo: true, //다시 돌아오는 
      ease: Power1.easeInOut,
      delay: random(0, delay)
    }
  );
}
floatingObject('.floating', 1, 15);
floatingObject('.floating', 0.5, 15);
floatingObject('.floating', 1.5, 15);

// Scroll-Magic
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐의 여부를 감시하는 요소 지정
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//올해가 몇년도인지 자동으로 구분
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
