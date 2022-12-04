const fs = require('fs');
const puppeteer = require('puppeteer');
const url = "https://www.youtube.com/c/quemplantacolhe/search?query=";
const valor = "lichia";

(async function dados() {
    const navegador = await puppeteer.launch({ headless: false });
    const pagina = await navegador.newPage();

    await pagina.goto(url + valor);
    const lista = await pagina.evaluate(() => {
        const NodeList = document.querySelectorAll('#video-title');
        const linksArray = [...NodeList];
        const lista = linksArray.map(link => ({
            titulo: link.ariaLabel,
            src: link.href

        }))
        return lista
    });

    fs.writeFileSync('links.json', JSON.stringify(lista, null, 2), erro => {
        if (erro) throw new Error('algo deu errado')

        console.log('terminou')
    })
    await navegador.close();

})();

