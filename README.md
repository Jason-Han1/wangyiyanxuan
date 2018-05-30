# wangyiyanxuan
# Swiper两翼留白效果实现

    new Swiper('.swiper-container', {
                loop: true,
                spaceBetween: 30,
                slidesPerView: 1.15,
                centeredSlides: true,
                onInit: function (swiper) {
                  swiper.slides[1].className = 'swiper-slide swiper-slide-active'
                },
                autoplay: {
                  autoplay:true,
                  delay: 3000
                },
              })

# @ipmort引入的混合如果页面上有对应的类名可以不用引用,但是如果页面没有对应的类名就需要在你的类里引用混合有参数传参数


