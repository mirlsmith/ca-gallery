
$(document).ready(initPage)

$('.submit-btn').on('click', onContactFormSubmit)

function initPage() {
    createProjs()
    renderGallery()
}

function renderGallery() {
    const projs = getProjs()

    var projStrHTML = projs.map(proj => `
    <div class="col-md-4 col-sm-6 portfolio-item" data-proj="${proj.id}">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" > </a>
        <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
        </div>
    </div>`)

    $('.gallery').html(projStrHTML)

    $('.portfolio-item').on('click', renderModal)
}

function renderModal() {

    const projId = $(this).data('proj')

    const proj = getProjById(projId)

    const $elModal = $('.modal-body')

    $elModal.find('h2').text(proj.name)
    $elModal.find('.modal-title').text(proj.title)
    $elModal.find('.modal-desc').text(proj.desc)
    $elModal.find('span').text(`${proj.publishedAt.getDate()+1}/${proj.publishedAt.getMonth()+1}/${proj.publishedAt.getFullYear()}`)
    $elModal.find('a').attr('href',`${proj.url}`)
    $elModal.find('img').attr('src',`img/portfolio/${proj.id}.jpg`)
}

function onContactFormSubmit(){
    
    const email = $('#inputEmail').val().trim()
    const subj = $('#inputSubject').val().trim()
    const msg = $('#inputMessage').val()

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&from=${email}&to=miriamzeff@gmail.com&su=${subj}&body=${msg}`)
}