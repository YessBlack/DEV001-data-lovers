export const welcomePage = () => {
  const viewWelcome =
  `
  <header class="header-pg1">
    <h1>Bienvenido terricola al multiverso wubba lubba dub-dub</h1>
  </header>
  <main class="main-bg">
    <video class="video-bg" src="media/s6.mp4" muted autoplay loop></video>
    <section class="spikes"></section>
  </main>
  <footer class="footer-pg1 spacing">
    <p>
      Rick es un brillante científico un tanto borracho que secuestra a su
      irritable nieto adolescente Morty para vivir aventuras en otros mundos y
      en dimensiones alternativas.
    </p>
    <p>
      Ven, te invitamos a que conozcas el maravilloso mundo de Rick And Morty
    </p>
    <br />
    <div class="group-footer">
      <a href="rickMorty.html" class="btn-iniciar">Entra al multiverso</a>
      <img src="img/logo.png" alt="" />
    </div>
  </footer>
  `
  return viewWelcome;
}
