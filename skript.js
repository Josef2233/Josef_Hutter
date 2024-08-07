const form = document.querySelector('form');

form.addEventLister('submit', () =>{
    e.prventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if(!captchaResponse.length > 0){
        throw new Error("Captcha nicht ausgefüllt")
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    fetch('http://httpbin.org/post', {
        method:"POST",
        body: params,

    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))
});